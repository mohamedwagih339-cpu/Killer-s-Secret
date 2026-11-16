/* ===== Part 8: Procedural Audio Manager (Web Audio API only) =====
   Every sound is synthesized at runtime. No audio files, no libraries. */

const AUDIO_SETTINGS_KEY = "detective_audio_settings";

const DEFAULT_AUDIO_SETTINGS = {
  musicVolume: 0.75,
  sfxVolume: 0.8,
  muted: false,
  visualEffects: true
};

function clampUnit(value, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(0, Math.min(1, number));
}

function loadAudioSettings() {
  let raw = null;
  try {
    raw = JSON.parse(localStorage.getItem(AUDIO_SETTINGS_KEY) || "null");
  } catch (error) {
    raw = null;
  }

  const source = raw && typeof raw === "object" ? raw : {};
  return {
    musicVolume: clampUnit(source.musicVolume, DEFAULT_AUDIO_SETTINGS.musicVolume),
    sfxVolume: clampUnit(source.sfxVolume, DEFAULT_AUDIO_SETTINGS.sfxVolume),
    muted: source.muted === true,
    visualEffects: source.visualEffects !== false
  };
}

function saveAudioSettings() {
  try {
    localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(gameSettings));
  } catch (error) {
    /* Storage can be unavailable; the game must keep working. */
  }
}

const gameSettings = loadAudioSettings();

function getGameSettings() {
  return gameSettings;
}

// Merges new settings, persists them, and applies them to audio and visuals.
function updateGameSettings(partial) {
  if (!partial || typeof partial !== "object") return gameSettings;
  if (Object.prototype.hasOwnProperty.call(partial, "musicVolume")) {
    gameSettings.musicVolume = clampUnit(partial.musicVolume, gameSettings.musicVolume);
  }
  if (Object.prototype.hasOwnProperty.call(partial, "sfxVolume")) {
    gameSettings.sfxVolume = clampUnit(partial.sfxVolume, gameSettings.sfxVolume);
  }
  if (Object.prototype.hasOwnProperty.call(partial, "muted")) {
    gameSettings.muted = partial.muted === true;
  }
  if (Object.prototype.hasOwnProperty.call(partial, "visualEffects")) {
    gameSettings.visualEffects = partial.visualEffects !== false;
  }
  saveAudioSettings();
  if (typeof applyAudioSettings === "function") applyAudioSettings();
  if (typeof applyEffectsSettings === "function") applyEffectsSettings();
  return gameSettings;
}

/* Pentatonic/minor chord tables. MIDI numbers keep the frequencies readable. */
const MUSIC_MODES = {
  calm: {
    chordDuration: 4.4,
    filter: 950,
    attack: 1.4,
    release: 1.6,
    wave: "triangle",
    detune: -4,
    noteGain: 0.17,
    pulse: true,
    pulseGain: 0.1,
    chords: [
      [45, 48, 52],
      [41, 45, 48],
      [48, 52, 55],
      [43, 47, 50]
    ]
  },
  tense: {
    chordDuration: 2.6,
    filter: 1350,
    attack: 0.45,
    release: 0.9,
    wave: "sawtooth",
    detune: 6,
    noteGain: 0.115,
    pulse: true,
    pulseGain: 0.14,
    chords: [
      [45, 48, 51],
      [44, 47, 51],
      [46, 49, 52],
      [45, 48, 51]
    ]
  },
  crimeScene: {
    chordDuration: (60 / 100) * 4,
    filter: 5200,
    sceneLoop: {
      bpm: 100,
      bassPattern: [33, 33, 40, 33, 36, 36, 41, 40],
      leadPhrases: [
        [69, 72, 74, 71, 69],
        [69, 76, 74, 71, 69],
        [69, 72, 71, 68, 69]
      ],
      padBars: 4,
      hitBars: 8
    }
  },
  victory: {
    chordDuration: 3.2,
    filter: 2400,
    attack: 0.35,
    release: 1.2,
    wave: "triangle",
    detune: 0,
    noteGain: 0.15,
    pulse: false,
    sparkle: true,
    chords: [
      [48, 52, 55],
      [53, 57, 60],
      [55, 59, 62],
      [48, 52, 55]
    ]
  },
  sad: {
    chordDuration: 5.2,
    filter: 620,
    attack: 1.6,
    release: 2,
    wave: "sine",
    detune: -6,
    noteGain: 0.185,
    pulse: false,
    chords: [
      [45, 48, 52],
      [43, 47, 50],
      [41, 45, 48],
      [40, 44, 47]
    ]
  }
};

const audioManager = {
  ctx: null,
  unlocked: false,
  master: null,
  musicVolumeGain: null,
  musicVisibilityGain: null,
  sfxVolumeGain: null,
  musicChannels: {},
  analyser: null,
  analyserData: null,
  mode: "calm",
  pendingMode: "calm",
  nextChordTime: 0,
  schedulerId: null,
  visibilitySuspendTimer: null,
  visibilitySuspendPromise: null,
  musicVisibilityStartValue: 1,
  musicVisibilityTarget: 1,
  musicVisibilityStartTime: 0,
  musicVisibilityDuration: 0,
  lastTickTime: 0,
  chordsScheduled: 0,
  crimeSceneBarIndex: 0,
  crimeSceneEffects: null
};

let labHeartbeatTimer = null;
let labHeartbeatNextTime = null;

function midiToFrequency(midi) {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function effectiveMusicVolume() {
  return gameSettings.muted ? 0 : gameSettings.musicVolume;
}

function effectiveSfxVolume() {
  return gameSettings.muted ? 0 : gameSettings.sfxVolume;
}

function ensureAudioContext() {
  if (audioManager.ctx) return audioManager.ctx;

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;

  const ctx = new AudioContextClass();

  const master = ctx.createGain();
  master.gain.value = 0.9;

  const compressor = ctx.createDynamicsCompressor();
  compressor.threshold.value = -8;
  compressor.knee.value = 18;
  compressor.ratio.value = 3;
  compressor.attack.value = 0.004;
  compressor.release.value = 0.28;

  const musicVolumeGain = ctx.createGain();
  musicVolumeGain.gain.value = effectiveMusicVolume();

  const musicVisibilityGain = ctx.createGain();
  musicVisibilityGain.gain.value = 1;

  const sfxVolumeGain = ctx.createGain();
  sfxVolumeGain.gain.value = effectiveSfxVolume();

  const musicChannels = {};
  Object.keys(MUSIC_MODES).forEach((name) => {
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = MUSIC_MODES[name].filter;
    filter.Q.value = 0.6;
    const gain = ctx.createGain();
    gain.gain.value = 0.0001;
    filter.connect(gain);
    gain.connect(musicVolumeGain);
    musicChannels[name] = { filter: filter, gain: gain };
  });

  const crimeSceneFilter = musicChannels.crimeScene.filter;
  const crimeSceneDelay = ctx.createDelay(1);
  crimeSceneDelay.delayTime.value = (60 / MUSIC_MODES.crimeScene.sceneLoop.bpm) / 2;
  const delayFeedback = ctx.createGain();
  delayFeedback.gain.value = 0.18;
  const delayReturn = ctx.createGain();
  delayReturn.gain.value = 0.22;
  crimeSceneDelay.connect(delayFeedback);
  delayFeedback.connect(crimeSceneDelay);
  crimeSceneDelay.connect(delayReturn);
  delayReturn.connect(crimeSceneFilter);

  const crimeSceneReverb = ctx.createConvolver();
  const reverbLength = Math.floor(ctx.sampleRate * 0.75);
  const reverbImpulse = ctx.createBuffer(2, reverbLength, ctx.sampleRate);
  for (let channel = 0; channel < reverbImpulse.numberOfChannels; channel += 1) {
    const impulseData = reverbImpulse.getChannelData(channel);
    for (let sample = 0; sample < reverbLength; sample += 1) {
      const decay = 1 - sample / reverbLength;
      impulseData[sample] = (Math.random() * 2 - 1) * decay * decay * decay;
    }
  }
  crimeSceneReverb.buffer = reverbImpulse;
  const reverbReturn = ctx.createGain();
  reverbReturn.gain.value = 0.14;
  crimeSceneReverb.connect(reverbReturn);
  reverbReturn.connect(crimeSceneFilter);

  const noiseBuffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.06), ctx.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  for (let sample = 0; sample < noiseData.length; sample += 1) {
    noiseData[sample] = Math.random() * 2 - 1;
  }

  const analyser = ctx.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = 0.6;

  musicVolumeGain.connect(musicVisibilityGain);
  musicVisibilityGain.connect(master);
  sfxVolumeGain.connect(master);
  master.connect(compressor);
  compressor.connect(ctx.destination);
  master.connect(analyser);

  audioManager.ctx = ctx;
  audioManager.master = master;
  audioManager.musicVolumeGain = musicVolumeGain;
  audioManager.musicVisibilityGain = musicVisibilityGain;
  audioManager.sfxVolumeGain = sfxVolumeGain;
  audioManager.musicChannels = musicChannels;
  audioManager.crimeSceneEffects = {
    delay: crimeSceneDelay,
    reverb: crimeSceneReverb,
    noiseBuffer: noiseBuffer
  };
  audioManager.analyser = analyser;
  audioManager.analyserData = new Float32Array(analyser.fftSize);
  audioManager.musicVisibilityStartTime = ctx.currentTime;

  return ctx;
}

function applyAudioSettings() {
  const ctx = audioManager.ctx;
  if (!ctx) return;
  const now = ctx.currentTime;
  audioManager.musicVolumeGain.gain.setTargetAtTime(effectiveMusicVolume(), now, 0.06);
  audioManager.sfxVolumeGain.gain.setTargetAtTime(effectiveSfxVolume(), now, 0.06);
}

function stopMusicScheduler() {
  if (audioManager.schedulerId !== null) {
    clearTimeout(audioManager.schedulerId);
    audioManager.schedulerId = null;
  }
}

// The browser blocks audio until a gesture, so the first interaction unlocks it.
function unlockAudio() {
  if (audioManager.unlocked) return;

  const ctx = ensureAudioContext();
  if (!ctx) return;

  audioManager.unlocked = true;
  applyAudioSettings();
  if (typeof loadSirenBuffer === "function") {
    loadSirenBuffer();
  }

  const start = () => {
    audioManager.mode = audioManager.pendingMode;
    audioManager.nextChordTime = ctx.currentTime + 0.12;
    const channel = audioManager.musicChannels[audioManager.mode];
    if (channel) {
      channel.gain.gain.cancelScheduledValues(ctx.currentTime);
      channel.gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      channel.gain.gain.setTargetAtTime(1, ctx.currentTime, 0.3);
    }
    scheduleMusic();
  };

  if (ctx.state === "suspended") {
    ctx.resume().then(start).catch((error) => {
      console.error("Could not resume audio after unlocking:", error);
    });
  } else {
    start();
  }
}

["pointerdown", "keydown", "touchstart"].forEach((eventName) => {
  window.addEventListener(eventName, unlockAudio, { once: true, passive: true });
});

function setMusicMode(mode) {
  if (!MUSIC_MODES[mode]) return;
  audioManager.pendingMode = mode;

  if (!audioManager.ctx || !audioManager.unlocked || audioManager.mode === mode) return;

  const ctx = audioManager.ctx;
  const now = ctx.currentTime;
  const currentChannel = audioManager.musicChannels[audioManager.mode];
  const nextChannel = audioManager.musicChannels[mode];
  if (!currentChannel || !nextChannel) return;

  if (mode === "crimeScene") audioManager.crimeSceneBarIndex = 0;

  [currentChannel.gain.gain, nextChannel.gain.gain].forEach((gain) => {
    const current = Math.max(0.0001, Math.min(1, gain.value));
    gain.cancelScheduledValues(now);
    gain.setValueAtTime(current, now);
  });
  currentChannel.gain.gain.linearRampToValueAtTime(0.0001, now + 1.5);
  nextChannel.gain.gain.linearRampToValueAtTime(1, now + 1.5);
  audioManager.mode = mode;
  audioManager.nextChordTime = now + 0.06;
  scheduleMusic();
}

// Maps the current screen (and case result) to the right music mood.
function setMusicForScreen(name) {
  let mode = "calm";

  if (name === "interrogation" || name === "accusation") {
    mode = "tense";
  } else if (name === "crimeScene") {
    mode = "crimeScene";
  } else if (name === "promotion") {
    mode = "victory";
  } else if (name === "caseEnd") {
    let stars = 0;
    if (typeof gameState !== "undefined" && gameState.currentCase && typeof getLatestCaseResult === "function") {
      const latest = getLatestCaseResult(gameState.currentCase.id);
      stars = latest ? Number(latest.stars) || 0 : 0;
    }
    mode = stars >= 2 ? "victory" : stars === 1 ? "calm" : "sad";
  }

  setMusicMode(mode);
}

function scheduleMusic() {
  const ctx = audioManager.ctx;
  if (!ctx || !audioManager.unlocked || document.hidden || ctx.state !== "running") {
    stopMusicScheduler();
    return;
  }
  stopMusicScheduler();
  const mode = MUSIC_MODES[audioManager.mode] || MUSIC_MODES.calm;
  const channel = audioManager.musicChannels[audioManager.mode];
  if (!channel) return;

  if (audioManager.nextChordTime < ctx.currentTime) {
    audioManager.nextChordTime = ctx.currentTime + 0.05;
  }

  const horizon = ctx.currentTime + 1.2;
  while (audioManager.nextChordTime < horizon) {
    scheduleChord(mode, audioManager.nextChordTime, channel.filter);
    audioManager.nextChordTime += mode.chordDuration;
  }

  audioManager.schedulerId = setTimeout(() => {
    audioManager.schedulerId = null;
    scheduleMusic();
  }, 350);
}

function scheduleChord(mode, when, destination) {
  if (!audioManager.ctx || !destination) return;

  if (mode.sceneLoop) {
    scheduleCrimeSceneBar(mode, when, destination);
    return;
  }

  const chords = mode.chords;
  const chord = chords[audioManager.chordsScheduled % chords.length];
  audioManager.chordsScheduled += 1;

  destination.frequency.setTargetAtTime(mode.filter, when, 0.5);

  const noteDuration = mode.chordDuration + mode.release;
  chord.forEach((midi, index) => {
    const peak = mode.noteGain * (index === 0 ? 1 : 0.82);
    playPadNote(midiToFrequency(midi), when, noteDuration, mode, peak, index, destination);
  });

  if (mode.pulse) {
    playMusicPulse(when, mode.pulseGain, destination);
  }

  if (mode.sparkle && audioManager.chordsScheduled % 2 === 0) {
    playMusicSparkle(when + 0.25, destination);
  }
}

function scheduleCrimeSceneBar(mode, when, destination) {
  const loop = mode.sceneLoop;
  const beatDuration = 60 / loop.bpm;
  const barDuration = beatDuration * 4;
  const barIndex = audioManager.crimeSceneBarIndex;
  audioManager.crimeSceneBarIndex += 1;

  destination.frequency.setTargetAtTime(mode.filter, when, 0.5);

  // Driving eighth-note bass that pulses hard on every beat.
  loop.bassPattern.forEach((midi, step) => {
    playCrimeBass(midi, when + step * beatDuration / 2, beatDuration * 0.42, destination);
  });

  // Percussive hit on every beat, a backbeat on 2 and 4, and a steady hi-hat.
  for (let beat = 0; beat < 4; beat += 1) {
    playCrimeKick(when + beat * beatDuration, destination);
    if (beat % 2 === 1) playCrimeSnare(when + beat * beatDuration, destination);
  }
  for (let step = 0; step < 8; step += 1) {
    playCrimeTick(when + step * beatDuration / 2, destination, step % 2 === 1 ? 1 : 0.55);
  }

  const phraseIndex = Math.floor(barIndex / 2) % loop.leadPhrases.length;
  const phrase = loop.leadPhrases[phraseIndex];
  if (barIndex % 2 === 0) {
    playCrimeLead(phrase[0], when + beatDuration * 0.5, destination);
    playCrimeLead(phrase[1], when + beatDuration * 1.5, destination);
    playCrimeLead(phrase[2], when + beatDuration * 3, destination);
  } else {
    playCrimeLead(phrase[3], when + beatDuration * 0.5, destination);
    playCrimeLead(phrase[4], when + beatDuration * 3, destination);
  }

  if (barIndex % loop.padBars === 0) {
    playCrimePad(when, barDuration * loop.padBars, destination);
  }

  if (barIndex > 0 && barIndex % loop.hitBars === 0) {
    playCrimeHit(when, destination);
  }
}

function playCrimeKick(when, destination) {
  const ctx = audioManager.ctx;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const end = when + 0.32;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(118, when);
  oscillator.frequency.exponentialRampToValueAtTime(44, when + 0.16);
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(0.42, when + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(when);
  oscillator.stop(end + 0.02);
}

function playCrimeSnare(when, destination) {
  const ctx = audioManager.ctx;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const end = when + 0.18;

  source.buffer = audioManager.crimeSceneEffects.noiseBuffer;
  source.loop = true;
  filter.type = "bandpass";
  filter.frequency.value = 1900;
  filter.Q.value = 0.9;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(0.15, when + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  source.start(when);
  source.stop(end + 0.02);
}

function playCrimeBass(midi, when, duration, destination) {
  const ctx = audioManager.ctx;
  const oscillator = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const end = when + duration;

  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(midiToFrequency(midi), when);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(230, when);
  filter.frequency.exponentialRampToValueAtTime(175, end);
  filter.Q.value = 0.8;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(0.24, when + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.12, when + 0.13);
  gain.gain.setValueAtTime(0.12, end - 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  oscillator.start(when);
  oscillator.stop(end + 0.03);
}

function playCrimeLead(midi, when, destination) {
  const ctx = audioManager.ctx;
  const effects = audioManager.crimeSceneEffects;
  const oscillator = ctx.createOscillator();
  const sub = ctx.createOscillator();
  const vibrato = ctx.createOscillator();
  const vibratoDepth = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const subGain = ctx.createGain();
  const delaySend = ctx.createGain();
  const reverbSend = ctx.createGain();
  const end = when + 0.78;
  const frequency = midiToFrequency(midi);

  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(frequency, when);
  sub.type = "triangle";
  sub.frequency.setValueAtTime(frequency / 2, when);
  vibrato.type = "sine";
  vibrato.frequency.value = 4.6;
  vibratoDepth.gain.value = 1.6;
  vibrato.connect(vibratoDepth);
  vibratoDepth.connect(oscillator.frequency);

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2100, when);
  filter.frequency.exponentialRampToValueAtTime(1200, end);
  filter.Q.value = 5;

  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(0.15, when + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);
  subGain.gain.setValueAtTime(0.0001, when);
  subGain.gain.linearRampToValueAtTime(0.05, when + 0.05);
  subGain.gain.exponentialRampToValueAtTime(0.0001, end);
  delaySend.gain.value = 0.32;
  reverbSend.gain.value = 0.16;

  oscillator.connect(filter);
  filter.connect(gain);
  sub.connect(subGain);
  subGain.connect(destination);
  gain.connect(destination);
  gain.connect(delaySend);
  gain.connect(reverbSend);
  delaySend.connect(effects.delay);
  reverbSend.connect(effects.reverb);
  oscillator.start(when);
  sub.start(when);
  vibrato.start(when);
  oscillator.stop(end + 0.05);
  sub.stop(end + 0.05);
  vibrato.stop(end + 0.05);
}

function playCrimeTick(when, destination, level) {
  const ctx = audioManager.ctx;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  const end = when + 0.045;
  const peak = 0.02 * (level == null ? 1 : level);

  source.buffer = audioManager.crimeSceneEffects.noiseBuffer;
  filter.type = "highpass";
  filter.frequency.value = 4200;
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(peak, when + 0.003);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(destination);
  source.start(when);
  source.stop(end + 0.01);
}

function playCrimePad(when, duration, destination) {
  const ctx = audioManager.ctx;
  const riseEnd = when + duration * 0.48;
  const fallStart = when + duration * 0.55;
  const end = when + duration;

  [
    { midi: 57, peak: 0.06 },
    { midi: 60, peak: 0.045 },
    { midi: 64, peak: 0.034 },
    { midi: 68, peak: 0.024 }
  ].forEach((note) => {
    const oscillator = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(midiToFrequency(note.midi), when);
    oscillator.detune.value = note.midi % 2 === 0 ? 4 : -4;
    filter.type = "lowpass";
    filter.frequency.value = 1300;
    filter.Q.value = 0.7;
    gain.gain.setValueAtTime(0.0001, when);
    gain.gain.linearRampToValueAtTime(note.peak, riseEnd);
    gain.gain.setValueAtTime(note.peak, fallStart);
    gain.gain.linearRampToValueAtTime(0.0001, end);
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(destination);
    oscillator.start(when);
    oscillator.stop(end + 0.04);
  });
}

function playCrimeHit(when, destination) {
  const ctx = audioManager.ctx;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  const end = when + 1.1;
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(72, when);
  oscillator.frequency.exponentialRampToValueAtTime(38, when + 0.42);
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(0.24, when + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);
  oscillator.connect(gain);
  gain.connect(destination);
  oscillator.start(when);
  oscillator.stop(end + 0.04);
}

function playPadNote(freq, when, duration, mode, peak, index, destination) {
  const ctx = audioManager.ctx;
  const gain = ctx.createGain();
  const end = when + duration;

  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(peak, when + mode.attack);
  gain.gain.setValueAtTime(peak, end - mode.release);
  gain.gain.linearRampToValueAtTime(0.0001, end);
  gain.connect(destination);

  const body = ctx.createOscillator();
  body.type = mode.wave;
  body.frequency.value = freq;
  body.detune.value = mode.detune + (index % 2 === 0 ? 0 : 5);
  const bodyGain = ctx.createGain();
  bodyGain.gain.value = 0.7;
  body.connect(bodyGain);
  bodyGain.connect(gain);
  body.start(when);
  body.stop(end + 0.08);

  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = freq * 2;
  const shimmerGain = ctx.createGain();
  shimmerGain.gain.value = 0.24;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(gain);
  shimmer.start(when);
  shimmer.stop(end + 0.08);
}

function playMusicPulse(when, peak, destination) {
  const ctx = audioManager.ctx;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const duration = 0.75;

  osc.type = "sine";
  osc.frequency.setValueAtTime(58, when);
  osc.frequency.exponentialRampToValueAtTime(38, when + duration);
  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(peak, when + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, when + duration);
  osc.connect(gain);
  gain.connect(destination);
  osc.start(when);
  osc.stop(when + duration + 0.05);
}

function playMusicSparkle(when, destination) {
  const ctx = audioManager.ctx;
  const notes = [84, 88, 91];
  notes.forEach((midi, index) => {
    const start = when + index * 0.12;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = midiToFrequency(midi);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(0.05, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);
    osc.connect(gain);
    gain.connect(destination);
    osc.start(start);
    osc.stop(start + 0.95);
  });
}

/* ===== Sound effects ===== */

function sfxTone(options) {
  const ctx = audioManager.ctx;
  if (!ctx) return;

  const delay = options.delay || 0;
  const duration = options.duration || 0.15;
  const start = ctx.currentTime + 0.012 + delay;
  const peak = options.gain == null ? 0.1 : options.gain;
  const attack = Math.min(options.attack || 0.008, duration * 0.4);

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = options.type || "sine";
  osc.frequency.setValueAtTime(Math.max(20, options.freq), start);
  if (options.endFreq) {
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, options.endFreq), start + duration);
  }

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(peak, start + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  osc.connect(gain);
  gain.connect(audioManager.sfxVolumeGain);
  osc.start(start);
  osc.stop(start + duration + 0.06);
}

function playClickSfx() {
  sfxTone({ freq: 860, endFreq: 620, type: "triangle", duration: 0.07, gain: 0.055 });
}

function playClueSfx() {
  sfxTone({ freq: 659.25, type: "sine", duration: 0.24, gain: 0.09 });
  sfxTone({ freq: 987.77, type: "sine", duration: 0.3, gain: 0.075, delay: 0.08 });
  sfxTone({ freq: 1318.51, type: "triangle", duration: 0.5, gain: 0.055, delay: 0.17 });
}

function playEmptySfx() {
  sfxTone({ freq: 175, endFreq: 88, type: "triangle", duration: 0.24, gain: 0.12 });
  sfxTone({ freq: 120, endFreq: 70, type: "sine", duration: 0.2, gain: 0.07, delay: 0.02 });
}

function playTypeTick() {
  if (!audioManager.ctx || !audioManager.unlocked) return;
  if (gameSettings.muted || gameSettings.sfxVolume <= 0) return;
  const now = audioManager.ctx.currentTime;
  if (now - audioManager.lastTickTime < 0.05) return;
  audioManager.lastTickTime = now;
  sfxTone({
    freq: 1500 + Math.random() * 550,
    endFreq: 1150,
    type: "square",
    duration: 0.018,
    gain: 0.016
  });
}

function playLabSfx() {
  sfxTone({ freq: 880, endFreq: 1320, type: "sine", duration: 0.18, gain: 0.075 });
  sfxTone({ freq: 1320, endFreq: 1760, type: "sine", duration: 0.22, gain: 0.065, delay: 0.16 });
}

function startLabHeartbeat() {
  if (labHeartbeatTimer !== null || !audioManager.unlocked || !audioManager.ctx ||
      audioManager.ctx.state !== "running" || document.hidden) return;

  const pulse = () => {
    labHeartbeatTimer = null;
    const tablet = document.getElementById("tablet");
    const lab = document.getElementById("tablet-lab");
    const autopsy = document.getElementById("lab-panel-autopsy");
    if (document.hidden || !tablet || !tablet.classList.contains("show") ||
        !lab || lab.classList.contains("hidden") ||
        !autopsy || autopsy.classList.contains("hidden") ||
        !audioManager.ctx || audioManager.ctx.state !== "running") {
      stopLabHeartbeat();
      return;
    }
    const now = audioManager.ctx.currentTime;
    if (now >= labHeartbeatNextTime) {
      if (!gameSettings.muted && gameSettings.sfxVolume > 0) {
        sfxTone({ freq: 72, endFreq: 58, type: "sine", duration: 0.42, gain: 0.028 });
      }
      labHeartbeatNextTime = now + 1.8;
    }
    const delay = Math.max(20, (labHeartbeatNextTime - audioManager.ctx.currentTime) * 1000);
    labHeartbeatTimer = setTimeout(pulse, delay);
  };

  labHeartbeatNextTime = audioManager.ctx.currentTime;
  pulse();
}

function stopLabHeartbeat() {
  if (labHeartbeatTimer !== null) {
    clearTimeout(labHeartbeatTimer);
    labHeartbeatTimer = null;
  }
  labHeartbeatNextTime = null;
}

function rampMusicVisibilityGain(target, duration) {
  const ctx = audioManager.ctx;
  const node = audioManager.musicVisibilityGain;
  if (!ctx || !node) return;

  const now = ctx.currentTime;
  const elapsed = Math.max(0, now - audioManager.musicVisibilityStartTime);
  const progress = audioManager.musicVisibilityDuration > 0
    ? Math.min(1, elapsed / audioManager.musicVisibilityDuration)
    : 1;
  const current = audioManager.musicVisibilityStartValue +
    (audioManager.musicVisibilityTarget - audioManager.musicVisibilityStartValue) * progress;

  node.gain.cancelScheduledValues(now);
  node.gain.setValueAtTime(Math.max(0.0001, current), now);
  node.gain.linearRampToValueAtTime(target, now + duration);
  audioManager.musicVisibilityStartValue = Math.max(0.0001, current);
  audioManager.musicVisibilityTarget = target;
  audioManager.musicVisibilityStartTime = now;
  audioManager.musicVisibilityDuration = duration;
}

function resumeAudioAfterVisibility(ctx) {
  if (document.hidden || ctx !== audioManager.ctx || !audioManager.unlocked) return;

  const startAudio = () => {
    if (document.hidden || ctx !== audioManager.ctx) return;
    rampMusicVisibilityGain(1, 0.3);
    scheduleMusic();
    startLabHeartbeat();
  };

  if (ctx.state === "suspended") {
    ctx.resume().then(startAudio).catch((error) => {
      console.error("Could not resume audio when the page became visible:", error);
    });
  } else {
    startAudio();
  }
}

function handleAudioVisibilityChange() {
  const ctx = audioManager.ctx;
  if (!ctx || !audioManager.unlocked) return;

  if (document.hidden) {
    stopMusicScheduler();
    stopLabHeartbeat();
    rampMusicVisibilityGain(0.0001, 0.3);

    if (audioManager.visibilitySuspendTimer !== null) {
      clearTimeout(audioManager.visibilitySuspendTimer);
    }
    audioManager.visibilitySuspendTimer = setTimeout(() => {
      audioManager.visibilitySuspendTimer = null;
      if (document.hidden && ctx === audioManager.ctx && ctx.state === "running" &&
          !audioManager.visibilitySuspendPromise) {
        const suspension = ctx.suspend();
        audioManager.visibilitySuspendPromise = suspension;
        suspension.then(() => {
          if (audioManager.visibilitySuspendPromise === suspension) {
            audioManager.visibilitySuspendPromise = null;
          }
          if (!document.hidden) resumeAudioAfterVisibility(ctx);
        }).catch((error) => {
          if (audioManager.visibilitySuspendPromise === suspension) {
            audioManager.visibilitySuspendPromise = null;
          }
          console.error("Could not suspend audio while the page was hidden:", error);
          if (!document.hidden) resumeAudioAfterVisibility(ctx);
        });
      }
    }, 320);
    return;
  }

  if (audioManager.visibilitySuspendTimer !== null) {
    clearTimeout(audioManager.visibilitySuspendTimer);
    audioManager.visibilitySuspendTimer = null;
  }
  if (audioManager.visibilitySuspendPromise) return;
  resumeAudioAfterVisibility(ctx);
}

function playPromotionSfx() {
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((freq, index) => {
    sfxTone({
      freq: freq,
      type: index === notes.length - 1 ? "sine" : "triangle",
      duration: index === notes.length - 1 ? 0.7 : 0.3,
      gain: 0.085,
      delay: index * 0.11
    });
  });
}

function playWrongSfx() {
  sfxTone({ freq: 155, endFreq: 52, type: "sawtooth", duration: 0.85, gain: 0.15 });
  sfxTone({ freq: 96, endFreq: 44, type: "triangle", duration: 0.95, gain: 0.09, delay: 0.02 });
}

function playSfx(name) {
  if (!audioManager.unlocked || !audioManager.ctx) return;
  if (gameSettings.muted || gameSettings.sfxVolume <= 0) return;

  if (audioManager.ctx.state === "suspended") {
    audioManager.ctx.resume().catch(() => {});
  }

  switch (name) {
    case "click":
      playClickSfx();
      break;
    case "clue":
      playClueSfx();
      break;
    case "empty":
      playEmptySfx();
      break;
    case "type":
      playTypeTick();
      break;
    case "lab":
      playLabSfx();
      break;
    case "promotion":
      playPromotionSfx();
      break;
    case "wrong":
      playWrongSfx();
      break;
    default:
      break;
  }
}

const SIREN_ASSET_URL = "siren.mp3";
const SIREN_FALLBACK_DURATION = 3;
let sirenBuffer = null;
let sirenBufferRequest = null;
let sirenSourceNode = null;

function loadSirenBuffer() {
  if (sirenBuffer) return Promise.resolve(sirenBuffer);
  if (!audioManager.ctx) return Promise.resolve(null);
  if (!sirenBufferRequest) {
    sirenBufferRequest = fetch(SIREN_ASSET_URL, { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error("siren asset failed to load");
        return response.arrayBuffer();
      })
      .then((buffer) => audioManager.ctx.decodeAudioData(buffer))
      .then((decoded) => {
        sirenBuffer = decoded;
        sirenBufferRequest = null;
        return decoded;
      })
      .catch((error) => {
        sirenBufferRequest = null;
        console.error("Could not load or decode the police siren:", error);
        return null;
      });
  }
  return sirenBufferRequest;
}

function stopPoliceSirenSource() {
  const source = sirenSourceNode;
  sirenSourceNode = null;
  if (source) {
    source.onended = null;
    try { source.stop(); } catch (error) { /* source already stopped */ }
  }
}

function playPoliceSiren() {
  stopPoliceSirenSource();
  if (typeof fxStopPoliceSiren === "function") fxStopPoliceSiren();
  const ctx = audioManager.ctx || (typeof ensureAudioContext === "function" ? ensureAudioContext() : null);
  const showSirenLights = (duration, startDelay) => {
    if (typeof fxPoliceSiren === "function") {
      fxPoliceSiren(duration * 1000, startDelay || 0);
    }
  };
  if (!ctx) {
    showSirenLights(SIREN_FALLBACK_DURATION, 0);
    return;
  }

  loadSirenBuffer().then((buffer) => {
    if (!buffer) {
      showSirenLights(SIREN_FALLBACK_DURATION, 0);
      return;
    }

    const duration = Number.isFinite(buffer.duration) && buffer.duration > 0
      ? buffer.duration
      : SIREN_FALLBACK_DURATION;
    if (!audioManager.unlocked || gameSettings.muted || gameSettings.sfxVolume <= 0) {
      showSirenLights(duration, 0);
      return;
    }

    const beginPlayback = () => {
      if (gameSettings.muted || gameSettings.sfxVolume <= 0) {
        showSirenLights(duration, 0);
        return;
      }

      stopPoliceSirenSource();
      const start = ctx.currentTime + 0.05;
      const fadeDuration = Math.min(0.8, duration * 0.25);
      const fadeEnd = start + duration - fadeDuration;
      const peak = effectiveSfxVolume() * 0.55;
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(peak, start + 0.1);
      gain.gain.setValueAtTime(peak, fadeEnd);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      source.connect(gain);
      gain.connect(audioManager.sfxVolumeGain);
      source.onended = () => {
        if (sirenSourceNode === source) {
          sirenSourceNode = null;
          if (typeof fxStopPoliceSiren === "function") fxStopPoliceSiren();
        }
      };
      showSirenLights(duration, (start - ctx.currentTime) * 1000);
      source.start(start);
      sirenSourceNode = source;
    };
    const begin = () => {
      if (ctx.state === "suspended") {
        ctx.resume().then(beginPlayback).catch((error) => {
          console.error("Could not resume audio for the police siren:", error);
        });
        return;
      }
      beginPlayback();
    };
    begin();
  }).catch((error) => {
    console.error("Could not start the police siren:", error);
  });
}

// Small debugging helper used to confirm the graph is producing a signal.
function getAudioOutputLevel() {
  if (!audioManager.analyser || !audioManager.analyserData) return 0;
  audioManager.analyser.getFloatTimeDomainData(audioManager.analyserData);
  let sum = 0;
  for (let i = 0; i < audioManager.analyserData.length; i += 1) {
    const sample = audioManager.analyserData[i];
    sum += sample * sample;
  }
  return Math.sqrt(sum / audioManager.analyserData.length);
}

document.addEventListener("visibilitychange", handleAudioVisibilityChange);
if (document.hidden) handleAudioVisibilityChange();
