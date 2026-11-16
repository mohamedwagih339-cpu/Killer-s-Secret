document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("detective_lang") || "ar";
  setLanguage(savedLang);
  if (typeof updateTabletTime === "function") {
    updateTabletTime();
    window.setInterval(updateTabletTime, 30000);
  }

  // Load the save before deciding between the setup screen and the home screen.
  loadState();

  // Keep generated cases stable in the save and validate them before exposing them to play.
  ensureGeneratedCases();

  // Validate every loaded case so unsolvable or incomplete data is visible in the console.
  if (typeof validateCase === "function" && Array.isArray(CASES)) {
    CASES.forEach((caseObj) => validateCase(caseObj));
  }

  document.querySelectorAll(".btn-lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(currentLang === "ar" ? "en" : "ar");
      if (gameState.currentScreen === "caseSelect") renderCaseSelection();
    });
  });

  const btnStart = document.getElementById("btn-start-case");
  if (btnStart) {
    btnStart.addEventListener("click", startCaseFromHome);
  }

  const btnCaseSelectHome = document.getElementById("btn-case-select-home");
  if (btnCaseSelectHome) {
    btnCaseSelectHome.addEventListener("click", () => showScreen("home"));
  }

  const btnRandomCase = document.getElementById("btn-case-random");
  if (btnRandomCase) {
    btnRandomCase.addEventListener("click", startRandomCase);
  }

  const btnContinue = document.getElementById("btn-continue");
  if (btnContinue) {
    btnContinue.addEventListener("click", resumeCase);
  }

  const btnResetCaseHome = document.getElementById("btn-reset-case-home");
  if (btnResetCaseHome) {
    btnResetCaseHome.addEventListener("click", requestCaseReset);
  }

  const btnResetCaseSettings = document.getElementById("btn-reset-case-settings");
  if (btnResetCaseSettings) {
    btnResetCaseSettings.addEventListener("click", requestCaseReset);
  }

  // Confirmation dialog buttons and backdrop.
  const confirmModal = document.getElementById("confirm-modal");
  const btnConfirmOk = document.getElementById("btn-confirm-ok");
  const btnConfirmCancel = document.getElementById("btn-confirm-cancel");
  if (btnConfirmOk) {
    btnConfirmOk.addEventListener("click", () => closeConfirmDialog(true));
  }
  if (btnConfirmCancel) {
    btnConfirmCancel.addEventListener("click", () => closeConfirmDialog(false));
  }
  if (confirmModal) {
    confirmModal.addEventListener("click", (event) => {
      if (event.target === confirmModal) closeConfirmDialog(false);
    });
  }

  const btnStartInvestigation = document.getElementById("btn-start-investigation");
  if (btnStartInvestigation) {
    btnStartInvestigation.addEventListener("click", () => {
      renderSuspects();
      showScreen("suspects");
    });
  }

  // Part 7: detective profile setup and character designer
  const btnNewProfile = document.getElementById("btn-new-profile");
  if (btnNewProfile) {
    btnNewProfile.addEventListener("click", () => openPlayerSetup(true));
  }

  const btnNameNext = document.getElementById("btn-name-next");
  if (btnNameNext) {
    btnNameNext.addEventListener("click", handleNameNext);
  }

  const btnNameBack = document.getElementById("btn-name-back");
  if (btnNameBack) {
    btnNameBack.addEventListener("click", handleSetupBack);
  }

  const btnDesignHome = document.getElementById("btn-design-home");
  if (btnDesignHome) {
    btnDesignHome.addEventListener("click", handleSetupBack);
  }

  const nameInput = document.getElementById("input-detective-name");
  if (nameInput) {
    nameInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleNameNext();
      }
    });
  }

  const btnDesignerRandom = document.getElementById("btn-designer-random");
  if (btnDesignerRandom) {
    btnDesignerRandom.addEventListener("click", randomizeDesigner);
  }

  const btnDesignerConfirm = document.getElementById("btn-designer-confirm");
  if (btnDesignerConfirm) {
    btnDesignerConfirm.addEventListener("click", confirmDesigner);
  }

  const btnDesignerBack = document.getElementById("btn-designer-back");
  if (btnDesignerBack) {
    btnDesignerBack.addEventListener("click", handleDesignerBack);
  }

  const btnPromotionContinue = document.getElementById("btn-promotion-continue");
  if (btnPromotionContinue) {
    btnPromotionContinue.addEventListener("click", continueFromPromotion);
  }

  const btnToCrimeScene = document.getElementById("btn-to-crime-scene");
  if (btnToCrimeScene) {
    btnToCrimeScene.addEventListener("click", () => {
      renderCrimeScene();
      showScreen("crimeScene");
    });
  }

  const btnCsToSuspects = document.getElementById("btn-cs-to-suspects");
  if (btnCsToSuspects) {
    btnCsToSuspects.addEventListener("click", () => {
      renderSuspects();
      showScreen("suspects");
    });
  }

  const btnBackToSuspects = document.getElementById("btn-back-to-suspects");
  if (btnBackToSuspects) {
    btnBackToSuspects.addEventListener("click", () => {
      renderSuspects();
      showScreen("suspects");
    });
  }

  const btnBackHomeIntro = document.getElementById("btn-back-home");
  if (btnBackHomeIntro) {
    btnBackHomeIntro.addEventListener("click", () => {
      showScreen("home");
    });
  }

  const btnBackIntro = document.getElementById("btn-back-intro");
  if (btnBackIntro) {
    btnBackIntro.addEventListener("click", () => {
      showScreen("intro");
    });
  }

  const btnClosePopup = document.getElementById("popup-close");
  if (btnClosePopup) {
    btnClosePopup.addEventListener("click", closeScenePopup);
  }

  // Accusation flow
  const btnAccuse = document.getElementById("btn-accuse");
  if (btnAccuse) {
    btnAccuse.addEventListener("click", openAccusation);
  }

  const btnAccusationBack = document.getElementById("btn-accusation-back");
  if (btnAccusationBack) {
    btnAccusationBack.addEventListener("click", () => {
      renderSuspects();
      showScreen("suspects");
    });
  }

  const btnAccusationPrev = document.getElementById("btn-accusation-prev");
  if (btnAccusationPrev) {
    btnAccusationPrev.addEventListener("click", handleAccusationPrev);
  }

  const btnAccusationNext = document.getElementById("btn-accusation-next");
  if (btnAccusationNext) {
    btnAccusationNext.addEventListener("click", handleAccusationNext);
  }

  const btnTabletAccuse = document.getElementById("btn-tablet-accuse");
  if (btnTabletAccuse) {
    btnTabletAccuse.addEventListener("click", () => {
      closeTablet();
      openAccusation();
    });
  }

  // Case end actions
  const btnNewCase = document.getElementById("btn-new-case");
  if (btnNewCase) {
    btnNewCase.addEventListener("click", startNewCase);
  }

  const btnReplayCase = document.getElementById("btn-replay-case");
  if (btnReplayCase) {
    btnReplayCase.addEventListener("click", replayCase);
  }

  const btnCaseEndHome = document.getElementById("btn-case-end-home");
  if (btnCaseEndHome) {
    btnCaseEndHome.addEventListener("click", () => {
      showScreen("home");
    });
  }

  const btnCompleteReplay = document.getElementById("btn-complete-replay");
  if (btnCompleteReplay) {
    btnCompleteReplay.addEventListener("click", startNewCase);
  }

  const btnCompleteRandom = document.getElementById("btn-complete-random");
  if (btnCompleteRandom) {
    btnCompleteRandom.addEventListener("click", startRandomCase);
  }

  // Tablet toggle
  const btnToggleTablet = document.getElementById("btn-toggle-tablet");
  const btnCloseTablet = document.getElementById("btn-close-tablet");
  const tablet = document.getElementById("tablet");
  if (btnToggleTablet && tablet) {
    btnToggleTablet.addEventListener("click", () => {
      const isShowing = tablet.classList.contains("show");
      if (isShowing) {
        closeTablet();
      } else {
        openTablet();
      }
    });
  }

  // Tablet close button
  if (btnCloseTablet && tablet) {
    btnCloseTablet.addEventListener("click", () => {
      closeTablet();
    });
  }

  // Close the confirmation dialog, settings panel or tablet with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const confirmModalEl = document.getElementById("confirm-modal");
    if (confirmModalEl && !confirmModalEl.classList.contains("hidden")) {
      closeConfirmDialog(false);
      return;
    }
    const panel = document.getElementById("settings-panel");
    if (panel && !panel.classList.contains("hidden")) {
      const gear = document.getElementById("btn-settings");
      panel.classList.add("hidden");
      const backdrop = document.getElementById("settings-backdrop");
      if (backdrop) backdrop.classList.add("hidden");
      document.body.classList.remove("settings-open");
      if (gear && typeof gear.focus === "function") gear.focus();
      return;
    }
    if (tablet && tablet.classList.contains("show")) {
      closeTablet();
    }
  });

  // Tablet app buttons
  document.querySelectorAll("[data-app]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const app = btn.getAttribute("data-app");
      if (app === "notes") renderTabletNotes();
      switchTabletApp(app);
    });
  });

  // Tablet back buttons
  document.querySelectorAll(".btn-back-tablet").forEach((btn) => {
    btn.addEventListener("click", () => {
      switchTabletApp("home");
    });
  });

  // Notes auto-save
  const notesInput = document.getElementById("notes-input");
  if (notesInput) {
    notesInput.addEventListener("input", saveNotes);
  }

  // Part 8: settings panel (audio + visual preferences)
  const settingsPanel = document.getElementById("settings-panel");
  const settingsBackdrop = document.getElementById("settings-backdrop");
  const btnSettings = document.getElementById("btn-settings");
  const btnSettingsClose = document.getElementById("btn-settings-close");
  const musicRange = document.getElementById("settings-music");
  const sfxRange = document.getElementById("settings-sfx");
  const muteCheck = document.getElementById("settings-mute");
  const visualsCheck = document.getElementById("settings-visuals");

  function updateSettingsLabels() {
    const settings = typeof getGameSettings === "function" ? getGameSettings() : null;
    if (!settings) return;
    const musicValue = document.getElementById("settings-music-value");
    const sfxValue = document.getElementById("settings-sfx-value");
    if (musicValue) musicValue.textContent = Math.round(settings.musicVolume * 100) + "%";
    if (sfxValue) sfxValue.textContent = Math.round(settings.sfxVolume * 100) + "%";
  }

  function syncSettingsUI() {
    const settings = typeof getGameSettings === "function" ? getGameSettings() : null;
    if (!settings) return;
    if (musicRange) musicRange.value = String(Math.round(settings.musicVolume * 100));
    if (sfxRange) sfxRange.value = String(Math.round(settings.sfxVolume * 100));
    if (muteCheck) muteCheck.checked = settings.muted;
    if (visualsCheck) visualsCheck.checked = settings.visualEffects;
    updateSettingsLabels();

    const note = document.getElementById("settings-reduced-note");
    const reduced = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (note) note.classList.toggle("hidden", !reduced);
  }

  function openSettings() {
    if (!settingsPanel) return;
    syncSettingsUI();
    if (typeof updateHomeCaseControls === "function") updateHomeCaseControls();
    settingsPanel.classList.remove("hidden");
    if (settingsBackdrop) settingsBackdrop.classList.remove("hidden");
    document.body.classList.add("settings-open");
    if (btnSettingsClose) btnSettingsClose.focus();
  }

  function closeSettings() {
    if (!settingsPanel) return;
    settingsPanel.classList.add("hidden");
    if (settingsBackdrop) settingsBackdrop.classList.add("hidden");
    document.body.classList.remove("settings-open");
    if (btnSettings && typeof btnSettings.focus === "function") btnSettings.focus();
  }

  if (btnSettings) btnSettings.addEventListener("click", openSettings);
  if (btnSettingsClose) btnSettingsClose.addEventListener("click", closeSettings);
  if (settingsBackdrop) settingsBackdrop.addEventListener("click", closeSettings);

  if (musicRange) {
    musicRange.addEventListener("input", () => {
      updateGameSettings({ musicVolume: Number(musicRange.value) / 100 });
      updateSettingsLabels();
    });
  }

  if (sfxRange) {
    sfxRange.addEventListener("input", () => {
      updateGameSettings({ sfxVolume: Number(sfxRange.value) / 100 });
      updateSettingsLabels();
    });
    sfxRange.addEventListener("change", () => {
      if (typeof playSfx === "function") playSfx("click");
    });
  }

  if (muteCheck) {
    muteCheck.addEventListener("change", () => {
      updateGameSettings({ muted: muteCheck.checked });
      if (!muteCheck.checked && typeof playSfx === "function") playSfx("click");
    });
  }

  if (visualsCheck) {
    visualsCheck.addEventListener("change", () => {
      updateGameSettings({ visualEffects: visualsCheck.checked });
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target && event.target.closest
      ? event.target.closest("button, .checkpoint")
      : null;
    if (target && typeof playSfx === "function") playSfx("click");
  }, true);

  syncSettingsUI();
  if (typeof applyAudioSettings === "function") applyAudioSettings();
  if (typeof applyEffectsSettings === "function") applyEffectsSettings();

  if (!gameState.player) {
    openPlayerSetup(false);
  } else {
    renderHomeRankCard();
    renderTabletRankCard();
    if (gameState.currentScreen === "promotion" &&
        gameState.lastProgression &&
        gameState.lastProgression.type === "promotion" &&
        areAllCasesCompleted()) {
      renderPromotion();
      showScreen("promotion");
    } else if (gameState.currentScreen === "gameComplete" && areAllCasesCompleted()) {
      renderGameComplete();
      showScreen("gameComplete");
    } else {
      showScreen("home");
    }
  }
  updateHomeCaseControls();
});

function openTablet() {
  const tablet = document.getElementById("tablet");
  const btnToggle = document.getElementById("btn-toggle-tablet");
  if (tablet) {
    tablet.classList.add("show");
  }
  if (btnToggle) btnToggle.classList.add("tablet-open");
  renderTablet();
}

function closeTablet() {
  const tablet = document.getElementById("tablet");
  const btnToggle = document.getElementById("btn-toggle-tablet");
  if (tablet) {
    tablet.classList.remove("show");
  }
  if (btnToggle) btnToggle.classList.remove("tablet-open");
}