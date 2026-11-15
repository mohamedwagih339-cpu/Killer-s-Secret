/* ===== Part 8: Visual effects manager =====
   Dust in the crime scene, cursor spotlight, clue flash, wrong-answer shake,
   vignette and reduced-motion/perf handling. Rendering stops when hidden. */

const FX_REDUCED_MOTION_QUERY = window.matchMedia
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : null;

const fxState = {
  currentScreen: "home",
  crimeSceneActive: false,
  rafId: 0,
  lastFrameTime: 0,
  particles: [],
  canvas: null,
  canvasCtx: null,
  width: 0,
  height: 0,
  dpr: 1,
  shakeTimer: null,
  flashTimer: null
};

function fxVisualsEnabled() {
  const settings = typeof getGameSettings === "function" ? getGameSettings() : null;
  return !settings || settings.visualEffects !== false;
}

function fxReducedMotion() {
  return !!(FX_REDUCED_MOTION_QUERY && FX_REDUCED_MOTION_QUERY.matches);
}

function fxMotionAllowed() {
  return fxVisualsEnabled() && !fxReducedMotion();
}

// Applies the visual preference to the document and (re)starts or stops the
// expensive canvas loop without losing the current screen.
function applyEffectsSettings() {
  document.body.classList.toggle("fx-disabled", !fxVisualsEnabled());
  document.body.classList.toggle("fx-reduced", fxReducedMotion());

  if (!fxMotionAllowed()) {
    fxPauseCrimeScene();
  } else if (fxState.currentScreen === "crimeScene" && !document.hidden) {
    fxStartCrimeScene();
  }
}

function fxHandleScreen(name) {
  fxState.currentScreen = name;
  document.body.classList.toggle("in-crime-scene", name === "crimeScene");
  if (name === "crimeScene") {
    fxStartCrimeScene();
  } else {
    fxStopCrimeScene();
  }
}

function fxResizeCanvas() {
  const canvas = fxState.canvas;
  if (!canvas || !canvas.parentElement) return;

  const rect = canvas.parentElement.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));
  const dpr = Math.min(2, window.devicePixelRatio || 1);

  const changed = width !== fxState.width || height !== fxState.height || dpr !== fxState.dpr;
  fxState.width = width;
  fxState.height = height;
  fxState.dpr = dpr;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  fxState.canvasCtx = canvas.getContext("2d");
  if (fxState.canvasCtx) {
    fxState.canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  if (changed || fxState.particles.length === 0) {
    fxSeedParticles();
  }
}

function fxSeedParticles() {
  const width = fxState.width;
  const height = fxState.height;
  const count = width < 600 ? 26 : Math.min(60, Math.round(width / 14));
  const particles = [];

  for (let i = 0; i < count; i += 1) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.5 + Math.random() * 1.5,
      speed: 0.1 + Math.random() * 0.26,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: 0.2 + Math.random() * 0.6,
      alpha: 0.1 + Math.random() * 0.3
    });
  }

  fxState.particles = particles;
}

function fxStartCrimeScene() {
  if (!fxMotionAllowed()) return;

  const canvas = document.getElementById("scene-dust");
  if (!canvas) return;

  fxState.canvas = canvas;
  fxState.crimeSceneActive = true;
  fxResizeCanvas();
  canvas.classList.add("active");

  if (!fxState.rafId && !document.hidden) {
    fxState.lastFrameTime = 0;
    fxState.rafId = requestAnimationFrame(fxAnimateDust);
  }
}

function fxPauseCrimeScene() {
  if (fxState.rafId) {
    cancelAnimationFrame(fxState.rafId);
    fxState.rafId = 0;
  }
}

function fxStopCrimeScene() {
  fxState.crimeSceneActive = false;
  fxPauseCrimeScene();

  if (fxState.canvas) {
    const ctx = fxState.canvasCtx;
    if (ctx) ctx.clearRect(0, 0, fxState.width, fxState.height);
    fxState.canvas.classList.remove("active");
  }

  const spotlight = document.getElementById("scene-spotlight");
  if (spotlight) spotlight.classList.remove("active");
}

function fxAnimateDust(time) {
  fxState.rafId = 0;

  if (!fxState.crimeSceneActive || document.hidden || !fxMotionAllowed()) return;

  const ctx = fxState.canvasCtx;
  if (!ctx) return;

  const elapsed = fxState.lastFrameTime ? Math.min(40, time - fxState.lastFrameTime) : 16.67;
  fxState.lastFrameTime = time;
  const step = elapsed / 16.67;

  ctx.clearRect(0, 0, fxState.width, fxState.height);

  fxState.particles.forEach((particle) => {
    particle.drift += 0.002 * elapsed;
    particle.y -= particle.speed * step;
    particle.x += Math.sin(particle.drift) * particle.driftSpeed * step;

    if (particle.y < -4) {
      particle.y = fxState.height + 4;
      particle.x = Math.random() * fxState.width;
    }
    if (particle.x < -4) particle.x = fxState.width + 4;
    if (particle.x > fxState.width + 4) particle.x = -4;

    ctx.beginPath();
    ctx.fillStyle = "rgba(240, 220, 170, " + particle.alpha.toFixed(3) + ")";
    ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  fxState.rafId = requestAnimationFrame(fxAnimateDust);
}

// A soft light that follows a mouse/pen pointer across the crime scene.
function fxBindSpotlight() {
  const container = document.getElementById("scene-container");
  const spotlight = document.getElementById("scene-spotlight");
  if (!container || !spotlight || container.dataset.fxSpotBound === "true") return;

  container.dataset.fxSpotBound = "true";

  const moveSpotlight = (event) => {
    if (!fxMotionAllowed() || event.pointerType === "touch") return;
    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    spotlight.style.setProperty("--spot-x", Math.max(0, Math.min(100, x)).toFixed(2) + "%");
    spotlight.style.setProperty("--spot-y", Math.max(0, Math.min(100, y)).toFixed(2) + "%");
    spotlight.classList.add("active");
  };

  container.addEventListener("pointermove", moveSpotlight, { passive: true });
  container.addEventListener("pointerenter", moveSpotlight, { passive: true });
  container.addEventListener("pointerleave", () => spotlight.classList.remove("active"));
}

function fxFlashClue() {
  if (!fxMotionAllowed()) return;
  const flash = document.getElementById("fx-flash");
  if (!flash) return;

  flash.classList.remove("active");
  void flash.offsetWidth;
  flash.classList.add("active");

  if (fxState.flashTimer) clearTimeout(fxState.flashTimer);
  fxState.flashTimer = setTimeout(() => {
    flash.classList.remove("active");
    fxState.flashTimer = null;
  }, 950);
}

function fxShakeScreen() {
  if (!fxMotionAllowed()) return;
  const target = document.querySelector(".game-container");
  if (!target) return;

  target.classList.remove("fx-shake");
  void target.offsetWidth;
  target.classList.add("fx-shake");

  if (fxState.shakeTimer) clearTimeout(fxState.shakeTimer);
  fxState.shakeTimer = setTimeout(() => {
    target.classList.remove("fx-shake");
    fxState.shakeTimer = null;
  }, 520);
}

function fxMarkCluePopup(hasClue) {
  const popup = document.getElementById("scene-popup");
  if (!popup) return;
  popup.classList.toggle("has-clue", !!hasClue);
}

/* Keep the canvas loop cheap and correct across resizes, tab switches and
   system reduced-motion changes. */
window.addEventListener("resize", () => {
  if (fxState.crimeSceneActive) fxResizeCanvas();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    fxPauseCrimeScene();
  } else if (fxState.crimeSceneActive) {
    fxState.lastFrameTime = 0;
    if (!fxState.rafId) fxState.rafId = requestAnimationFrame(fxAnimateDust);
  }
});

if (FX_REDUCED_MOTION_QUERY) {
  const onMotionPreferenceChange = () => applyEffectsSettings();
  if (typeof FX_REDUCED_MOTION_QUERY.addEventListener === "function") {
    FX_REDUCED_MOTION_QUERY.addEventListener("change", onMotionPreferenceChange);
  } else if (typeof FX_REDUCED_MOTION_QUERY.addListener === "function") {
    FX_REDUCED_MOTION_QUERY.addListener(onMotionPreferenceChange);
  }
}
