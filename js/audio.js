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
  sfxVolumeGain: null,
  modeGain: null,
  musicFilter: null,
  analyser: null,
  analyserData: null,
  mode: "calm",
  pendingMode: "calm",
  nextChordTime: 0,
  schedulerId: null,
  switchTimer: null,
  lastTickTime: 0,
  chordsScheduled: 0
};

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

  const sfxVolumeGain = ctx.createGain();
  sfxVolumeGain.gain.value = effectiveSfxVolume();

  const modeGain = ctx.createGain();
  modeGain.gain.value = 0.0001;

  const musicFilter = ctx.createBiquadFilter();
  musicFilter.type = "lowpass";
  musicFilter.frequency.value = MUSIC_MODES.calm.filter;
  musicFilter.Q.value = 0.6;

  const analyser = ctx.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = 0.6;

  musicFilter.connect(modeGain);
  modeGain.connect(musicVolumeGain);
  musicVolumeGain.connect(master);
  sfxVolumeGain.connect(master);
  master.connect(compressor);
  compressor.connect(ctx.destination);
  master.connect(analyser);

  audioManager.ctx = ctx;
  audioManager.master = master;
  audioManager.musicVolumeGain = musicVolumeGain;
  audioManager.sfxVolumeGain = sfxVolumeGain;
  audioManager.modeGain = modeGain;
  audioManager.musicFilter = musicFilter;
  audioManager.analyser = analyser;
  audioManager.analyserData = new Float32Array(analyser.fftSize);

  return ctx;
}

function applyAudioSettings() {
  const ctx = audioManager.ctx;
  if (!ctx) return;
  const now = ctx.currentTime;
  audioManager.musicVolumeGain.gain.setTargetAtTime(effectiveMusicVolume(), now, 0.06);
  audioManager.sfxVolumeGain.gain.setTargetAtTime(effectiveSfxVolume(), now, 0.06);
}

// The browser blocks audio until a gesture, so the first interaction unlocks it.
function unlockAudio() {
  if (audioManager.unlocked) return;

  const ctx = ensureAudioContext();
  if (!ctx) return;

  audioManager.unlocked = true;
  applyAudioSettings();

  const start = () => {
    audioManager.mode = audioManager.pendingMode;
    audioManager.nextChordTime = ctx.currentTime + 0.12;
    audioManager.modeGain.gain.cancelScheduledValues(ctx.currentTime);
    audioManager.modeGain.gain.setValueAtTime(0.0001, ctx.currentTime);
    audioManager.modeGain.gain.setTargetAtTime(1, ctx.currentTime, 0.3);
    if (!audioManager.schedulerId) {
      audioManager.schedulerId = setInterval(scheduleMusic, 350);
    }
    scheduleMusic();
  };

  if (ctx.state === "suspended") {
    ctx.resume().then(start).catch(() => {});
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
  audioManager.modeGain.gain.cancelScheduledValues(now);
  audioManager.modeGain.gain.setTargetAtTime(0.0001, now, 0.16);

  if (audioManager.switchTimer) clearTimeout(audioManager.switchTimer);
  audioManager.switchTimer = setTimeout(() => {
    audioManager.switchTimer = null;
    if (!audioManager.ctx) return;
    const switchTime = audioManager.ctx.currentTime;
    audioManager.mode = mode;
    audioManager.nextChordTime = switchTime + 0.05;
    audioManager.modeGain.gain.cancelScheduledValues(switchTime);
    audioManager.modeGain.gain.setValueAtTime(0.0001, switchTime);
    audioManager.modeGain.gain.setTargetAtTime(1, switchTime, 0.35);
  }, 620);
}

// Maps the current screen (and case result) to the right music mood.
function setMusicForScreen(name) {
  let mode = "calm";

  if (name === "interrogation" || name === "accusation") {
    mode = "tense";
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
  if (!audioManager.ctx || !audioManager.unlocked) return;
  const ctx = audioManager.ctx;
  const mode = MUSIC_MODES[audioManager.mode] || MUSIC_MODES.calm;

  if (audioManager.nextChordTime < ctx.currentTime) {
    audioManager.nextChordTime = ctx.currentTime + 0.05;
  }

  const horizon = ctx.currentTime + 1.2;
  while (audioManager.nextChordTime < horizon) {
    scheduleChord(mode, audioManager.nextChordTime);
    audioManager.nextChordTime += mode.chordDuration;
  }
}

function scheduleChord(mode, when) {
  const ctx = audioManager.ctx;
  if (!ctx || !audioManager.musicFilter) return;

  const chords = mode.chords;
  const chord = chords[audioManager.chordsScheduled % chords.length];
  audioManager.chordsScheduled += 1;

  audioManager.musicFilter.frequency.setTargetAtTime(mode.filter, when, 0.5);

  const noteDuration = mode.chordDuration + mode.release;
  chord.forEach((midi, index) => {
    const peak = mode.noteGain * (index === 0 ? 1 : 0.82);
    playPadNote(midiToFrequency(midi), when, noteDuration, mode, peak, index);
  });

  if (mode.pulse) {
    playMusicPulse(when, mode.pulseGain);
  }

  if (mode.sparkle && audioManager.chordsScheduled % 2 === 0) {
    playMusicSparkle(when + 0.25);
  }
}

function playPadNote(freq, when, duration, mode, peak, index) {
  const ctx = audioManager.ctx;
  const gain = ctx.createGain();
  const end = when + duration;

  gain.gain.setValueAtTime(0.0001, when);
  gain.gain.linearRampToValueAtTime(peak, when + mode.attack);
  gain.gain.setValueAtTime(peak, end - mode.release);
  gain.gain.linearRampToValueAtTime(0.0001, end);
  gain.connect(audioManager.musicFilter);

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

function playMusicPulse(when, peak) {
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
  gain.connect(audioManager.musicFilter);
  osc.start(when);
  osc.stop(when + duration + 0.05);
}

function playMusicSparkle(when) {
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
    gain.connect(audioManager.musicFilter);
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
