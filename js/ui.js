let crimeSceneSirenCaseId = null;

function updateTabletTime() {
  const clock = document.getElementById("tablet-time");
  if (!clock) return;
  const locale = currentLang === "ar" ? "ar" : "en";
  clock.textContent = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function showScreen(name) {
  const caseId = gameState.currentCase && gameState.currentCase.id;
  const playSceneSiren = name === "crimeScene" && caseId &&
    crimeSceneSirenCaseId !== caseId && gameState.lastCaseScreen !== "crimeScene";
  if (name === "crimeScene" && caseId) crimeSceneSirenCaseId = caseId;

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
    screen.classList.add("hidden");
  });

  const target = document.getElementById(`screen-${name}`);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
  }

  gameState.currentScreen = name;
  // Remember the exact case screen so "Continue" can restore it later.
  if (gameState.currentCase && !gameState.caseCompleted &&
      ["intro", "suspects", "interrogation", "crimeScene", "accusation"].includes(name)) {
    gameState.lastCaseScreen = name;
  }
  const setupScreens = ["playerName", "characterDesign", "promotion"];
  const isSetupScreen = setupScreens.includes(name);
  document.body.classList.toggle("setup-active", isSetupScreen);
  if (isSetupScreen && typeof closeTablet === "function") closeTablet();
  if (name === "home") {
    if (typeof renderHomeRankCard === "function") renderHomeRankCard();
    if (typeof updateHomeCaseControls === "function") updateHomeCaseControls();
  }
  if (typeof setMusicForScreen === "function") setMusicForScreen(name);
  if (typeof fxHandleScreen === "function") fxHandleScreen(name);
  if ((playSceneSiren || name === "interrogation") && typeof playPoliceSiren === "function") {
    playPoliceSiren();
  }
  saveState();
}

function renderIntro() {
  const c = gameState.currentCase;
  if (!c) return;

  document.getElementById("intro-case-title").textContent = c.title[currentLang];
  document.getElementById("intro-text").textContent = c.intro[currentLang];

  document.getElementById("intro-victim-name").textContent = c.victim.name[currentLang];
  document.getElementById("intro-victim-desc").textContent = c.victim.description[currentLang];
  document.getElementById("intro-victim-place").textContent = c.victim.placeOfDeath[currentLang];
  document.getElementById("intro-victim-time").textContent = c.victim.timeOfDeath[currentLang];

  document.getElementById("intro-location-name").textContent = c.location.name[currentLang];
  document.getElementById("intro-location-desc").textContent = c.location.description[currentLang];
}

let currentApproach = "calm";
let typewriterTimer = null;
let currentFullText = "";
let isTyping = false;

function playTypewriter(text, onComplete) {
  const dialogueText = document.getElementById("dialogue-text");
  const skipHint = document.getElementById("dialogue-skip-hint");
  if (!dialogueText) return;

  if (typewriterTimer) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }

  currentFullText = text;
  isTyping = true;
  dialogueText.textContent = "";
  if (skipHint) skipHint.classList.add("visible");

  let i = 0;
  const speed = 25;

  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      dialogueText.textContent += text.charAt(i);
      if (typeof playTypeTick === "function" && i % 3 === 0) playTypeTick();
      i++;
    } else {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
      isTyping = false;
      if (skipHint) skipHint.classList.remove("visible");
      if (onComplete) onComplete();
    }
  }, speed);
}

function skipTypewriter() {
  if (!isTyping) return;
  if (typewriterTimer) {
    clearInterval(typewriterTimer);
    typewriterTimer = null;
  }
  const dialogueText = document.getElementById("dialogue-text");
  const skipHint = document.getElementById("dialogue-skip-hint");
  if (dialogueText) dialogueText.textContent = currentFullText;
  if (skipHint) skipHint.classList.remove("visible");
  isTyping = false;
}

function getSuspectAvatarSvg(suspectId) {
  let theme = { bg: "#2a1e22", body: "#c85a48", head: "#f2c4a2", hair: "#5c2a1e", accent: "#ffffff", detail: "chef" };
  if (suspectId === "suspect_01") {
    theme = { bg: "#2a1e22", body: "#c85a48", head: "#f2c4a2", hair: "#5c2a1e", accent: "#ffffff", detail: "chef" };
  } else if (suspectId === "suspect_02") {
    theme = { bg: "#1a222d", body: "#2d3748", head: "#e2b18b", hair: "#1a202c", accent: "#d4a017", detail: "waiter" };
  } else if (suspectId === "suspect_03") {
    theme = { bg: "#241c2e", body: "#4a3b69", head: "#ebd0be", hair: "#2a1b18", accent: "#d4a017", detail: "manager" };
  } else if (suspectId === "suspect_04") {
    theme = { bg: "#1b2426", body: "#34495e", head: "#dfb498", hair: "#718096", accent: "#a0aec0", detail: "guard" };
  } else if (suspectId === "suspect_m1") {
    theme = { bg: "#20242e", body: "#2f3a4d", head: "#e8c39c", hair: "#4a4f57", accent: "#d4a017", detail: "curator" };
  } else if (suspectId === "suspect_m2") {
    theme = { bg: "#22282b", body: "#4a6b5a", head: "#f0c9a6", hair: "#3a2a20", accent: "#c9d2da", detail: "restorer" };
  } else if (suspectId === "suspect_m3") {
    theme = { bg: "#1b2426", body: "#2f4152", head: "#e2b18b", hair: "#1a202c", accent: "#a0aec0", detail: "guard2" };
  } else if (suspectId === "suspect_m4") {
    theme = { bg: "#26202a", body: "#4a3550", head: "#e6c3a0", hair: "#2a1b18", accent: "#d4a017", detail: "collector" };
  } else if (suspectId === "suspect_h1") {
    theme = { bg: "#241c2e", body: "#3a2f4a", head: "#e8c39c", hair: "#4a4f57", accent: "#d4a017", detail: "hotelmanager" };
  } else if (suspectId === "suspect_h2") {
    theme = { bg: "#1f2a26", body: "#2f5a4a", head: "#f0c9a6", hair: "#3a2a20", accent: "#e7dfc8", detail: "maid" };
  } else if (suspectId === "suspect_h3") {
    theme = { bg: "#20242e", body: "#33405a", head: "#e2b18b", hair: "#1a202c", accent: "#c9d2da", detail: "guest" };
  } else if (suspectId === "suspect_h4") {
    theme = { bg: "#1b2426", body: "#2f4152", head: "#e2b18b", hair: "#1a202c", accent: "#7ec2e0", detail: "receptionist" };
  } else if (suspectId === "suspect_h5") {
    theme = { bg: "#2a1e22", body: "#4a3540", head: "#dfb498", hair: "#2a1b18", accent: "#d4a017", detail: "partner" };
  }

  let accessorySvg = "";
  if (theme.detail === "chef") {
    accessorySvg = `
      <path d="M38 34 C35 18, 65 18, 62 34 Z" fill="#ffffff" />
      <path d="M42 24 C42 14, 58 14, 58 24 Z" fill="#ffffff" />
      <rect x="37" y="32" width="26" height="5" rx="2" fill="#e2e8f0" />
    `;
  } else if (theme.detail === "waiter") {
    accessorySvg = `
      <polygon points="45,66 50,69 45,72" fill="${theme.accent}" />
      <polygon points="55,66 50,69 55,72" fill="${theme.accent}" />
      <circle cx="50" cy="69" r="2" fill="#ffffff" />
    `;
  } else if (theme.detail === "manager") {
    accessorySvg = `
      <path d="M44 65 Q50 72 56 65" stroke="${theme.accent}" stroke-width="2" fill="none" />
      <polygon points="50,71 48,74 52,74" fill="${theme.accent}" />
    `;
  } else if (theme.detail === "guard") {
    accessorySvg = `
      <path d="M36 34 Q50 24 64 34 L66 38 Q50 34 34 38 Z" fill="#1e293b" />
      <rect x="47" y="28" width="6" height="5" rx="1" fill="${theme.accent}" />
    `;
  } else if (theme.detail === "curator") {
    // Curator: spectacles and a neat bow tie.
    accessorySvg = `
      <circle cx="43" cy="48" r="6" fill="none" stroke="${theme.accent}" stroke-width="1.6" />
      <circle cx="57" cy="48" r="6" fill="none" stroke="${theme.accent}" stroke-width="1.6" />
      <path d="M49 48h2M37 47l-5-2M63 47l5-2" stroke="${theme.accent}" stroke-width="1.6" />
      <polygon points="46,67 50,70 54,67 50,74" fill="${theme.accent}" />
    `;
  } else if (theme.detail === "restorer") {
    // Restorer: tied-back hair, a headband and a brush tucked behind the ear.
    accessorySvg = `
      <path d="M32 42 Q50 30 68 42" stroke="${theme.accent}" stroke-width="2.4" fill="none" />
      <circle cx="66" cy="40" r="3" fill="${theme.accent}" />
      <path d="M67 44l8 12" stroke="#8a6a44" stroke-width="2.6" stroke-linecap="round" />
      <path d="M74 55l3 4" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round" />
    `;
  } else if (theme.detail === "guard2") {
    // Second guard: peaked cap with a badge.
    accessorySvg = `
      <path d="M34 36 Q50 26 66 36 L68 40 Q50 36 32 40 Z" fill="#243447" />
      <path d="M38 36 Q50 30 62 36" stroke="#0f172a" stroke-width="2" fill="none" />
      <rect x="47" y="29" width="6" height="5" rx="1" fill="${theme.accent}" />
      <circle cx="50" cy="38" r="2" fill="${theme.accent}" />
    `;
  } else if (theme.detail === "collector") {
    // Collector: silk scarf and a gold signet ring on the raised hand.
    accessorySvg = `
      <path d="M38 64 Q50 74 62 64 L66 70 Q50 80 34 70 Z" fill="${theme.accent}" />
      <path d="M38 64 Q50 74 62 64" stroke="#7a5a12" stroke-width="1.4" fill="none" />
      <circle cx="70" cy="76" r="3.4" fill="#f0d47a" stroke="#8a6420" stroke-width="1.2" />
    `;
  } else if (theme.detail === "hotelmanager") {
    // Hotel manager: suit lapels, necktie and a pinned name tag.
    accessorySvg = `
      <path d="M38 66l12 10-6 12-10-16z" fill="#1f2430" opacity=".6" />
      <path d="M62 66l-12 10 6 12 10-16z" fill="#1f2430" opacity=".6" />
      <path d="M50 64l-4 6 4 16 4-16z" fill="${theme.accent}" />
      <rect x="60" y="74" width="13" height="8" rx="2" fill="#e7dfc8" stroke="#8a6420" stroke-width="1" />
    `;
  } else if (theme.detail === "maid") {
    // Maid: wrapped headscarf with a side knot.
    accessorySvg = `
      <path d="M31 45 Q50 28 69 45" stroke="${theme.accent}" stroke-width="6" fill="none" />
      <circle cx="69" cy="46" r="4" fill="${theme.accent}" />
      <path d="M69 50l3 7" stroke="${theme.accent}" stroke-width="3" stroke-linecap="round" />
      <path d="M40 70h20" stroke="${theme.accent}" stroke-width="3" stroke-linecap="round" opacity=".7" />
    `;
  } else if (theme.detail === "guest") {
    // Guest: designer sunglasses and a coat collar.
    accessorySvg = `
      <rect x="38" y="44" width="11" height="8" rx="3" fill="#141a22" />
      <rect x="51" y="44" width="11" height="8" rx="3" fill="#141a22" />
      <path d="M49 47h2M37 45l-6-2M63 45l6-2" stroke="#141a22" stroke-width="1.8" />
      <path d="M36 66l14 8-4 12-14-14z" fill="#1f2430" opacity=".5" />
      <path d="M64 66l-14 8 4 12 14-14z" fill="#1f2430" opacity=".5" />
    `;
  } else if (theme.detail === "receptionist") {
    // Receptionist: neat necktie and a chest name badge.
    accessorySvg = `
      <path d="M44 64l6 4 6-4" stroke="#1f2430" stroke-width="2" fill="none" />
      <path d="M50 68l-4 6 4 14 4-14z" fill="${theme.accent}" />
      <rect x="58" y="73" width="15" height="9" rx="2" fill="#e7dfc8" stroke="#2f4152" stroke-width="1.2" />
      <path d="M61 77h9m-9 2h6" stroke="#5a6675" stroke-width="1.1" />
    `;
  } else if (theme.detail === "partner") {
    // Business partner: moustache, necktie and a pocket square.
    accessorySvg = `
      <path d="M43 55q7-4 14 0-7 4-14 0z" fill="${theme.hair}" />
      <path d="M50 66l-4 6 4 15 4-15z" fill="${theme.accent}" />
      <path d="M38 66l12 8" stroke="#1f2430" stroke-width="2" opacity=".6" />
      <path d="M62 66l-12 8" stroke="#1f2430" stroke-width="2" opacity=".6" />
      <path d="M62 74h10l-2 5h-8z" fill="${theme.accent}" opacity=".8" />
    `;
  }

  return `
    <svg viewBox="0 0 100 100" class="suspect-svg-avatar" aria-hidden="true">
      <circle cx="50" cy="50" r="48" fill="${theme.bg}" stroke="#3d414f" stroke-width="2"/>
      <path d="M26 88 C26 70, 74 70, 74 88 Z" fill="${theme.body}"/>
      <circle cx="50" cy="48" r="18" fill="${theme.head}"/>
      <path d="M32 46 C32 30, 68 30, 68 46 C68 38, 62 32, 50 32 C38 32, 32 38, 32 46 Z" fill="${theme.hair}"/>
      <circle cx="44" cy="48" r="2.5" fill="#2d3748"/>
      <circle cx="56" cy="48" r="2.5" fill="#2d3748"/>
      <path d="M46 56 Q50 59 54 56" stroke="#8c5847" stroke-width="1.8" stroke-linecap="round" fill="none"/>
      ${accessorySvg}
    </svg>
  `;
}

function renderSuspects() {
  const container = document.getElementById("suspects-grid");
  if (!container) return;
  container.innerHTML = "";

  const suspects = gameState.currentCase ? gameState.currentCase.suspects : [];
  suspects.forEach((s) => {
    const card = document.createElement("div");
    card.className = "suspect-card";

    const personalityLabel = typeof s.personality === "string" ? t("personality_" + s.personality) : (s.personality ? s.personality[currentLang] : "");
    const askedCount = gameState.statements ? gameState.statements.filter((st) => st.suspectId === s.id).length : 0;
    const totalCount = s.questions ? s.questions.length : 6;
    const interrogated = gameState.interrogatedSuspects.includes(s.id);

    card.innerHTML = `
      <h3>${s.name[currentLang]}</h3>
      <p><span data-i18n="age"></span>: ${s.age}</p>
      <p><span data-i18n="job"></span>: ${s.job[currentLang]}</p>
      <p><span data-i18n="relation"></span>: ${s.relation[currentLang]}</p>
      <p class="suspect-meta">${personalityLabel}</p>
      <p class="suspect-progress"><span data-i18n="questionsAsked"></span>: <strong>${askedCount}/${totalCount}</strong></p>
      <button class="btn btn-primary btn-interrogate" data-id="${s.id}" data-i18n="interrogate">
        ${t("interrogate")} ${interrogated ? "✓" : ""}
      </button>
    `;

    container.appendChild(card);
  });

  updateAllTexts();

  container.querySelectorAll(".btn-interrogate").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      if (!gameState.interrogatedSuspects.includes(id)) {
        gameState.interrogatedSuspects.push(id);
      }
      gameState.activeSuspectId = id;
      saveState();
      renderInterrogation(id);
      showScreen("interrogation");
    });
  });
}

function renderInterrogation(suspectId) {
  const c = gameState.currentCase;
  if (!c || !c.suspects) return;
  const s = c.suspects.find((item) => item.id === suspectId);
  if (!s) return;

  gameState.activeSuspectId = suspectId;

  const avatarContainer = document.getElementById("interrogation-avatar");
  if (avatarContainer) avatarContainer.innerHTML = getSuspectAvatarSvg(s.id);

  const nameEl = document.getElementById("interrogation-name");
  if (nameEl) nameEl.textContent = s.name[currentLang];

  const jobEl = document.getElementById("interrogation-job");
  if (jobEl) jobEl.textContent = s.job[currentLang] + " (" + s.age + " " + t("age") + ")";

  const badgeEl = document.getElementById("interrogation-personality");
  if (badgeEl) {
    badgeEl.textContent = t("personality_" + s.personality);
    badgeEl.setAttribute("data-personality", s.personality);
  }

  // Contradiction badge
  const contradictionEl = document.getElementById("interrogation-contradiction");
  const hasContradiction = (gameState.contradictions[s.id] && gameState.contradictions[s.id].length > 0);
  if (contradictionEl) {
    if (hasContradiction) {
      contradictionEl.classList.remove("hidden");
    } else {
      contradictionEl.classList.add("hidden");
    }
  }

  // Suspect meters (Cooperation & Stress)
  const stats = getSuspectStats(s.id);
  const coopValEl = document.getElementById("meter-cooperation-val");
  const coopFillEl = document.getElementById("meter-cooperation-fill");
  const stressValEl = document.getElementById("meter-stress-val");
  const stressFillEl = document.getElementById("meter-stress-fill");

  if (coopValEl) coopValEl.textContent = stats.cooperation + "%";
  if (coopFillEl) {
    coopFillEl.style.width = stats.cooperation + "%";
    coopFillEl.className = "meter-fill fill-cooperation " + (stats.cooperation <= 25 ? "low" : stats.cooperation >= 65 ? "high" : "mid");
  }

  if (stressValEl) stressValEl.textContent = stats.stress + "%";
  if (stressFillEl) {
    stressFillEl.style.width = stats.stress + "%";
    stressFillEl.className = "meter-fill fill-stress " + (stats.stress >= 70 ? "high" : stats.stress >= 40 ? "mid" : "low");
  }

  const isRefusing = stats.cooperation <= RULES.thresholds.refuseThreshold;

  const speakerEl = document.getElementById("dialogue-speaker");
  if (speakerEl) speakerEl.textContent = s.name[currentLang];

  const suspectStatements = gameState.statements ? gameState.statements.filter((st) => st.suspectId === s.id) : [];
  const dialogueText = document.getElementById("dialogue-text");
  if (dialogueText && !isTyping) {
    if (isRefusing) {
      dialogueText.textContent = t("refuseToSpeak");
    } else if (suspectStatements.length > 0) {
      const last = suspectStatements[suspectStatements.length - 1];
      const textVal = typeof last.text === "object" ? last.text[currentLang] : last.text;
      dialogueText.textContent = textVal;
    } else {
      dialogueText.textContent = t("dialoguePlaceholder");
    }
  }

  renderInterrogationSkillHints(s, stats, suspectStatements);

  const dialogueBox = document.getElementById("dialogue-box");
  if (dialogueBox && !dialogueBox.dataset.bound) {
    dialogueBox.dataset.bound = "true";
    dialogueBox.addEventListener("click", skipTypewriter);
    dialogueBox.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        skipTypewriter();
      }
    });
  }

  const approachBtns = document.querySelectorAll(".btn-approach");
  approachBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-approach") === currentApproach);
    if (!btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", () => {
        currentApproach = btn.getAttribute("data-approach");
        approachBtns.forEach((b) => b.classList.toggle("active", b === btn));
      });
    }
  });

  // Present Evidence modal buttons
  const btnOpenPresent = document.getElementById("btn-open-present-modal");
  if (btnOpenPresent && !btnOpenPresent.dataset.bound) {
    btnOpenPresent.dataset.bound = "true";
    btnOpenPresent.addEventListener("click", () => {
      renderPresentModal(gameState.activeSuspectId);
    });
  }

  const btnClosePresent = document.getElementById("btn-close-present-modal");
  if (btnClosePresent && !btnClosePresent.dataset.bound) {
    btnClosePresent.dataset.bound = "true";
    btnClosePresent.addEventListener("click", () => {
      const modal = document.getElementById("modal-present-evidence");
      if (modal) modal.classList.add("hidden");
    });
  }

  const qList = document.getElementById("questions-list");
  if (!qList) return;
  qList.innerHTML = "";

  const allQuestions = [...(s.questions || []), ...(gameState.unlockedQuestions[s.id] || [])];
  allQuestions.forEach((q) => {
    const existing = gameState.statements ? gameState.statements.find((st) => st.suspectId === s.id && st.questionId === q.id) : null;
    const isAsked = !!existing;

    const btn = document.createElement("button");
    btn.className = `question-btn ${isAsked ? "asked" : ""} ${isRefusing && !isAsked ? "refused" : ""}`;
    btn.setAttribute("data-qid", q.id);

    const categoryText = t("category_" + q.category) || q.category;
    const checkIcon = isAsked ? `<span class="q-check">✓</span>` : "";

    btn.innerHTML = `
      <div class="question-header">
        <span class="question-category">${categoryText}</span>
        ${checkIcon}
      </div>
      <p class="question-text">${q.text[currentLang]}</p>
      ${isAsked ? `<span class="question-re-ask">${t("replayAnswer")}</span>` : ""}
    `;

    btn.addEventListener("click", () => {
      if (isAsked) {
        const answerText = typeof existing.text === "object" ? existing.text[currentLang] : existing.text;
        playTypewriter(answerText);
      } else if (isRefusing) {
        playTypewriter(t("refuseToSpeak"));
      } else {
        const responseObj = q.responses[currentApproach] || q.responses.calm;
        const revealedSecret = q.secretReveal && q.secretReveal.approach === currentApproach
          ? q.secretReveal.text
          : null;
        const statementText = revealedSecret
          ? {
            ar: `${responseObj.ar} — ${revealedSecret.ar}`,
            en: `${responseObj.en} — ${revealedSecret.en}`
          }
          : responseObj;
        const answerText = statementText[currentLang];

        const rule = getApproachRule(s.personality, currentApproach);
        const empathyBonus = currentApproach === "sympathetic" ? getSkillLevel("empathy") * 5 : 0;
        const pressureMultiplier = currentApproach === "pressing" && gameState.currentCase &&
          Number.isFinite(gameState.currentCase.pressingCooperationMultiplier)
          ? Math.max(1, gameState.currentCase.pressingCooperationMultiplier)
          : 1;
        const cooperationChange = rule.cooperation < 0
          ? Math.round(rule.cooperation * pressureMultiplier)
          : rule.cooperation;
        updateSuspectStats(s.id, cooperationChange + empathyBonus, rule.stress);
        updateInvestigationScore(rule.points);

        gameState.decisions.push({
          suspectId: s.id,
          type: "question",
          approach: currentApproach,
          result: rule.result,
          points: rule.points
        });
        if (rule.result === "good") {
          awardPlayerXp(10, `decision:${c.id}:question:${s.id}:${q.id}`);
        }
        if (empathyBonus > 0) announceSkillHint("empathy", "skillHintEmpathy", q.id);

        if (rule.result === "bad") {
          if (typeof playSfx === "function") playSfx("empty");
          if (typeof fxShakeScreen === "function") fxShakeScreen();
        }

        gameState.statements.push({
          suspectId: s.id,
          questionId: q.id,
          approach: currentApproach,
          text: statementText
        });

        // Asking a new question costs one investigation action (also advances the lab).
        recordAction();

        // Hidden checkpoint unlocks
        if (s.id === "suspect_02" && q.id === "q_s2_secret" && currentApproach === "pressing") {
          if (!gameState.unlockedPoints.includes("point_vent")) {
            gameState.unlockedPoints.push("point_vent");
            showToast(t("newCheckpointRevealed"));
          }
        } else if (s.id === "suspect_01" && q.id === "q_s1_secret" && currentApproach === "sympathetic") {
          if (!gameState.unlockedPoints.includes("point_locker")) {
            gameState.unlockedPoints.push("point_locker");
            showToast(t("newCheckpointRevealed"));
          }
        }

        saveState();

        playTypewriter(answerText, () => {
          renderInterrogation(s.id);
        });

        renderInterrogation(s.id);
      }
    });

    qList.appendChild(btn);
  });
}

function renderPresentModal(suspectId) {
  const modal = document.getElementById("modal-present-evidence");
  const container = document.getElementById("present-clues-list");
  if (!container || !modal) return;
  container.innerHTML = "";

  const presented = gameState.presentedClues[suspectId] || [];
  if (!gameState.clues || gameState.clues.length === 0) {
    container.innerHTML = `<p class="modal-empty-msg">${t("noCluesToPresent")}</p>`;
    modal.classList.remove("hidden");
    return;
  }

  gameState.clues.forEach((clue) => {
    const isPresented = presented.includes(clue.id);
    const card = document.createElement("div");
    card.className = `present-clue-card ${isPresented ? "already-presented" : ""}`;
    card.innerHTML = `
      <div class="present-card-header">
        <h4>${clue.name[currentLang]}</h4>
        ${isPresented ? `<span class="tag-presented">${t("alreadyPresented")}</span>` : `<button class="btn btn-primary btn-sm btn-select-clue">${t("presentEvidence")}</button>`}
      </div>
      <p class="present-card-desc">${clue.desc[currentLang]}</p>
    `;

    if (!isPresented) {
      card.querySelector(".btn-select-clue").addEventListener("click", () => {
        modal.classList.add("hidden");
        presentClueToSuspect(suspectId, clue.id);
      });
    }

    container.appendChild(card);
  });

  modal.classList.remove("hidden");
}

function presentClueToSuspect(suspectId, clueId) {
  const c = gameState.currentCase;
  if (!c) return;
  const s = c.suspects.find((item) => item.id === suspectId);
  const clue = c.clues.find((item) => item.id === clueId) ||
    (gameState.clues || []).find((item) => item.id === clueId);
  if (!s || !clue) return;

  if (!gameState.presentedClues[suspectId]) gameState.presentedClues[suspectId] = [];
  if (!gameState.presentedClues[suspectId].includes(clueId)) {
    gameState.presentedClues[suspectId].push(clueId);
  }

  const isRelevant = clue.suspectIds.includes(suspectId) && (clue.importance === "crucial" || clue.importance === "important");
  const reactionData = s.presentReactions && s.presentReactions[clueId];

  if (isRelevant && reactionData) {
    const effect = clue.importance === "crucial" ? RULES.evidence.relevantCrucial : RULES.evidence.relevantImportant;
    updateSuspectStats(suspectId, effect.cooperation, effect.stress);
    updateInvestigationScore(effect.points);

    gameState.decisions.push({
      suspectId: suspectId,
      type: "present",
      approach: "evidence",
      result: "good",
      points: effect.points,
      clueId: clueId
    });

    if (!gameState.contradictions[suspectId]) gameState.contradictions[suspectId] = [];
    if (!gameState.contradictions[suspectId].includes(clueId)) {
      gameState.contradictions[suspectId].push(clueId);
    }

    gameState.statements.push({
      suspectId: suspectId,
      questionId: "present_" + clueId,
      approach: "evidence",
      isContradiction: true,
      clueId: clueId,
      text: reactionData.text
    });

    if (reactionData.unlockQuestion) {
      if (!gameState.unlockedQuestions[suspectId]) gameState.unlockedQuestions[suspectId] = [];
      const alreadyUnlocked = gameState.unlockedQuestions[suspectId].some((q) => q.id === reactionData.unlockQuestion.id);
      if (!alreadyUnlocked) {
        gameState.unlockedQuestions[suspectId].push(reactionData.unlockQuestion);
        showToast(t("newQuestionUnlocked"));
      }
    }

    awardPlayerXp(10, `decision:${c.id}:present:${suspectId}:${clueId}`);
    showToast(t("contradictionDetected"));
    if (typeof playSfx === "function") playSfx("clue");

    saveState();
    playTypewriter(reactionData.text[currentLang], () => {
      renderInterrogation(suspectId);
    });
    renderInterrogation(suspectId);
  } else {
    const effect = RULES.evidence.irrelevantOrMisleading;
    updateSuspectStats(suspectId, effect.cooperation, effect.stress);
    updateInvestigationScore(effect.points);

    gameState.decisions.push({
      suspectId: suspectId,
      type: "present",
      approach: "evidence",
      result: "bad",
      points: effect.points,
      clueId: clueId
    });

    const tauntMsg = t("taunt_" + s.personality);
    showToast(t("wrongEvidencePresented"));
    if (typeof playSfx === "function") playSfx("empty");
    if (typeof fxShakeScreen === "function") fxShakeScreen();

    saveState();
    playTypewriter(tauntMsg, () => {
      renderInterrogation(suspectId);
    });
    renderInterrogation(suspectId);
  }
}

function renderCrimeScene() {
  const c = gameState.currentCase;
  if (!c || !c.scene) return;

  // Each case can declare its own scene artwork; the office scene is the default.
  const sceneId = c.sceneId || "office";
  document.querySelectorAll("#scene-container .scene-svg").forEach((svg) => {
    svg.style.display = svg.getAttribute("data-scene") === sceneId ? "" : "none";
  });

  document.getElementById("cs-case-title").textContent = c.title[currentLang];
  const container = document.getElementById("checkpoints");
  container.innerHTML = "";

  c.scene.forEach((point) => {
    if (point.hiddenUntil) {
      const isUnlocked = gameState.unlockedPoints.includes(point.id) ||
        (gameState.statements && gameState.statements.some((st) =>
          st.suspectId === point.hiddenUntil.suspectId &&
          st.questionId === point.hiddenUntil.questionId &&
          (!point.hiddenUntil.approach || st.approach === point.hiddenUntil.approach)
        ));
      if (!isUnlocked) return;
    }

    const isSearched = gameState.searchedPoints.includes(point.id);
    const isRevealed = !!point.hiddenUntil && !isSearched;
    const cp = document.createElement("div");
    cp.className = `checkpoint ${isSearched ? "searched" : ""} ${isRevealed ? "revealed" : ""}`;
    const observationLevel = getSkillLevel("observation");
    if (!point.clueId && !isSearched && observationLevel > 0) {
      cp.classList.add("skill-observation-hint", `skill-observation-hint-${observationLevel}`);
      announceSkillHint("observation", "skillHintObservation");
    }
    cp.style.left = point.x + "%";
    cp.style.top = point.y + "%";
    cp.setAttribute("data-id", point.id);

    const dot = document.createElement("div");
    dot.className = "checkpoint-dot";
    cp.appendChild(dot);
    if (point.bodyPresent) {
      cp.classList.add("checkpoint-body");
      cp.title = t("bodyScenePoint");
      const marker = document.createElement("span");
      marker.className = "checkpoint-body-marker";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = "☠";
      cp.appendChild(marker);
    }

    cp.addEventListener("click", () => {
      if (isSearched) {
        showToast(t("alreadySearched"));
        return;
      }

      gameState.searchedPoints.push(point.id);
      saveState();

      // Searching a checkpoint costs one investigation action (also advances the lab).
      recordAction();

      let foundClue = null;
      if (point.clueId) {
        foundClue = c.clues.find((cl) => cl.id === point.clueId);
        const isNewClue = foundClue && !gameState.clues.find((cl) => cl.id === foundClue.id);
        if (isNewClue) {
          gameState.clues.push(foundClue);
          awardPlayerXp(10, `clue:${c.id}:${foundClue.id}`);
        }
        saveState();
        showToast(t("evidenceFound"));
        if (typeof playSfx === "function") playSfx("clue");
        if (typeof fxFlashClue === "function") fxFlashClue();
      } else {
        showToast(t("nothingImportant"));
        if (typeof playSfx === "function") playSfx("empty");
      }

      cp.classList.add("searched");
      cp.classList.remove("skill-observation-hint", "skill-observation-hint-1", "skill-observation-hint-2", "skill-observation-hint-3");
      cp.querySelector(".checkpoint-dot").classList.add("found");

      openScenePopup(point.name[currentLang], point.desc[currentLang], foundClue);
    });

    container.appendChild(cp);
  });

  if (typeof fxBindSpotlight === "function") {
    fxBindSpotlight();
    if (gameState.currentScreen === "crimeScene") fxStartCrimeScene();
  }
}

function openScenePopup(title, desc, clue) {
  const popup = document.getElementById("scene-popup");
  if (!popup.classList.contains("hidden")) return;
  document.getElementById("popup-title").textContent = title;
  let content = desc;
  if (clue) {
    content += `<p class="popup-clue"><strong>${clue.name[currentLang]}</strong><br>${clue.desc[currentLang]}</p>`;
  }
  document.getElementById("popup-desc").innerHTML = content;
  popup.classList.remove("hidden");
  if (typeof fxMarkCluePopup === "function") fxMarkCluePopup(!!clue);
}

function closeScenePopup() {
  document.getElementById("scene-popup").classList.add("hidden");
  if (typeof fxMarkCluePopup === "function") fxMarkCluePopup(false);
}

const toastQueue = [];
let toastActive = false;

function showToast(message) {
  if (!message) return;
  toastQueue.push(message);
  if (!toastActive) displayNextToast();
}

function displayNextToast() {
  const toast = document.getElementById("toast");
  if (!toast || !toastQueue.length) {
    toastActive = false;
    return;
  }

  toastActive = true;
  toast.textContent = toastQueue.shift();
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.classList.add("hidden");
      toastActive = false;
      displayNextToast();
    }, 300);
  }, 2200);
}

const skillHintNoticesShown = new Set();

function getSkillLevel(skillId) {
  const skills = gameState.player && gameState.player.skills;
  const level = skills ? Number(skills[skillId]) : 0;
  return Number.isInteger(level) ? Math.max(0, Math.min(3, level)) : 0;
}

function announceSkillHint(skillId, messageKey, contextId) {
  const caseId = gameState.currentCase ? gameState.currentCase.id : "global";
  const noticeId = `${caseId}:${skillId}:${contextId || "case"}`;
  if (skillHintNoticesShown.has(noticeId)) return;
  skillHintNoticesShown.add(noticeId);
  showToast(t(messageKey));
}

function awardPlayerXp(amount, eventId) {
  const player = gameState.player;
  const points = Math.floor(Number(amount));
  if (!player || !Number.isInteger(points) || points <= 0 || !eventId) return false;
  if (!Array.isArray(player.xpAwards)) player.xpAwards = [];
  if (player.xpAwards.includes(eventId)) return false;

  const previousXp = Math.max(0, Math.floor(Number(player.xp) || 0));
  const newXp = previousXp + points;
  const earnedSkillPoints = Math.floor(newXp / 100) - Math.floor(previousXp / 100);
  player.xp = newXp;
  player.skillPoints = Math.max(0, Math.floor(Number(player.skillPoints) || 0)) + earnedSkillPoints;
  player.xpAwards.push(eventId);
  saveState();

  const skillScreen = document.getElementById("tablet-skills");
  if (isTabletOpen() && skillScreen && !skillScreen.classList.contains("hidden")) {
    renderSkillsApp();
  }
  showToast(tf("xpEarned", { count: points }));
  if (earnedSkillPoints > 0) {
    showToast(tf("skillPointsEarned", { count: earnedSkillPoints }));
  }
  return true;
}

function renderInterrogationSkillHints(suspect, stats, statements) {
  const container = document.getElementById("skill-hints");
  if (!container) return;

  const hints = [];
  const bodyLanguageLevel = getSkillLevel("bodyLanguage");
  if (bodyLanguageLevel > 0) {
    const cueKeys = stats.stress >= 40
      ? ["skillBodyCueAvoidsGaze", "skillBodyCueAdjustsPosture", "skillBodyCueFidgets"]
      : ["skillBodyCueSteadyGaze", "skillBodyCuePauses", "skillBodyCueAdjustsPosture"];
    const cues = cueKeys.slice(0, bodyLanguageLevel).map((key) => t(key));
    hints.push(`
      <div class="skill-hint-item level-${bodyLanguageLevel}">
        <strong>${t("skillHintLabel")}: ${t("skillBodyLanguage")}</strong>
        <p>${cues.join(" · ")}</p>
      </div>
    `);
    announceSkillHint("bodyLanguage", "skillHintBodyLanguage", suspect.id);
  }

  const lieDetectionLevel = getSkillLevel("lieDetection");
  if (lieDetectionLevel > 0) {
    const contradiction = statements.slice().reverse().find((statement) =>
      statement.isContradiction && statement.clueId
    );
    if (contradiction) {
      const clue = (gameState.currentCase.clues || []).find((item) => item.id === contradiction.clueId) ||
        (gameState.clues || []).find((item) => item.id === contradiction.clueId);
      const details = [t("skillHintLieDetection")];
      if (lieDetectionLevel >= 2 && clue) {
        details.push(tf("skillLieEvidenceHint", { clue: clue.name[currentLang] }));
      }
      hints.push(`
        <div class="skill-hint-item level-${lieDetectionLevel}">
          <strong>${t("skillHintLabel")}: ${t("skillLieDetection")}</strong>
          ${details.map((detail) => `<p>${detail}</p>`).join("")}
        </div>
      `);
      announceSkillHint("lieDetection", "skillHintLieDetection", contradiction.clueId);
    }
  }

  container.innerHTML = hints.join("");
  container.classList.toggle("hidden", hints.length === 0);
}

function getRelatedCluePairs() {
  const clues = (gameState.clues || []).filter((clue) =>
    clue && clue.importance !== "misleading" && Array.isArray(clue.suspectIds)
  );
  const pairs = [];
  for (let firstIndex = 0; firstIndex < clues.length; firstIndex++) {
    for (let secondIndex = firstIndex + 1; secondIndex < clues.length; secondIndex++) {
      const first = clues[firstIndex];
      const second = clues[secondIndex];
      const suspectId = first.suspectIds.find((id) => second.suspectIds.includes(id));
      if (suspectId) pairs.push({ first: first, second: second });
    }
  }
  return pairs;
}

function renderSkillConnections(container) {
  const level = getSkillLevel("logicalAnalysis");
  if (!container || level === 0) return;
  const pairs = getRelatedCluePairs().slice(0, level);
  if (!pairs.length) return;

  pairs.forEach((pair) => {
    const card = document.createElement("div");
    card.className = "skill-connection-card";
    card.innerHTML = `
      <p class="skill-connection-note">${t("skillRelatedClues")}</p>
      <p class="skill-connection-pair">${tf("skillConnectionPair", {
        first: pair.first.name[currentLang],
        second: pair.second.name[currentLang]
      })}</p>
    `;
    container.appendChild(card);
  });
  const evidenceScreen = document.getElementById("tablet-evidence");
  if (isTabletOpen() && evidenceScreen && !evidenceScreen.classList.contains("hidden")) {
    const pairIds = pairs.map((pair) => `${pair.first.id}:${pair.second.id}`).join(",");
    announceSkillHint("logicalAnalysis", "skillHintLogicalAnalysis", pairIds);
  }
}

function renderSkillsApp() {
  const list = document.getElementById("skills-list");
  if (!list) return;

  const player = gameState.player;
  const xp = player ? Math.max(0, Math.floor(Number(player.xp) || 0)) : 0;
  const availablePoints = player ? Math.max(0, Math.floor(Number(player.skillPoints) || 0)) : 0;
  const xpProgress = xp % 100;
  const totalEl = document.getElementById("skills-xp-total");
  const remainingEl = document.getElementById("skills-xp-remaining");
  const pointsEl = document.getElementById("skills-points-available");
  const progressEl = document.getElementById("skills-xp-progress");
  const fillEl = document.getElementById("skills-xp-fill");
  if (totalEl) totalEl.textContent = tf("skillTotalXp", { count: xp });
  if (remainingEl) remainingEl.textContent = tf("skillXpRemaining", { count: 100 - xpProgress });
  if (pointsEl) pointsEl.textContent = tf("skillAvailablePoints", { count: availablePoints });
  if (progressEl) {
    progressEl.setAttribute("aria-label", t("skillExperience"));
    progressEl.setAttribute("aria-valuenow", String(xpProgress));
    progressEl.setAttribute("aria-valuemin", "0");
    progressEl.setAttribute("aria-valuemax", "100");
  }
  if (fillEl) fillEl.style.inlineSize = xpProgress + "%";

  list.innerHTML = SKILL_DEFINITIONS.map((skill) => {
    const level = getSkillLevel(skill.id);
    const nextLevel = skill.levels[level];
    const costs = skill.levels.map((tier, index) => `
      <li class="skill-level-item ${index < level ? "active" : ""}">
        <span>${tf("skillLevelLabel", { level: index + 1 })}</span>
        <span>${t(tier.effectKey)}</span>
        <span class="skill-level-cost">${tf("skillUpgradeCost", { count: tier.cost })}</span>
      </li>
    `).join("");
    const upgradeText = nextLevel ? t("skillUpgrade") : t("skillMaxLevel");
    const costText = nextLevel
      ? tf("skillUpgradeCost", { count: nextLevel.cost })
      : t("skillMaxLevel");
    return `
      <article class="skill-card">
        <div class="skill-card-header">
          <h4 class="skill-card-title">${t(skill.nameKey)}</h4>
          <span class="skill-card-level">${tf("skillCurrentLevel", { level })}</span>
        </div>
        <p class="skill-card-description">${t(skill.descriptionKey)}</p>
        <ul class="skill-level-list">${costs}</ul>
        <span class="skill-card-level">${costText}</span>
        <button class="btn btn-primary skill-upgrade-button" data-skill-upgrade="${skill.id}" ${!nextLevel || availablePoints < nextLevel.cost ? "disabled" : ""}>
          ${upgradeText}
        </button>
      </article>
    `;
  }).join("");

  list.querySelectorAll("[data-skill-upgrade]").forEach((button) => {
    button.addEventListener("click", () => upgradeSkill(button.getAttribute("data-skill-upgrade")));
  });
}

function upgradeSkill(skillId) {
  const player = gameState.player;
  const skill = SKILL_DEFINITIONS.find((item) => item.id === skillId);
  const currentLevel = getSkillLevel(skillId);
  const nextLevel = skill && skill.levels[currentLevel];
  if (!player || !skill || !nextLevel || Number(player.skillPoints) < nextLevel.cost) return;

  player.skillPoints -= nextLevel.cost;
  player.skills[skillId] = currentLevel + 1;
  saveState();
  renderSkillsApp();
  if (gameState.currentScreen === "interrogation" && gameState.activeSuspectId) {
    renderInterrogation(gameState.activeSuspectId);
  } else if (gameState.currentScreen === "crimeScene") {
    renderCrimeScene();
  }
  showToast(tf("skillUpgraded", {
    name: t(skill.nameKey),
    level: currentLevel + 1
  }));
}

function renderTablet() {
  switchTabletApp("home");
  renderTabletEvidence();
  renderTabletSuspects();
  renderTabletNotes();
  renderTabletLab();
  renderSkillsApp();
  renderTabletRankCard();
}

function switchTabletApp(app) {
  if (app !== "lab" && typeof stopLabHeartbeat === "function") stopLabHeartbeat();
  document.querySelectorAll(".tablet-app-screen").forEach((s) => s.classList.add("hidden"));
  document.querySelectorAll(".tablet-home").forEach((el) => {
    if (app === "home") el.classList.remove("hidden"); else el.classList.add("hidden");
  });

  const target = document.getElementById("tablet-" + app);
  if (target) target.classList.remove("hidden");
  if (app === "lab") renderTabletLab();
  if (app === "evidence") renderTabletEvidence();
  if (app === "skills") renderSkillsApp();
}

function renderTabletEvidence() {
  const container = document.getElementById("evidence-list");
  container.innerHTML = "";

  if (gameState.clues.length === 0) {
    container.innerHTML = `<p style="text-align:center; color: var(--text-muted);">${t("nothingImportant")}</p>`;
    return;
  }

  gameState.clues.forEach((clue) => {
    const card = document.createElement("div");
    card.className = "tablet-clue-card";

    let typeLabel = "";
    switch (clue.type) {
      case "fingerprint": typeLabel = t("type_fingerprint"); break;
      case "document": typeLabel = t("type_document"); break;
      case "personal": typeLabel = t("type_personal"); break;
      case "trace": typeLabel = t("type_trace"); break;
      case "message": typeLabel = t("type_message"); break;
      case "torn_paper": typeLabel = t("type_torn_paper"); break;
      default: typeLabel = clue.type;
    }

    let impLabel = "";
    switch (clue.importance) {
      case "crucial": impLabel = t("importance_crucial"); break;
      case "important": impLabel = t("importance_important"); break;
      case "misleading": impLabel = t("importance_misleading"); break;
      default: impLabel = clue.importance;
    }

    card.innerHTML = `
      <h4>${clue.name[currentLang]}</h4>
      <p class="clue-meta">${typeLabel}</p>
      <p class="clue-meta">${impLabel}</p>
      <p class="clue-desc">${clue.desc[currentLang]}</p>
      ${renderClueLabSection(clue)}
    `;

    const sendLabBtn = card.querySelector(".btn-send-lab");
    if (sendLabBtn) {
      sendLabBtn.addEventListener("click", () => sendClueToLab(clue.id));
    }
    const openLabBtn = card.querySelector(".btn-open-lab");
    if (openLabBtn) {
      openLabBtn.addEventListener("click", () => {
        switchTabletApp("lab");
        setLabTab("analyses");
      });
    }

    container.appendChild(card);
  });
  renderSkillConnections(container);
  updateAllTexts();
}

function renderTabletSuspects() {
  const container = document.getElementById("suspects-list");
  if (!container) return;
  container.innerHTML = "";

  const suspects = gameState.currentCase ? gameState.currentCase.suspects : [];
  suspects.forEach((s) => {
    const card = document.createElement("div");
    card.className = "tablet-suspect-card";
    const interrogated = gameState.interrogatedSuspects.includes(s.id);

    const personalityLabel = typeof s.personality === "string" ? t("personality_" + s.personality) : (s.personality ? s.personality[currentLang] : "");
    const statements = gameState.statements ? gameState.statements.filter((st) => st.suspectId === s.id) : [];
    const allQuestions = [...(s.questions || []), ...(gameState.unlockedQuestions[s.id] || [])];
    const totalCount = allQuestions.length || 6;
    const stats = getSuspectStats(s.id);
    const contradictions = gameState.contradictions[s.id] || [];
    const hasContradiction = contradictions.length > 0;
    const timeConflict = isAutopsyUnlocked() && suspectHasTimeConflict(s);
    const labFindings = getSuspectLabFindings(s.id);

    let statementsHtml = "";
    if (statements.length > 0) {
      statementsHtml = `
        <div class="tablet-statements-list">
          <h5>${t("statementsTitle")} (${statements.length}):</h5>
          ${statements.map((st) => {
            let qText = "";
            if (st.questionId && st.questionId.startsWith("present_")) {
              const clueId = st.questionId.replace("present_", "");
              const clue = gameState.currentCase.clues.find((cl) => cl.id === clueId);
              qText = `${t("presentEvidence")}: ${clue ? clue.name[currentLang] : clueId}`;
            } else {
              const q = allQuestions.find((item) => item.id === st.questionId);
              qText = q ? q.text[currentLang] : "";
            }
            const ansText = typeof st.text === "object" ? st.text[currentLang] : st.text;
            const approachLabel = st.isContradiction ? t("contradictionBadge") : t("approach_" + st.approach);
            const badgeClass = st.isContradiction ? "badge-contradiction" : `badge-${st.approach}`;
            return `
              <div class="tablet-statement-item ${st.isContradiction ? "statement-contradiction" : ""}">
                <div class="statement-meta">
                  <span class="statement-q">${qText}</span>
                  <span class="statement-approach ${badgeClass}">${approachLabel}</span>
                </div>
                <p class="statement-ans">"${ansText}"</p>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      statementsHtml = `<p class="tablet-no-statements">${t("noStatementsYet")}</p>`;
    }

    card.innerHTML = `
      <div class="tablet-suspect-header">
        <div class="tablet-suspect-info">
          <h4>${s.name[currentLang]}</h4>
          <p class="tablet-suspect-job">${s.job[currentLang]}</p>
          ${timeConflict ? `<span class="time-conflict-badge">⏱ ${t("timeConflict")}</span>` : ""}
          ${isAutopsyUnlocked() && s.alibiWindow ? `<p class="alibi-window-line">${t("autopsyAlibiWindow")}: <span class="lab-time">${s.alibiWindow.start} – ${s.alibiWindow.end}</span></p>` : ""}
          ${labFindings.length ? `<div class="suspect-lab-findings">${labFindings.join("")}</div>` : ""}
          <div class="tablet-suspect-tags">
            <span class="suspect-meta">${personalityLabel}</span>
            ${hasContradiction ? `<span class="contradiction-badge"><span class="badge-icon">⚠️</span> ${t("contradictionBadge")}</span>` : ""}
          </div>
          <div class="tablet-coop-bar-wrap">
            <span class="tablet-coop-label">${t("cooperation")}: ${stats.cooperation}%</span>
            <div class="tablet-mini-bar">
              <div class="meter-fill fill-cooperation" style="width: ${stats.cooperation}%;"></div>
            </div>
          </div>
          <p class="tablet-suspect-progress"><span data-i18n="questionsAsked">${t("questionsAsked")}</span>: <strong>${statements.length}/${totalCount}</strong></p>
        </div>
        <span class="tablet-status-badge ${interrogated ? "done" : ""}">${interrogated ? "✓" : "○"}</span>
      </div>
      ${statementsHtml}
    `;

    container.appendChild(card);
  });
  updateAllTexts();
}

function renderTabletNotes() {
  document.getElementById("notes-input").value = gameState.notes;
}

function saveNotes() {
  const textarea = document.getElementById("notes-input");
  if (textarea) {
    gameState.notes = textarea.value;
    saveState();
  }
}

/* ===== Forensic Laboratory ===== */

let labActiveTab = "analyses";
let labGame = null;
const AUTOPSY_ANALYSIS_DURATION = 20000;
let autopsyAnimation = { caseRef: null, startedAt: 0, status: "idle", timer: null };

function isTabletOpen() {
  const tablet = document.getElementById("tablet");
  return !!(tablet && tablet.classList.contains("show"));
}

function isAutopsyPanelActive() {
  const labScreen = document.getElementById("tablet-lab");
  const panel = document.getElementById("lab-panel-autopsy");
  const tabletHome = document.getElementById("tablet-home");
  return labActiveTab === "autopsy" && isTabletOpen() &&
    !!labScreen && !labScreen.classList.contains("hidden") &&
    !!tabletHome && tabletHome.classList.contains("hidden") &&
    !!panel && !panel.classList.contains("hidden");
}

function resetAutopsyAnimation(caseRef) {
  if (autopsyAnimation.timer) clearTimeout(autopsyAnimation.timer);
  if (typeof stopLabHeartbeat === "function") stopLabHeartbeat();
  autopsyAnimation = { caseRef: caseRef, startedAt: 0, status: "idle", timer: null };
}

function finishAutopsyAnimation(caseRef) {
  if (autopsyAnimation.caseRef !== caseRef || autopsyAnimation.status !== "running") return;
  autopsyAnimation.timer = null;
  autopsyAnimation.status = "finishing";
  if (typeof stopLabHeartbeat === "function") stopLabHeartbeat();

  const panel = document.getElementById("lab-panel-autopsy");
  const scene = panel && panel.querySelector(".autopsy-progress-scene");
  if (scene) scene.classList.add("is-finishing");

  autopsyAnimation.timer = setTimeout(() => {
    if (autopsyAnimation.caseRef !== caseRef) return;
    autopsyAnimation.timer = null;
    autopsyAnimation.status = "complete";
    renderAutopsyReport();
  }, 420);
}

function renderAutopsyProgressScene(panel, caseRef) {
  if (autopsyAnimation.caseRef !== caseRef) resetAutopsyAnimation(caseRef);
  if (autopsyAnimation.status === "complete") return false;
  if (!isAutopsyPanelActive()) return false;

  if (autopsyAnimation.status === "idle") {
    autopsyAnimation.startedAt = Date.now();
    autopsyAnimation.status = "running";
  }

  const elapsed = Math.min(AUTOPSY_ANALYSIS_DURATION, Date.now() - autopsyAnimation.startedAt);
  const progress = Math.round(elapsed / AUTOPSY_ANALYSIS_DURATION * 100);
  if (autopsyAnimation.status === "running") {
    if (elapsed >= AUTOPSY_ANALYSIS_DURATION) {
      autopsyAnimation.status = "finishing";
    } else {
      if (typeof startLabHeartbeat === "function") startLabHeartbeat();
      if (!autopsyAnimation.timer) {
        autopsyAnimation.timer = setTimeout(
          () => finishAutopsyAnimation(caseRef),
          AUTOPSY_ANALYSIS_DURATION - elapsed
        );
      }
    }
  }

  const finishingClass = autopsyAnimation.status === "finishing" ? " is-finishing" : "";
  panel.innerHTML = `
    <section class="autopsy-progress-scene${finishingClass}" aria-label="${t("autopsyInProgress")}">
      <h4 class="autopsy-progress-title">${t("autopsyInProgress")}</h4>
      <svg class="autopsy-progress-svg" viewBox="0 0 520 230" aria-hidden="true">
        <defs>
          <linearGradient id="autopsy-table" x2="0" y2="1">
            <stop offset="0" stop-color="#657789" />
            <stop offset="1" stop-color="#273646" />
          </linearGradient>
          <linearGradient id="autopsy-sheet" x2="0" y2="1">
            <stop offset="0" stop-color="#dbe4e9" />
            <stop offset="1" stop-color="#9eafbc" />
          </linearGradient>
          <radialGradient id="autopsy-lamp-glow">
            <stop stop-color="#f2d37a" stop-opacity=".42" />
            <stop offset="1" stop-color="#f2d37a" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="520" height="230" rx="10" fill="#0b1420" />
        <path d="M0 176h520v54H0z" fill="#111d2a" />
        <ellipse cx="260" cy="142" rx="180" ry="58" fill="url(#autopsy-lamp-glow)" />
        <g class="autopsy-lamp-head">
          <path d="M260 0v24" stroke="#aab9c5" stroke-width="5" />
          <path d="M220 28q40-25 80 0l-11 17h-58z" fill="#d2a95d" stroke="#f0d47a" stroke-width="3" />
          <path class="autopsy-lamp-beam" d="m229 45-65 82h192l-65-82z" fill="url(#autopsy-lamp-glow)" />
        </g>
        <path d="M116 139v52m286-52v52m-298 1h310" fill="none" stroke="#8999a8" stroke-width="8" stroke-linecap="round" />
        <rect x="76" y="126" width="370" height="17" rx="7" fill="url(#autopsy-table)" stroke="#b3c1cd" stroke-width="3" />
        <ellipse cx="178" cy="119" rx="23" ry="16" fill="#728394" />
        <path d="M147 121q18-20 47-12 30-12 60 0 31-10 58 2 28-13 57 3l11 15H137z" fill="url(#autopsy-sheet)" stroke="#d4e0e8" stroke-width="3" />
        <path d="M194 113q31 12 61 0m18 4q23 10 47-1" fill="none" stroke="#8193a2" stroke-opacity=".62" stroke-width="3" />
        <g class="autopsy-hand-left">
          <path d="M49 78q10-11 20-3l7 16 31 16-8 14-38-16q-16-9-12-27z" fill="#5c8cae" stroke="#c3d9e8" stroke-width="3" />
          <path d="m88 104 21 3-2 9-21-3z" fill="#26394b" stroke="#d4a017" stroke-width="2" />
          <path class="autopsy-flashlight-beam" d="m106 105 69 14-2 16-71-17z" fill="#e2bb58" fill-opacity=".26" />
          <path d="m99 108 56 10m-54 7 55-4" stroke="#c5d0d8" stroke-width="3" stroke-linecap="round" />
        </g>
        <g class="autopsy-hand-right">
          <path d="M458 73q-11-8-19 4l-7 17-31 13 7 15 39-12q17-9 11-37z" fill="#5c8cae" stroke="#c3d9e8" stroke-width="3" />
          <g class="autopsy-tool-lens">
            <circle cx="365" cy="108" r="20" fill="#17344a" fill-opacity=".72" stroke="#c4d2de" stroke-width="4" />
            <circle cx="365" cy="108" r="13" fill="#84c8e8" fill-opacity=".22" stroke="#84c8e8" stroke-width="2" />
            <path d="m379 123 15 17" stroke="#d4a017" stroke-width="6" stroke-linecap="round" />
          </g>
        </g>
      </svg>
      <p class="autopsy-progress-caption">${t("autopsyProgress")}</p>
      <div class="autopsy-progress-track" role="progressbar" aria-label="${t("autopsyProgress")}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${progress}">
        <span class="autopsy-progress-fill" style="--progress:${progress / 100}; animation-delay:-${elapsed}ms"></span>
      </div>
    </section>
  `;

  if (autopsyAnimation.status === "finishing" && !autopsyAnimation.timer) {
    autopsyAnimation.timer = setTimeout(() => {
      if (autopsyAnimation.caseRef !== caseRef) return;
      autopsyAnimation.timer = null;
      autopsyAnimation.status = "complete";
      renderAutopsyReport();
    }, 420);
  }
  return true;
}

function getLabClue(clueId) {
  const c = gameState.currentCase;
  if (!c) return null;
  return (c.clues || []).find((cl) => cl.id === clueId) ||
    (gameState.clues || []).find((cl) => cl.id === clueId) || null;
}

function formatLabSuspectNames(ids) {
  const c = gameState.currentCase;
  if (!c || !Array.isArray(ids)) return "";
  const sep = currentLang === "ar" ? "، " : ", ";
  return ids
    .map((id) => {
      const s = (c.suspects || []).find((item) => item.id === id);
      return s ? s.name[currentLang] : null;
    })
    .filter(Boolean)
    .join(sep);
}

function getSuspectLabFindings(suspectId) {
  const findings = [];
  const reports = gameState.labReports || {};
  Object.keys(reports).forEach((id) => {
    const report = reports[id];
    if (report && Array.isArray(report.suspectIds) && report.suspectIds.includes(suspectId)) {
      const clue = getLabClue(id);
      const name = clue ? clue.name[currentLang] : id;
      findings.push(`<span class="suspect-lab-chip">🧪 ${name} · ${t("certainty_" + report.certainty)}</span>`);
    }
  });
  return findings;
}

function renderClueLabSection(clue) {
  if (!clue || !clue.analyzable) return "";
  const report = (gameState.labReports || {})[clue.id];
  const job = (gameState.labJobs || []).find((j) => j.clueId === clue.id);
  let html = `<div class="clue-lab">`;
  html += `<div class="clue-lab-head"><span class="lab-type-chip">${t("labType_" + clue.labType)}</span>`;
  if (report) {
    html += `<span class="lab-certainty certainty-${report.certainty}">${t("labCertainty")}: ${t("certainty_" + report.certainty)}</span>`;
    if (report.misleading) html += `<span class="lab-misleading">${t("labMisleading")}</span>`;
  }
  html += `</div>`;

  if (report) {
    html += `<p class="lab-report-text">${report.text[currentLang]}</p>`;
    const names = formatLabSuspectNames(report.suspectIds);
    if (names) html += `<p class="lab-points">${tf("labPointsTo", { names })}</p>`;
  } else if (job) {
    if (job.state === "ready") {
      html += `<p class="lab-status">${t("labReadyToCompare")}</p>`;
      html += `<button class="btn btn-primary btn-sm btn-open-lab">${t("labOpen")}</button>`;
    } else {
      const pct = Math.max(0, Math.min(100, Math.round((job.progress / job.needed) * 100)));
      html += `<div class="lab-progress"><div class="lab-progress-fill" style="width:${pct}%"></div></div>`;
      html += `<p class="lab-status">${t("labAnalyzing")} · ${tf("labProgress", { done: job.progress, total: job.needed })}</p>`;
    }
  } else {
    html += `<button class="btn btn-primary btn-sm btn-send-lab">${t("labSend")}</button>`;
  }

  html += `</div>`;
  return html;
}

function sendClueToLab(clueId) {
  const clue = getLabClue(clueId);
  if (!clue || !clue.analyzable) return;
  if ((gameState.labReports || {})[clue.id]) return;
  if ((gameState.labJobs || []).some((j) => j.clueId === clue.id)) {
    showToast(t("labAnalyzing"));
    return;
  }
  if ((gameState.labJobs || []).length >= RULES.lab.capacity) {
    showToast(t("labFull"));
    return;
  }
  gameState.labJobs.push({
    clueId: clue.id,
    needed: RULES.lab.analysisActions,
    progress: 0,
    attempt: 0,
    state: "active"
  });
  saveState();
  showToast(t("labQueued"));
  renderTabletEvidence();
  renderTabletLab();
}

function completeLabReport(clue, certainty, resultText, suspectIds, misleading) {
  if (!clue || !resultText) return;
  const isNewReport = !gameState.labReports[clue.id];
  gameState.labReports[clue.id] = {
    certainty: certainty || clue.certainty || "medium",
    text: resultText,
    suspectIds: clue.labSuspectIds || suspectIds || clue.suspectIds || [],
    misleading: !!misleading,
    labType: clue.labType
  };
  gameState.labJobs = (gameState.labJobs || []).filter((j) => j.clueId !== clue.id);
  if (clue.recoveredClue && !(gameState.clues || []).some((cl) => cl.id === clue.recoveredClue.id)) {
    gameState.clues.push(JSON.parse(JSON.stringify(clue.recoveredClue)));
    const caseId = gameState.currentCase ? gameState.currentCase.id : "unknown";
    awardPlayerXp(10, `clue:${caseId}:${clue.recoveredClue.id}`);
  }
  if (isNewReport) {
    const caseId = gameState.currentCase ? gameState.currentCase.id : "unknown";
    awardPlayerXp(10, `lab:${caseId}:${clue.id}`);
  }
  saveState();
  renderTabletEvidence();
  renderTabletSuspects();
  renderTabletLab();
  if (typeof playSfx === "function") playSfx("lab");
}

function advanceLabJobs() {
  const jobs = gameState.labJobs || [];
  if (!jobs.length) return;
  let changed = false;

  jobs.forEach((job) => {
    if (job.state !== "active") return;
    job.progress = (job.progress || 0) + 1;
    changed = true;
    if (job.progress < job.needed) return;

    const clue = getLabClue(job.clueId);
    if (!clue) return;

    if (clue.labType === "trace") {
      completeLabReport(clue, clue.certainty || "medium", clue.labResult, clue.suspectIds, clue.misleading);
      showToast(tf("labReportAdded", { name: clue.name[currentLang] }));
    } else {
      job.state = "ready";
      showToast(tf("labReadyToast", { name: clue.name[currentLang] }));
      if (typeof playSfx === "function") playSfx("lab");
    }
  });

  if (changed) {
    saveState();
    if (isTabletOpen()) {
      renderTabletEvidence();
      renderTabletSuspects();
      renderTabletLab();
    }
  }
}

function checkAutopsyUnlock() {
  if (gameState.autopsyNotified) return;
  if (!isAutopsyUnlocked()) return;
  gameState.autopsyNotified = true;
  saveState();
  showToast(t("labAutopsyUnlocked"));
}

function setLabTab(tab) {
  labActiveTab = tab === "autopsy" ? "autopsy" : "analyses";
  if (labActiveTab !== "autopsy" && typeof stopLabHeartbeat === "function") stopLabHeartbeat();
  renderTabletLab();
}

function renderTabletLab() {
  const labScreen = document.getElementById("tablet-lab");
  if (!labScreen) return;
  const analyses = document.getElementById("lab-panel-analyses");
  const autopsy = document.getElementById("lab-panel-autopsy");
  if (!analyses || !autopsy) return;

  document.querySelectorAll("[data-lab-tab]").forEach((btn) => {
    const tab = btn.getAttribute("data-lab-tab");
    btn.classList.toggle("active", tab === labActiveTab);
    if (!btn.dataset.bound) {
      btn.dataset.bound = "true";
      btn.addEventListener("click", () => setLabTab(btn.getAttribute("data-lab-tab")));
    }
  });

  analyses.classList.toggle("hidden", labActiveTab !== "analyses");
  autopsy.classList.toggle("hidden", labActiveTab !== "autopsy");

  renderLabAnalyses();
  renderAutopsyReport();
  paintLabGame();
}

function renderLabAnalyses() {
  const summary = document.getElementById("lab-summary");
  const jobsBox = document.getElementById("lab-jobs");
  const reportsBox = document.getElementById("lab-reports");
  if (!summary || !jobsBox || !reportsBox) return;

  const jobs = gameState.labJobs || [];
  summary.innerHTML =
    `<span>${tf("labActionsTaken", { count: gameState.actions || 0 })}</span>` +
    `<span>${tf("labCapacity", { used: jobs.length, max: RULES.lab.capacity })}</span>`;

  if (!jobs.length) {
    jobsBox.innerHTML = `<p class="lab-empty">${t("labNoJobs")}</p>`;
  } else {
    jobsBox.innerHTML = jobs.map((job) => {
      const clue = getLabClue(job.clueId);
      if (!clue) return "";
      const pct = Math.max(0, Math.min(100, Math.round((job.progress / job.needed) * 100)));
      const statusText = job.state === "ready" ? t("labReadyToCompare") : t("labAnalyzing");
      return `
        <div class="lab-job">
          <div class="lab-job-head">
            <strong>${clue.name[currentLang]}</strong>
            <span class="lab-type-chip">${t("labType_" + clue.labType)}</span>
          </div>
          <div class="lab-progress"><div class="lab-progress-fill" style="width:${pct}%"></div></div>
          <p class="lab-status">${statusText} · ${tf("labProgress", { done: job.progress, total: job.needed })}</p>
          ${job.state === "ready" ? `<button class="btn btn-primary btn-sm btn-start-lab-game" data-clue="${clue.id}">${t("labCompleteComparison")}</button>` : ""}
        </div>`;
    }).join("");
  }

  jobsBox.querySelectorAll(".btn-start-lab-game").forEach((btn) => {
    btn.addEventListener("click", () => startLabMinigame(btn.getAttribute("data-clue")));
  });

  const reportIds = Object.keys(gameState.labReports || {});
  if (!reportIds.length) {
    reportsBox.innerHTML = `<p class="lab-empty">${t("labNoReports")}</p>`;
  } else {
    reportsBox.innerHTML = reportIds.map((id) => {
      const clue = getLabClue(id);
      const report = gameState.labReports[id];
      const name = clue ? clue.name[currentLang] : id;
      const names = formatLabSuspectNames(report.suspectIds);
      return `
        <div class="lab-report">
          <div class="lab-report-head">
            <strong>${name}</strong>
            <span class="lab-certainty certainty-${report.certainty}">${t("certainty_" + report.certainty)}</span>
          </div>
          ${report.misleading ? `<span class="lab-misleading">${t("labMisleading")}</span>` : ""}
          <p class="lab-report-text">${report.text[currentLang]}</p>
          ${names ? `<p class="lab-points">${tf("labPointsTo", { names })}</p>` : ""}
        </div>`;
    }).join("");
  }
}

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(text) {
  let hash = 0;
  for (let i = 0; i < String(text).length; i++) {
    hash = (hash * 31 + String(text).charCodeAt(i)) >>> 0;
  }
  return hash || 1;
}

function fingerprintSvg(seed) {
  const rnd = mulberry32(seed || 1);
  const cx = 50 + (rnd() - 0.5) * 8;
  const cy = 53 + (rnd() - 0.5) * 8;
  const rot = (rnd() - 0.5) * 14;
  const stretch = 0.9 + rnd() * 0.2;
  let paths = "";

  for (let i = 0; i < 8; i++) {
    const rx = 5 + i * 4.4 + rnd() * 1.2;
    const ry = 6.5 + i * 4.3 + rnd() * 1.2;
    const y = cy + (rnd() - 0.5) * 2;
    paths += `<path d="M ${(cx - rx).toFixed(1)} ${y.toFixed(1)} C ${(cx - rx).toFixed(1)} ${(y - ry * 1.45).toFixed(1)}, ${(cx + rx).toFixed(1)} ${(y - ry * 1.45).toFixed(1)}, ${(cx + rx).toFixed(1)} ${y.toFixed(1)}" />`;
  }
  for (let i = 0; i < 4; i++) {
    const y = cy + 3 + i * 1.7;
    const half = 4 + i * 1.5;
    paths += `<path d="M ${(cx - half).toFixed(1)} ${y.toFixed(1)} Q ${cx.toFixed(1)} ${(y + 3).toFixed(1)} ${(cx + half).toFixed(1)} ${y.toFixed(1)}" />`;
  }

  return `<svg viewBox="0 0 100 100" class="fp-svg" aria-hidden="true"><g transform="translate(50 50) rotate(${rot.toFixed(1)}) scale(1 ${stretch.toFixed(2)}) translate(-50 -50)" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">${paths}</g></svg>`;
}

function buildFingerprintCandidates(clue, attempt) {
  const baseSeed = clue.labSeed || hashSeed(clue.id);
  const rnd = mulberry32(baseSeed + attempt * 137 + 19);
  const correctPos = Math.floor(rnd() * 4);
  const candidates = [];
  let decoyIndex = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctPos) {
      candidates.push({ seed: baseSeed, correct: true });
    } else {
      candidates.push({ seed: baseSeed + 101 + decoyIndex * 73 + attempt * 31, correct: false });
      decoyIndex++;
    }
  }
  return { candidates, correctPos };
}

function splitPaper(text, count) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const pieces = [];
  if (!words.length) {
    for (let i = 0; i < count; i++) pieces.push("");
    return pieces;
  }
  const base = Math.floor(words.length / count);
  let extra = words.length % count;
  let index = 0;
  for (let i = 0; i < count; i++) {
    const take = base + (extra > 0 ? 1 : 0);
    if (extra > 0) extra--;
    pieces.push(words.slice(index, index + take).join(" "));
    index += take;
  }
  return pieces;
}

function shuffledOrder(count) {
  const order = [];
  for (let i = 0; i < count; i++) order.push(i);
  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = order[i];
    order[i] = order[j];
    order[j] = tmp;
  }
  if (order.every((value, index) => value === index)) {
    return shuffledOrder(count);
  }
  return order;
}

function startLabMinigame(clueId) {
  const clue = getLabClue(clueId);
  const job = (gameState.labJobs || []).find((j) => j.clueId === clueId && j.state === "ready");
  if (!clue || !job) return;

  if (clue.labType === "fingerprint") {
    const built = buildFingerprintCandidates(clue, job.attempt || 0);
    labGame = {
      type: "fingerprint",
      clueId: clue.id,
      attempt: job.attempt || 0,
      candidates: built.candidates,
      correctPos: built.correctPos,
      resolved: false,
      result: null
    };
  } else if (clue.labType === "document") {
    labGame = {
      type: "assembly",
      clueId: clue.id,
      pieces: splitPaper((clue.paperText || {})[currentLang], 6),
      order: shuffledOrder(6),
      selected: null,
      moves: 0,
      resolved: false,
      result: null
    };
  } else {
    return;
  }
  paintLabGame();
}

function paintLabGame() {
  const box = document.getElementById("lab-minigame");
  if (!box) return;

  if (!labGame) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }

  const clue = getLabClue(labGame.clueId);
  if (!clue) {
    labGame = null;
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }

  box.classList.remove("hidden");

  if (labGame.resolved) {
    paintLabOutcome(box, clue);
    return;
  }

  if (labGame.type === "fingerprint") {
    const seed = clue.labSeed || hashSeed(clue.id);
    box.innerHTML = `
      <div class="lab-mini-head">
        <h4>${t("labMatchTitle")}</h4>
        <button class="btn-back-tablet lab-game-close">${t("labBack")}</button>
      </div>
      <p class="lab-mini-sub">${t("labMatchInstruction")}</p>
      <div class="fp-compare">
        <div class="fp-print-box">
          <span class="fp-print-label">${t("labCluePrint")}</span>
          ${fingerprintSvg(seed)}
        </div>
        <div class="fp-candidates">
          ${labGame.candidates.map((candidate, index) =>
            `<button class="fp-candidate" data-idx="${index}" aria-label="${t("labMatchTitle")} ${index + 1}">
              ${fingerprintSvg(candidate.seed)}
              <span class="fp-index">${index + 1}</span>
            </button>`
          ).join("")}
        </div>
      </div>
      <button class="btn btn-secondary btn-sm lab-game-skip">${t("labMatchSkip")}</button>
    `;

    box.querySelectorAll(".fp-candidate").forEach((btn) => {
      btn.addEventListener("click", () => resolveFingerprintChoice(Number(btn.getAttribute("data-idx"))));
    });
    const skipBtn = box.querySelector(".lab-game-skip");
    if (skipBtn) skipBtn.addEventListener("click", skipFingerprintMatch);
  } else {
    const pieces = splitPaper((clue.paperText || {})[currentLang], 6);
    labGame.pieces = pieces;
    box.innerHTML = `
      <div class="lab-mini-head">
        <h4>${t("labAssemblyTitle")}</h4>
        <button class="btn-back-tablet lab-game-close">${t("labBack")}</button>
      </div>
      <p class="lab-mini-sub">${t("labAssemblyInstruction")}</p>
      <div class="paper-grid" style="direction:${currentLang === "ar" ? "rtl" : "ltr"};">
        ${labGame.order.map((pieceIndex, slot) =>
          `<button class="paper-piece ${labGame.selected === slot ? "selected" : ""}" data-slot="${slot}">${pieces[pieceIndex] || ""}</button>`
        ).join("")}
      </div>
      <p class="lab-status">${tf("labAssemblyMoves", { count: labGame.moves })}</p>
    `;

    box.querySelectorAll(".paper-piece").forEach((btn) => {
      btn.addEventListener("click", () => onAssemblyPieceClick(Number(btn.getAttribute("data-slot"))));
    });
  }

  const closeBtn = box.querySelector(".lab-game-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      labGame = null;
      renderTabletLab();
    });
  }
}

function paintLabOutcome(box, clue) {
  const report = (gameState.labReports || {})[clue.id];
  let title = "";
  let message = "";
  let tone = "ok";
  let fullText = "";

  if (labGame.result === "high") {
    title = t("labMatchHigh");
    message = clue.labResult[currentLang];
  } else if (labGame.result === "medium") {
    title = t("labMatchMedium");
    message = (clue.labResultMedium || clue.labResult)[currentLang];
  } else if (labGame.result === "wrong") {
    title = t("certainty_inconclusive");
    message = t("labMatchWrong");
    tone = "warn";
  } else if (labGame.result === "solved") {
    title = t("labAssemblyTitle");
    message = clue.recoveredClue ? t("labAssemblySolved") : t("labAssemblySolvedNoClue");
    fullText = (clue.paperText || {})[currentLang] || "";
  }

  const names = report ? formatLabSuspectNames(report.suspectIds) : "";

  box.innerHTML = `
    <div class="lab-mini-head">
      <h4>${t(labGame.type === "assembly" ? "labAssemblyTitle" : "labMatchTitle")}</h4>
      <button class="btn-back-tablet lab-game-close">${t("labBack")}</button>
    </div>
    <div class="lab-outcome ${tone}">
      <h5>${title}</h5>
      <p>${message}</p>
      ${fullText ? `<div class="paper-full">${fullText}</div>` : ""}
      ${report ? `
        <div class="lab-report">
          <div class="lab-report-head">
            <strong>${t("labReport")}</strong>
            <span class="lab-certainty certainty-${report.certainty}">${t("labCertainty")}: ${t("certainty_" + report.certainty)}</span>
          </div>
          ${report.misleading ? `<span class="lab-misleading">${t("labMisleading")}</span>` : ""}
          <p class="lab-report-text">${report.text[currentLang]}</p>
          ${names ? `<p class="lab-points">${tf("labPointsTo", { names })}</p>` : ""}
        </div>` : ""}
    </div>
  `;

  const closeBtn = box.querySelector(".lab-game-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      labGame = null;
      renderTabletLab();
    });
  }
}

function resolveFingerprintChoice(index) {
  if (!labGame || labGame.resolved) return;
  const clue = getLabClue(labGame.clueId);
  if (!clue) return;
  const candidate = labGame.candidates[index];

  if (candidate && candidate.correct) {
    completeLabReport(clue, "high", clue.labResult, clue.suspectIds, clue.misleading);
    labGame.resolved = true;
    labGame.result = "high";
    showToast(tf("labReportAdded", { name: clue.name[currentLang] }));
  } else {
    const job = (gameState.labJobs || []).find((j) => j.clueId === labGame.clueId);
    if (job) {
      job.needed = RULES.lab.retryActions;
      job.progress = 0;
      job.attempt = (job.attempt || 0) + 1;
      job.state = "active";
      saveState();
    }
    labGame.resolved = true;
    labGame.result = "wrong";
    showToast(t("labMatchWrongToast"));
  }
  paintLabGame();
}

function skipFingerprintMatch() {
  if (!labGame || labGame.resolved) return;
  const clue = getLabClue(labGame.clueId);
  if (!clue) return;
  completeLabReport(clue, "medium", clue.labResultMedium || clue.labResult, clue.suspectIds, clue.misleading);
  labGame.resolved = true;
  labGame.result = "medium";
  showToast(tf("labReportAdded", { name: clue.name[currentLang] }));
  paintLabGame();
}

function onAssemblyPieceClick(slot) {
  if (!labGame || labGame.resolved || labGame.type !== "assembly") return;

  if (labGame.selected === null) {
    labGame.selected = slot;
    paintLabGame();
    return;
  }
  if (labGame.selected === slot) {
    labGame.selected = null;
    paintLabGame();
    return;
  }

  const first = labGame.selected;
  const temp = labGame.order[first];
  labGame.order[first] = labGame.order[slot];
  labGame.order[slot] = temp;
  labGame.selected = null;
  labGame.moves++;

  if (labGame.order.every((value, index) => value === index)) {
    const clue = getLabClue(labGame.clueId);
    if (clue) {
      completeLabReport(clue, clue.certainty || "high", clue.labResult, clue.suspectIds, clue.misleading);
      labGame.resolved = true;
      labGame.result = "solved";
      showToast(clue.recoveredClue ? t("labAssemblySolved") : t("labAssemblySolvedNoClue"));
    }
  }
  paintLabGame();
}

function timeToMinutes(value) {
  const parts = String(value || "0:0").split(":");
  const hours = Number(parts[0]) || 0;
  const minutes = Number(parts[1]) || 0;
  return hours * 60 + minutes;
}

function windowsOverlap(first, second) {
  if (!first || !second) return false;
  return timeToMinutes(first.start) < timeToMinutes(second.end) &&
    timeToMinutes(second.start) < timeToMinutes(first.end);
}

function isAutopsyUnlocked() {
  const c = gameState.currentCase;
  if (!c || !c.autopsy) return false;
  return (gameState.searchedPoints || []).includes("point_body") ||
    (gameState.actions || 0) >= RULES.lab.autopsyUnlockActions;
}

function suspectHasTimeConflict(suspect) {
  const c = gameState.currentCase;
  if (!c || !c.autopsy || !suspect || !suspect.alibiWindow) return false;
  return windowsOverlap(suspect.alibiWindow, c.autopsy.deathWindow);
}

function renderAutopsyReport() {
  const panel = document.getElementById("lab-panel-autopsy");
  if (!panel) return;
  const c = gameState.currentCase;

  if (!c || !c.autopsy) {
    resetAutopsyAnimation(null);
    panel.innerHTML = `<p class="lab-empty">${t("labNoReports")}</p>`;
    return;
  }

  if (!isAutopsyUnlocked()) {
    if (autopsyAnimation.caseRef !== c) resetAutopsyAnimation(c);
    const done = Math.min(gameState.actions || 0, RULES.lab.autopsyUnlockActions);
    panel.innerHTML = `
      <div class="lab-lock">
        <div class="lab-lock-icon">🔒</div>
        <h4>${t("labLockedTitle")}</h4>
        <p>${tf("labLockedHint", { count: RULES.lab.autopsyUnlockActions })}</p>
        <p class="lab-lock-progress">${tf("labUnlockProgress", { done, total: RULES.lab.autopsyUnlockActions })}</p>
      </div>
    `;
    return;
  }

  if (renderAutopsyProgressScene(panel, c)) return;

  const suspects = c.suspects || [];
  panel.innerHTML = `
    <div class="autopsy-card">
      <h4>${t("autopsyTitle")}</h4>
      <div class="autopsy-row">
        <span class="autopsy-label">${t("autopsyCause")}</span>
        <p>${c.autopsy.cause[currentLang]}</p>
      </div>
      <div class="autopsy-row">
        <span class="autopsy-label">${t("autopsyTime")}</span>
        <p class="lab-time">${c.autopsy.deathWindow.start} – ${c.autopsy.deathWindow.end}</p>
      </div>
      <h5>${t("autopsyFindings")}</h5>
      <ul class="autopsy-findings">
        ${(c.autopsy.findings || []).map((finding) => `<li>${finding[currentLang]}</li>`).join("")}
      </ul>
    </div>
    <div class="autopsy-card">
      <h5>${t("autopsyAlibis")}</h5>
      ${suspects.map((s) => {
        const conflict = suspectHasTimeConflict(s);
        const windowText = s.alibiWindow ? `${s.alibiWindow.start} – ${s.alibiWindow.end}` : "-";
        return `
          <div class="autopsy-suspect ${conflict ? "conflict" : ""}">
            <div class="autopsy-suspect-head">
              <strong>${s.name[currentLang]}</strong>
              ${conflict ? `<span class="time-conflict-badge">⏱ ${t("autopsyConflict")}</span>` : ""}
            </div>
            <p class="alibi-line">${t("autopsyAlibiWindow")}: <span class="lab-time">${windowText}</span></p>
            <p class="autopsy-alibi-status">${conflict ? t("autopsyConflict") : t("autopsyNoConflict")}</p>
          </div>`;
      }).join("")}
    </div>
  `;
}

/* ===== Accusation, Endings and Case Results ===== */

const ACCUSATION_STEP_KEYS = [
  "accusationStepSuspect",
  "accusationStepEvidence",
  "accusationStepMotive",
  "accusationStepConfirm"
];

let accusationDraft = {
  step: 1,
  suspectId: null,
  clueIds: [],
  motiveId: null
};

function resetAccusationDraft() {
  accusationDraft = {
    step: 1,
    suspectId: null,
    clueIds: [],
    motiveId: null
  };
}

function openAccusation() {
  if (!gameState.currentCase) {
    showToast(t("startCase"));
    return;
  }
  resetAccusationDraft();
  renderAccusation();
  showScreen("accusation");
}

function accusationCanProceed() {
  if (accusationDraft.step === 1) return !!accusationDraft.suspectId;
  if (accusationDraft.step === 3) return !!accusationDraft.motiveId;
  return true;
}

function renderAccusationSteps() {
  const stepsEl = document.getElementById("accusation-steps");
  if (!stepsEl) return;

  stepsEl.innerHTML = ACCUSATION_STEP_KEYS.map((key, index) => {
    const step = index + 1;
    const stateClass = step === accusationDraft.step
      ? "active"
      : step < accusationDraft.step
        ? "done"
        : "";
    return `
      <li class="accusation-step ${stateClass}" data-step="${step}">
        <span class="accusation-step-index">${step < accusationDraft.step ? "✓" : step}</span>
        <span class="accusation-step-label">${t(key)}</span>
      </li>
    `;
  }).join("");
}

function renderAccusation() {
  const c = gameState.currentCase;
  const body = document.getElementById("accusation-body");
  if (!c || !body) return;

  renderAccusationSteps();
  body.innerHTML = "";

  if (accusationDraft.step === 1) {
    renderAccusationSuspectStep(body, c);
  } else if (accusationDraft.step === 2) {
    renderAccusationEvidenceStep(body, c);
  } else if (accusationDraft.step === 3) {
    renderAccusationMotiveStep(body, c);
  } else {
    renderAccusationConfirmStep(body, c);
  }

  renderAccusationNav();
}

function renderAccusationSuspectStep(body, c) {
  const suspects = c.suspects || [];
  const cards = suspects.map((s) => {
    const personalityLabel = typeof s.personality === "string"
      ? t("personality_" + s.personality)
      : (s.personality ? s.personality[currentLang] : "");
    return `
      <button type="button" class="accusation-suspect-card ${accusationDraft.suspectId === s.id ? "selected" : ""}" data-suspect="${s.id}">
        <span class="accusation-suspect-name">${s.name[currentLang]}</span>
        <span class="accusation-suspect-job">${s.job[currentLang]}</span>
        <span class="accusation-suspect-tag">${personalityLabel}</span>
      </button>
    `;
  }).join("");

  body.innerHTML = `
    <h3 class="accusation-prompt">${t("chooseSuspectPrompt")}</h3>
    <div class="accusation-suspect-grid">${cards}</div>
  `;

  body.querySelectorAll("[data-suspect]").forEach((btn) => {
    btn.addEventListener("click", () => {
      accusationDraft.suspectId = btn.getAttribute("data-suspect");
      renderAccusation();
    });
  });
}

function renderAccusationEvidenceStep(body, c) {
  const collected = gameState.clues || [];

  if (!collected.length) {
    body.innerHTML = `
      <h3 class="accusation-prompt">${t("chooseEvidencePrompt")}</h3>
      <p class="accusation-empty">${t("noCluesCollectedAccusation")}</p>
      <p class="accusation-counter">${tf("evidenceSelectedCount", {
        count: accusationDraft.clueIds.length,
        max: RULES.accusation.maxSelectedClues
      })}</p>
    `;
    return;
  }

  const cards = collected.map((clue) => {
    const isSelected = accusationDraft.clueIds.includes(clue.id);
    const importanceLabel = t("importance_" + clue.importance) || clue.importance;
    return `
      <button type="button" class="accusation-clue-card ${isSelected ? "selected" : ""}" data-clue="${clue.id}">
        <span class="accusation-clue-head">
          <span class="accusation-clue-name">${clue.name[currentLang]}</span>
          <span class="accusation-clue-check">${isSelected ? "✓" : ""}</span>
        </span>
        <span class="accusation-clue-meta">${t("type_" + clue.type) || clue.type} · ${importanceLabel}</span>
        <span class="accusation-clue-desc">${clue.desc[currentLang]}</span>
      </button>
    `;
  }).join("");

  body.innerHTML = `
    <h3 class="accusation-prompt">${t("chooseEvidencePrompt")}</h3>
    <p class="accusation-counter">${tf("evidenceSelectedCount", {
      count: accusationDraft.clueIds.length,
      max: RULES.accusation.maxSelectedClues
    })}</p>
    <div class="accusation-clue-grid">${cards}</div>
  `;

  body.querySelectorAll("[data-clue]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const clueId = btn.getAttribute("data-clue");
      const existingIndex = accusationDraft.clueIds.indexOf(clueId);
      if (existingIndex >= 0) {
        accusationDraft.clueIds.splice(existingIndex, 1);
      } else if (accusationDraft.clueIds.length >= RULES.accusation.maxSelectedClues) {
        showToast(t("accusationMaxClues"));
        return;
      } else {
        accusationDraft.clueIds.push(clueId);
      }
      renderAccusation();
    });
  });
}

function renderAccusationMotiveStep(body, c) {
  const options = c.motiveOptions && Array.isArray(c.motiveOptions.options)
    ? c.motiveOptions.options
    : [];

  const cards = options.map((option) => `
    <button type="button" class="accusation-motive-card ${accusationDraft.motiveId === option.id ? "selected" : ""}" data-motive="${option.id}">
      <span class="accusation-motive-icon">⚖️</span>
      <span class="accusation-motive-text">${option.text[currentLang]}</span>
    </button>
  `).join("");

  body.innerHTML = `
    <h3 class="accusation-prompt">${t("chooseMotivePrompt")}</h3>
    <div class="accusation-motive-list">${cards}</div>
  `;

  body.querySelectorAll("[data-motive]").forEach((btn) => {
    btn.addEventListener("click", () => {
      accusationDraft.motiveId = btn.getAttribute("data-motive");
      renderAccusation();
    });
  });
}

function renderAccusationConfirmStep(body, c) {
  const accused = (c.suspects || []).find((s) => s.id === accusationDraft.suspectId);
  const selectedClues = (gameState.clues || []).filter((clue) => accusationDraft.clueIds.includes(clue.id));
  const motiveOptions = c.motiveOptions && Array.isArray(c.motiveOptions.options)
    ? c.motiveOptions.options
    : [];
  const motive = motiveOptions.find((option) => option.id === accusationDraft.motiveId);

  const evidenceHtml = selectedClues.length
    ? `<div class="accusation-evidence-chips">${selectedClues.map((clue) =>
        `<span class="accusation-chip">${clue.name[currentLang]}</span>`
      ).join("")}</div>`
    : `<span class="accusation-summary-value muted">${t("evidenceNoneSelected")}</span>`;

  body.innerHTML = `
    <h3 class="accusation-prompt">${t("accusationConfirmPrompt")}</h3>
    <div class="accusation-summary">
      <div class="accusation-summary-row">
        <span class="accusation-summary-label">${t("suspectLabel")}</span>
        <span class="accusation-summary-value">${accused ? accused.name[currentLang] : "-"}</span>
      </div>
      <div class="accusation-summary-row">
        <span class="accusation-summary-label">${t("evidenceLabel")}</span>
        ${evidenceHtml}
      </div>
      <div class="accusation-summary-row">
        <span class="accusation-summary-label">${t("motiveLabel")}</span>
        <span class="accusation-summary-value ${motive ? "" : "muted"}">${motive ? motive.text[currentLang] : t("noMotiveSelected")}</span>
      </div>
    </div>
    <div class="accusation-warning">⚠️ ${t("accusationWarning")}</div>
  `;
}

function renderAccusationNav() {
  const prev = document.getElementById("btn-accusation-prev");
  const next = document.getElementById("btn-accusation-next");
  if (!prev || !next) return;

  prev.textContent = t("previousStep");
  next.textContent = accusationDraft.step === 4 ? t("confirmAccusation") : t("nextStep");

  prev.style.visibility = accusationDraft.step === 1 ? "hidden" : "visible";
  prev.classList.remove("btn-danger");
  prev.classList.add("btn-secondary");

  if (accusationDraft.step === 4) {
    next.classList.remove("btn-primary");
    next.classList.add("btn-danger");
  } else {
    next.classList.remove("btn-danger");
    next.classList.add("btn-primary");
  }

  next.disabled = !accusationCanProceed();
}

function handleAccusationPrev() {
  if (accusationDraft.step <= 1) return;
  accusationDraft.step -= 1;
  renderAccusation();
}

function handleAccusationNext() {
  if (!accusationCanProceed()) return;
  if (accusationDraft.step < 4) {
    accusationDraft.step += 1;
    renderAccusation();
    return;
  }
  confirmAccusation();
}

function confirmAccusation() {
  const c = gameState.currentCase;
  if (!c) return;
  // Guard against a double click applying the same case progression twice.
  if (gameState.currentScreen !== "accusation") return;

  const evaluation = evaluateAccusation(c, accusationDraft, gameState.investigationScore || 0);
  const result = {
    caseId: c.id,
    stars: evaluation.stars,
    outcome: evaluation.outcome,
    date: new Date().toISOString()
  };

  // Only a result better than the player's previous best adds progression.
  const previousBest = getBestCaseStars(c.id);
  const stars = Math.max(0, Math.min(3, Number(result.stars) || 0));
  const improved = previousBest === null || stars > previousBest;

  if (!Array.isArray(gameState.caseResults)) gameState.caseResults = [];
  gameState.caseResults.push(result);
  gameState.lastAccusation = {
    caseId: c.id,
    suspectId: accusationDraft.suspectId,
    clueIds: accusationDraft.clueIds.slice(),
    motiveId: accusationDraft.motiveId
  };
  gameState.caseCompleted = true;
  gameState.lastCaseScreen = null;

  const progression = improved
    ? applyCaseResultToPlayer(Object.assign({}, result, {
        stars: previousBest === null ? stars : stars - previousBest
      }))
    : {
        type: "replay",
        stars: stars,
        fromIndex: getPlayerRankIndex(),
        toIndex: getPlayerRankIndex()
      };

  if (progression) {
    // The case-end screen always shows the stars earned in this run.
    progression.stars = stars;
    progression.caseId = c.id;
    progression.date = result.date;
    gameState.lastProgression = progression;
  }
  const previousBestStars = previousBest === null ? 0 : previousBest;
  if (improved) {
    for (let star = previousBestStars + 1; star <= stars; star++) {
      awardPlayerXp(30, `case:${c.id}:star:${star}`);
    }
  }
  saveState();

  if (typeof playSfx === "function") {
    if (progression && progression.type === "promotion") {
      playSfx("promotion");
    } else if ((Number(result.stars) || 0) === 0) {
      playSfx("wrong");
    }
  }

  renderCaseEnd(result);
  if (progression && progression.type === "promotion") {
    renderPromotion();
    showScreen("promotion");
  } else if (areAllCasesCompleted()) {
    renderGameComplete();
    showScreen("gameComplete");
  } else {
    showScreen("caseEnd");
  }
  showToast(t("accusationRecorded"));
}

function getLatestCaseResult(caseId) {
  const results = Array.isArray(gameState.caseResults) ? gameState.caseResults : [];
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i] && results[i].caseId === caseId) return results[i];
  }
  return null;
}

function fillEndingTemplate(text) {
  const c = gameState.currentCase;
  if (!c) return text || "";
  const last = gameState.lastAccusation || {};
  const accused = (c.suspects || []).find((s) => s.id === last.suspectId);
  const killer = (c.suspects || []).find((s) => s.id === c.killerId);

  return String(text || "")
    .split("{suspect}").join(accused ? accused.name[currentLang] : "")
    .split("{secret}").join(accused && accused.secret ? accused.secret[currentLang] : "")
    .split("{killer}").join(killer ? killer.name[currentLang] : "");
}

function renderCaseEnd(result) {
  const c = gameState.currentCase;
  if (!c || !result) return;

  const ending = c.endings && c.endings[result.outcome] ? c.endings[result.outcome] : null;
  const titleEl = document.getElementById("case-end-title");
  const narrativeEl = document.getElementById("case-end-narrative");
  const starsEl = document.getElementById("case-end-stars");
  const summaryEl = document.getElementById("case-end-summary");

  const stars = Math.max(0, Math.min(3, Number(result.stars) || 0));
  if (starsEl) {
    starsEl.innerHTML = [0, 1, 2].map((index) =>
      `<span class="case-star ${index < stars ? "earned" : ""}" style="animation-delay:${(index * 0.22).toFixed(2)}s;">★</span>`
    ).join("");
    starsEl.setAttribute("aria-label", tf("starsEarned", { stars }));
  }

  if (titleEl) {
    titleEl.textContent = ending ? ending.title[currentLang] : t("outcome_" + result.outcome);
  }
  if (narrativeEl) {
    narrativeEl.textContent = ending ? fillEndingTemplate(ending.text[currentLang]) : "";
  }

  if (summaryEl) {
    const caseClues = c.clues || [];
    const collectedIds = (gameState.clues || []).map((clue) => clue.id);
    const found = caseClues.filter((clue) => collectedIds.includes(clue.id)).length;
    const good = (gameState.decisions || []).filter((d) => d.result === "good").length;
    const bad = (gameState.decisions || []).filter((d) => d.result === "bad").length;
    const outcomeLabel = t("outcome_" + result.outcome);

    summaryEl.innerHTML = `
      <h4>${t("caseEndSummaryTitle")}</h4>
      <p class="case-end-stars-earned">${tf("starsEarned", { stars })}</p>
      <ul class="case-end-list">
        <li>${tf("cluesFoundSummary", { found, total: caseClues.length })}</li>
        <li>${tf("goodDecisionsSummary", { count: good })}</li>
        <li>${tf("badDecisionsSummary", { count: bad })}</li>
        <li>${tf("accusationOutcomeSummary", { outcome: outcomeLabel })}</li>
      </ul>
    `;
  }

  renderCaseEndPlayer(result);
}

function hasActiveCase() {
  return !!(gameState.currentCase && !gameState.caseCompleted);
}

function getUnlockedCases() {
  const list = Array.isArray(CASES) ? CASES.filter(Boolean) : [];
  if (areAllCasesCompleted()) return list;
  const unlocked = [];
  for (let index = 0; index < list.length; index++) {
    if (index > 0 && (getBestCaseStars(list[index - 1].id) || 0) < 1) break;
    unlocked.push(list[index]);
  }
  return unlocked;
}

function renderCaseSelection() {
  const container = document.getElementById("case-selection-list");
  if (!container) return;
  container.replaceChildren();

  const unlockedIds = new Set(getUnlockedCases().map((caseObj) => caseObj.id));
  const list = Array.isArray(CASES) ? CASES.filter(Boolean) : [];
  list.forEach((caseObj, index) => {
    const isUnlocked = unlockedIds.has(caseObj.id);
    const bestStars = getBestCaseStars(caseObj.id) || 0;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "case-select-card";
    card.disabled = !isUnlocked;

    const title = document.createElement("span");
    title.className = "case-select-title";
    title.textContent = caseObj.title && caseObj.title[currentLang]
      ? caseObj.title[currentLang]
      : caseObj.id;

    const difficulty = document.createElement("span");
    difficulty.className = "case-select-difficulty";
    difficulty.textContent = tf("caseDifficulty", { level: index + 1 });

    const stars = document.createElement("span");
    stars.className = "case-select-stars";
    stars.setAttribute("aria-label", tf("starsEarned", { stars: bestStars }));
    stars.textContent = [0, 1, 2].map((star) => star < bestStars ? "★" : "☆").join(" ");

    const status = document.createElement("span");
    status.className = "case-select-status";
    status.textContent = t(isUnlocked ? "caseAvailable" : "caseLocked");

    card.append(title, difficulty, stars, status);
    if (isUnlocked) {
      card.addEventListener("click", () => startSelectedCase(caseObj));
    }
    container.appendChild(card);
  });
}

function updateHomeCaseControls() {
  const active = hasActiveCase();

  const homeContinue = document.getElementById("btn-continue");
  if (homeContinue) {
    homeContinue.style.display = active ? "inline-flex" : "none";
    homeContinue.setAttribute("aria-hidden", active ? "false" : "true");
    homeContinue.tabIndex = active ? 0 : -1;
  }

  const homeReset = document.getElementById("btn-reset-case-home");
  if (homeReset) {
    homeReset.style.display = active ? "inline-flex" : "none";
    homeReset.tabIndex = active ? 0 : -1;
  }

  const settingsSection = document.getElementById("settings-case-section");
  if (settingsSection) settingsSection.style.display = active ? "" : "none";

  const settingsReset = document.getElementById("btn-reset-case-settings");
  if (settingsReset) settingsReset.disabled = !active;
}

function startCaseFromHome() {
  if (!gameState.player) {
    openPlayerSetup(false);
    return;
  }

  renderCaseSelection();
  showScreen("caseSelect");
}

function startRandomCase() {
  const unlocked = getUnlockedCases();
  if (!unlocked.length) {
    showToast(t("noMoreCases"));
    return;
  }
  const selected = unlocked[Math.floor(Math.random() * unlocked.length)];
  startSelectedCase(selected);
}

function startSelectedCase(target) {
  if (!target || !getUnlockedCases().some((caseObj) => caseObj.id === target.id)) {
    showToast(t("caseLocked"));
    return;
  }

  const begin = () => {
    crimeSceneSirenCaseId = null;
    resetCaseProgress();
    resetAccusationDraft();
    gameState.currentCase = target;
    gameState.caseCompleted = false;
    gameState.lastCaseScreen = null;
    saveState();
    if (typeof playPoliceSiren === "function") playPoliceSiren();
    renderIntro();
    showScreen("intro");
    updateHomeCaseControls();
  };

  if (hasActiveCase()) {
    openConfirmDialog({
      titleKey: "confirmTitle",
      messageKey: "startCaseWarning",
      confirmKey: "startCaseConfirmAction",
      danger: true
    }).then((confirmed) => {
      if (confirmed) begin();
    });
    return;
  }

  begin();
}

function resumeCase() {
  if (!hasActiveCase()) {
    updateHomeCaseControls();
    return;
  }
  const c = gameState.currentCase;
  if (!c) return;

  const screen = gameState.lastCaseScreen || "intro";
  const validInterrogation = screen === "interrogation" && gameState.activeSuspectId &&
    (c.suspects || []).some((suspect) => suspect.id === gameState.activeSuspectId);
  if (screen === "crimeScene") crimeSceneSirenCaseId = c.id;
  if (screen !== "interrogation" || !validInterrogation) {
    if (typeof playPoliceSiren === "function") playPoliceSiren();
  }
  if (typeof renderIntro === "function") renderIntro();
  if (typeof renderSuspects === "function") renderSuspects();
  if (typeof renderCrimeScene === "function") renderCrimeScene();

  if (screen === "accusation") {
    openAccusation();
    return;
  }
  if (screen === "interrogation") {
    if (validInterrogation) {
      renderInterrogation(gameState.activeSuspectId);
      showScreen("interrogation");
    } else {
      showScreen("suspects");
    }
    return;
  }
  if (screen === "crimeScene") {
    showScreen("crimeScene");
    return;
  }
  if (screen === "suspects") {
    showScreen("suspects");
    return;
  }
  showScreen("intro");
}

/* ===== Confirmation dialog and current-case reset ===== */

let confirmDialogOptions = null;
let confirmDialogResolver = null;
let confirmDialogReturnFocus = null;

function refreshConfirmDialogText() {
  const modal = document.getElementById("confirm-modal");
  if (!modal || !confirmDialogOptions) return;
  const options = confirmDialogOptions;

  const titleEl = document.getElementById("confirm-title");
  const messageEl = document.getElementById("confirm-message");
  const okBtn = document.getElementById("btn-confirm-ok");
  const cancelBtn = document.getElementById("btn-confirm-cancel");

  if (titleEl) titleEl.textContent = t(options.titleKey || "confirmTitle");
  if (messageEl) messageEl.textContent = t(options.messageKey || "");
  if (okBtn) {
    okBtn.textContent = t(options.confirmKey || "confirmAction");
    okBtn.classList.toggle("btn-danger", !!options.danger);
    okBtn.classList.toggle("btn-primary", !options.danger);
  }
  if (cancelBtn) cancelBtn.textContent = t("cancel");
}

function openConfirmDialog(options) {
  const modal = document.getElementById("confirm-modal");
  if (!modal) return Promise.resolve(false);

  return new Promise((resolve) => {
    if (confirmDialogResolver) {
      const previous = confirmDialogResolver;
      confirmDialogResolver = null;
      previous(false);
    }
    confirmDialogOptions = options || {};
    confirmDialogResolver = resolve;
    confirmDialogReturnFocus = document.activeElement;
    refreshConfirmDialogText();
    modal.classList.remove("hidden");
    document.body.classList.add("confirm-open");
    const okBtn = document.getElementById("btn-confirm-ok");
    if (okBtn) okBtn.focus();
  });
}

function closeConfirmDialog(value) {
  const modal = document.getElementById("confirm-modal");
  if (!modal || modal.classList.contains("hidden")) return;

  modal.classList.add("hidden");
  document.body.classList.remove("confirm-open");
  confirmDialogOptions = null;

  const resolver = confirmDialogResolver;
  confirmDialogResolver = null;
  if (resolver) resolver(!!value);

  const returnFocus = confirmDialogReturnFocus;
  confirmDialogReturnFocus = null;
  if (returnFocus && typeof returnFocus.focus === "function") returnFocus.focus();
}

function closeSettingsIfOpen() {
  const panel = document.getElementById("settings-panel");
  if (!panel || panel.classList.contains("hidden")) return;
  panel.classList.add("hidden");
  const backdrop = document.getElementById("settings-backdrop");
  if (backdrop) backdrop.classList.add("hidden");
  document.body.classList.remove("settings-open");
}

function resetCurrentCase() {
  const c = gameState.currentCase;
  if (!c) return false;

  crimeSceneSirenCaseId = null;
  resetCaseProgress();
  gameState.currentCase = c;
  gameState.caseCompleted = false;
  gameState.lastCaseScreen = null;
  resetAccusationDraft();
  closeSettingsIfOpen();
  saveState();
  updateHomeCaseControls();
  showToast(t("resetCaseDone"));
  showScreen("home");
  return true;
}

function requestCaseReset() {
  if (!hasActiveCase()) {
    updateHomeCaseControls();
    return Promise.resolve(false);
  }

  return openConfirmDialog({
    titleKey: "resetCaseConfirmTitle",
    messageKey: "resetCaseConfirm1",
    confirmKey: "resetCaseConfirmAction",
    danger: true
  }).then((first) => {
    if (!first) return false;
    return openConfirmDialog({
      titleKey: "resetCaseConfirmTitle",
      messageKey: "resetCaseConfirm2",
      confirmKey: "resetCaseConfirmFinal",
      danger: true
    });
  }).then((second) => {
    if (!second) return false;
    resetCurrentCase();
    return true;
  });
}

// The best result per case is the only one that adds stars. Replays that do not
// beat it keep the previous progress untouched.
function getBestCaseStars(caseId) {
  let best = null;
  const results = Array.isArray(gameState.caseResults) ? gameState.caseResults : [];
  results.forEach((result) => {
    if (!result || result.caseId !== caseId) return;
    const stars = Math.max(0, Math.min(3, Number(result.stars) || 0));
    best = best === null ? stars : Math.max(best, stars);
  });
  return best;
}

function areAllCasesCompleted() {
  const list = Array.isArray(CASES) ? CASES.filter(Boolean) : [];
  return list.length > 0 && list.every((caseObj) => getBestCaseStars(caseObj.id) !== null);
}

function getBestTotalStars() {
  const list = Array.isArray(CASES) ? CASES.filter(Boolean) : [];
  return list.reduce((total, caseObj) => total + (getBestCaseStars(caseObj.id) || 0), 0);
}

function renderGameComplete() {
  const list = Array.isArray(CASES) ? CASES.filter(Boolean) : [];
  const rank = document.getElementById("game-complete-rank");
  const stars = document.getElementById("game-complete-stars");
  const cases = document.getElementById("game-complete-cases");

  if (rank) rank.textContent = getRankName(getPlayerRankIndex());
  if (stars) {
    stars.textContent = tf("gameCompleteStarsCount", {
      stars: getBestTotalStars(),
      total: list.length * 3
    });
  }
  if (cases) {
    cases.textContent = tf("gameCompleteCasesCount", {
      completed: list.filter((caseObj) => getBestCaseStars(caseObj.id) !== null).length,
      total: list.length
    });
  }
}

function startNewCase() {
  renderCaseSelection();
  showScreen("caseSelect");
}

function replayCase() {
  const c = gameState.currentCase;
  if (!c) return;
  crimeSceneSirenCaseId = null;
  resetCaseProgress();
  resetAccusationDraft();
  gameState.currentCase = c;
  saveState();
  renderIntro();
  showScreen("intro");
}

/* ===== Part 7: Detective Profile, Character Designer and Ranks ===== */

const PLAYER_SKIN_TONES = ["#f6d7bd", "#eac29b", "#d8a273", "#b98054", "#8b5a37"];
const PLAYER_HAIR_COLORS = ["#1b1a19", "#3a2a20", "#6b4423", "#a45a2a", "#d8c08a"];
const PLAYER_HIJAB_COLORS = ["#2f6f92", "#a34a6a", "#3f7a52", "#6b4f8f", "#b8862f"];
const PLAYER_BEARD_OPTIONS = ["none", "light", "full", "goatee"];
const PLAYER_OUTFIT_KEYS = ["suit", "coat", "police", "casual"];

let designerDraft = createDefaultPlayerDraft("");
let designerIsNewProfile = false;
let designerInitialDraft = null;

function createDefaultPlayerDraft(name) {
  return {
    name: name || "",
    gender: "male",
    skin: 0,
    hair: 0,
    hairColor: 0,
    hijab: null,
    beard: "none",
    outfit: 0
  };
}

function clampPlayerIndex(value, size) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 0 && number < size ? number : 0;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getPlayerHairBackSvg(hair, hairColor, isFemale) {
  if (!isFemale) return "";

  if (hair === 1) {
    return `<path d="M81 52 C101 56 106 82 94 104 C99 82 92 62 79 59 Z" fill="${hairColor}"/>`;
  }
  if (hair === 2) {
    return `<circle cx="60" cy="27" r="11" fill="${hairColor}"/>`;
  }
  if (hair === 3) {
    return `<path d="M31 60 C30 30 45 23 60 23 C75 23 90 30 89 60 L92 82 C88 78 90 70 84 66 L86 94 C80 90 82 80 76 74 L77 104 C70 100 68 92 64 84 L56 84 C52 92 50 100 43 104 L44 74 C38 80 40 90 34 94 L36 66 C30 70 32 78 28 82 Z" fill="${hairColor}"/>`;
  }
  return `<path d="M31 60 C30 30 45 23 60 23 C75 23 90 30 89 60 L91 104 C84 100 78 92 77 80 L76 56 C72 46 64 42 60 42 C56 42 48 46 44 56 L43 80 C42 92 36 100 29 104 Z" fill="${hairColor}"/>`;
}

function getPlayerHairFrontSvg(hair, hairColor, isFemale) {
  if (isFemale) {
    if (hair === 0) {
      return `<path d="M36 60 C35 36 46 28 60 28 C74 28 85 36 84 60 C80 46 72 41 60 41 C48 41 40 46 36 60 Z" fill="${hairColor}"/>
        <path d="M36 58 C35 72 37 84 41 92 L45 90 C41 80 41 68 41 58 Z" fill="${hairColor}"/>
        <path d="M84 58 C85 72 83 84 79 92 L75 90 C79 80 79 68 79 58 Z" fill="${hairColor}"/>`;
    }
    if (hair === 1) {
      return `<path d="M36 60 C35 36 48 28 62 30 C76 32 85 42 84 60 C77 47 66 43 57 47 C50 50 42 52 36 60 Z" fill="${hairColor}"/>`;
    }
    if (hair === 2) {
      return `<path d="M37 58 C37 38 47 31 60 31 C73 31 83 38 83 58 C78 46 70 42 60 42 C50 42 42 46 37 58 Z" fill="${hairColor}"/>`;
    }
    return `<path d="M36 60 C35 36 46 27 60 27 C74 27 85 36 84 60 C80 49 74 46 68 48 C62 50 58 46 52 47 C46 48 40 52 36 60 Z" fill="${hairColor}"/>`;
  }

  if (hair === 1) {
    return `<path d="M36 62 C34 37 47 28 61 30 C76 32 86 42 84 60 C79 48 72 46 62 47 C52 48 42 52 36 62 Z" fill="${hairColor}"/>`;
  }
  if (hair === 2) {
    return `<path d="M38 58 C36 40 46 33 60 33 C74 33 84 40 82 58 C78 48 70 43 60 43 C50 43 42 48 38 58 Z" fill="${hairColor}"/>`;
  }
  if (hair === 3) {
    return `<path d="M36 62 C34 38 45 30 60 30 C75 30 86 38 84 62 C80 47 72 42 60 42 C48 42 40 47 36 62 Z" fill="${hairColor}"/>
      <path d="M42 45 C52 37 70 37 79 46" stroke="rgba(255,255,255,0.18)" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <path d="M44 39 C55 34 68 34 77 40" stroke="rgba(255,255,255,0.12)" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;
  }
  return `<path d="M36 62 C34 38 45 30 60 30 C75 30 86 38 84 62 C80 47 72 42 60 42 C48 42 40 47 36 62 Z" fill="${hairColor}"/>`;
}

function getPlayerFaceSvg(isFemale, hairColor) {
  const browWidth = isFemale ? 1.9 : 2.1;
  const lashes = isFemale
    ? `<path d="M47.5 60.5 L45 58.5 M72.5 60.5 L75 58.5" stroke="#2b2420" stroke-width="1.2" stroke-linecap="round"/>`
    : "";
  const blush = isFemale
    ? `<circle cx="45" cy="72" r="4.2" fill="#d97b74" opacity="0.16"/><circle cx="75" cy="72" r="4.2" fill="#d97b74" opacity="0.16"/>`
    : "";
  const mouth = isFemale
    ? `<path d="M53.5 79 Q60 75.8 66.5 79 Q60 84.2 53.5 79 Z" fill="#b86066" opacity="0.88"/>`
    : `<path d="M54 79 Q60 83 66 79" stroke="#a4555a" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;

  return `${blush}
    <path d="M45.5 55.5 Q51 52 56.5 55" stroke="${hairColor}" stroke-width="${browWidth}" fill="none" stroke-linecap="round"/>
    <path d="M63.5 55 Q69 52 74.5 55.5" stroke="${hairColor}" stroke-width="${browWidth}" fill="none" stroke-linecap="round"/>
    <ellipse cx="51.5" cy="63" rx="3.6" ry="3.2" fill="#f7f2ea"/>
    <circle cx="51.8" cy="63.4" r="2" fill="#2b2420"/>
    <circle cx="52.4" cy="62.6" r="0.7" fill="#ffffff"/>
    <ellipse cx="68.5" cy="63" rx="3.6" ry="3.2" fill="#f7f2ea"/>
    <circle cx="68.8" cy="63.4" r="2" fill="#2b2420"/>
    <circle cx="69.4" cy="62.6" r="0.7" fill="#ffffff"/>
    ${lashes}
    <path d="M60 63 C58.5 68 58.5 70 61 70" stroke="rgba(60,30,20,0.28)" stroke-width="1.4" fill="none" stroke-linecap="round"/>
    ${mouth}`;
}

function getPlayerBeardSvg(beard, hairColor) {
  if (beard === "light") {
    return `<path d="M41 72 C41 90 49 98 60 98 C71 98 79 90 79 72 C76 82 70 86 60 86 C50 86 44 82 41 72 Z" fill="${hairColor}" opacity="0.24"/>
      <path d="M49 74 Q54.5 70.5 60 74 Q65.5 70.5 71 74 Q65.5 77.5 60 76 Q54.5 77.5 49 74 Z" fill="${hairColor}" opacity="0.62"/>`;
  }
  if (beard === "full") {
    return `<path d="M40 70 C39 92 48 101 60 101 C72 101 81 92 80 70 C77 83 70 87 60 87 C50 87 43 83 40 70 Z" fill="${hairColor}"/>
      <path d="M49 74 Q54.5 70.5 60 74 Q65.5 70.5 71 74 Q65.5 77.5 60 76 Q54.5 77.5 49 74 Z" fill="${hairColor}"/>`;
  }
  if (beard === "goatee") {
    return `<path d="M52 86 Q60 82 68 86 L66 96 Q60 100 54 96 Z" fill="${hairColor}"/>
      <path d="M49 74 Q54.5 70.5 60 74 Q65.5 70.5 71 74 Q65.5 77.5 60 76 Q54.5 77.5 49 74 Z" fill="${hairColor}"/>`;
  }
  return "";
}

function getPlayerOutfitSvg(outfit, isFemale) {
  const left = isFemale ? 32 : 27;
  const right = isFemale ? 88 : 93;
  const bodyStart = `M${left} 140 C${left} 118 ${left + 14} 108 60 108 C${right - 14} 108 ${right} 118 ${right} 140 Z`;

  if (outfit === 1) {
    return `<path d="${bodyStart}" fill="#5a4534"/>
      <path d="M${left + 8} 112 L60 130 L52 110 Z" fill="#6b5540"/>
      <path d="M${right - 8} 112 L60 130 L68 110 Z" fill="#6b5540"/>
      <path d="M54 108 L60 118 L66 108" fill="none" stroke="#3e2f22" stroke-width="2"/>
      <rect x="${left + 6}" y="130" width="${right - left - 12}" height="6" rx="3" fill="#3e2f22"/>
      <circle cx="60" cy="122" r="1.8" fill="#d4a017"/>
      <circle cx="60" cy="132" r="1.8" fill="#d4a017"/>`;
  }
  if (outfit === 2) {
    return `<path d="${bodyStart}" fill="#233a66"/>
      <path d="M52 108 L60 120 L68 108 L64 106 L60 112 L56 106 Z" fill="#dbe4f0"/>
      <path d="M58.5 112 L61.5 112 L62.5 126 L60 130 L57.5 126 Z" fill="#0e1c33"/>
      <path d="M42 110 L54 108" stroke="#6f8fc4" stroke-width="3" stroke-linecap="round"/>
      <path d="M78 110 L66 108" stroke="#6f8fc4" stroke-width="3" stroke-linecap="round"/>
      <polygon points="46,118 47.8,122 52,122 48.6,124.6 49.8,129 46,126.4 42.2,129 43.4,124.6 40,122 44.2,122" fill="#d4a017"/>`;
  }
  if (outfit === 3) {
    return `<path d="${bodyStart}" fill="#2f6f6a"/>
      <path d="M50 108 Q60 120 70 108 Q66 106 60 112 Q54 106 50 108 Z" fill="#245a56"/>
      <path d="M60 113 L60 140" stroke="#1d4b47" stroke-width="2"/>
      <path d="M56 112 L54 122 M64 112 L66 122" stroke="#cfe3df" stroke-width="1.6" stroke-linecap="round"/>`;
  }

  const tie = isFemale
    ? `<circle cx="60" cy="117" r="2" fill="#d4a017"/><path d="M60 119 L60 124" stroke="#d4a017" stroke-width="1.4"/>`
    : `<path d="M58.5 113 L61.5 113 L62.5 127 L60 131 L57.5 127 Z" fill="#8f2f3f"/>`;
  return `<path d="${bodyStart}" fill="#232a38"/>
    <path d="M52 108 L60 123 L68 108 L64 106 L60 113 L56 106 Z" fill="#e6e6ea"/>
    <path d="M42 108 L60 126 L51 108 Z" fill="#2d3547"/>
    <path d="M78 108 L60 126 L69 108 Z" fill="#2d3547"/>
    ${tie}`;
}

// Draws the detective portrait using only inline SVG shapes. It is reused by
// the live designer, the home/tablet rank cards and the promotion screen.
function getPlayerAvatarSvg(player, size) {
  const p = player || createDefaultPlayerDraft("");
  const isFemale = p.gender === "female";
  const skin = PLAYER_SKIN_TONES[clampPlayerIndex(p.skin, PLAYER_SKIN_TONES.length)];
  const hairIndex = clampPlayerIndex(p.hair, 4);
  const hairColor = PLAYER_HAIR_COLORS[clampPlayerIndex(p.hairColor, PLAYER_HAIR_COLORS.length)];
  const outfit = clampPlayerIndex(p.outfit, 4);
  const hijabIndex = isFemale && p.hijab !== null && p.hijab !== undefined
    ? clampPlayerIndex(p.hijab, PLAYER_HIJAB_COLORS.length)
    : null;
  const beard = !isFemale && PLAYER_BEARD_OPTIONS.includes(p.beard) ? p.beard : "none";
  const avatarSize = size || "small";

  const parts = [];
  parts.push(`<rect x="0" y="0" width="120" height="140" rx="18" fill="#151821"/>`);
  parts.push(`<circle cx="60" cy="66" r="47" fill="#1e232f" stroke="rgba(212,160,23,0.22)" stroke-width="2"/>`);

  if (hijabIndex === null) {
    parts.push(getPlayerHairBackSvg(hairIndex, hairColor, isFemale));
  }
  parts.push(getPlayerOutfitSvg(outfit, isFemale));

  if (hijabIndex !== null) {
    const hijabColor = PLAYER_HIJAB_COLORS[hijabIndex];
    parts.push(`<path d="M29 64 C29 34 43 22 60 22 C77 22 91 34 91 64 L91 98 C83 109 70 112 60 112 C50 112 37 109 29 98 Z" fill="${hijabColor}"/>`);
    parts.push(`<path d="M29 64 C29 34 43 22 60 22 C77 22 91 34 91 64" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>`);
    parts.push(`<ellipse cx="60" cy="64" rx="20" ry="24" fill="${skin}"/>`);
    parts.push(getPlayerFaceSvg(isFemale, hairColor));
  } else {
    parts.push(`<rect x="${isFemale ? 54 : 53}" y="84" width="${isFemale ? 12 : 14}" height="28" rx="6" fill="${skin}"/>`);
    parts.push(`<rect x="${isFemale ? 54 : 53}" y="84" width="${isFemale ? 12 : 14}" height="9" fill="rgba(0,0,0,0.09)"/>`);
    parts.push(`<ellipse cx="60" cy="62" rx="${isFemale ? 23 : 24}" ry="${isFemale ? 26 : 27}" fill="${skin}"/>`);
    parts.push(`<circle cx="36" cy="64" r="5" fill="${skin}"/>`);
    parts.push(`<circle cx="84" cy="64" r="5" fill="${skin}"/>`);
    parts.push(getPlayerHairFrontSvg(hairIndex, hairColor, isFemale));
    parts.push(getPlayerBeardSvg(beard, hairColor));
    parts.push(getPlayerFaceSvg(isFemale, hairColor));
  }

  return `<svg viewBox="0 0 120 140" class="player-avatar-svg player-avatar-${avatarSize}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${parts.join("")}</svg>`;
}

function renderNameScreen() {
  const input = document.getElementById("input-detective-name");
  if (input && !input.value) {
    input.value = designerDraft.name || (gameState.player ? gameState.player.name : "");
  }
}

function openPlayerSetup(isNewProfile) {
  designerIsNewProfile = !!isNewProfile;

  if (!isNewProfile && gameState.player) {
    const p = gameState.player;
    designerDraft = {
      name: p.name,
      gender: p.gender,
      skin: p.skin,
      hair: p.hair,
      hairColor: p.hairColor,
      hijab: p.hijab !== undefined ? p.hijab : null,
      beard: p.beard || "none",
      outfit: p.outfit
    };
  } else {
    designerDraft = createDefaultPlayerDraft("");
  }
  designerInitialDraft = Object.assign({}, designerDraft);

  const input = document.getElementById("input-detective-name");
  if (input) input.value = designerDraft.name;
  const error = document.getElementById("name-error");
  if (error) error.classList.add("hidden");

  showScreen("playerName");
  if (input) input.focus();
}

function isDesignerDraftDirty() {
  const input = document.getElementById("input-detective-name");
  const initial = designerInitialDraft || createDefaultPlayerDraft("");
  const currentName = input ? input.value.trim() : designerDraft.name;
  if (currentName !== initial.name) return true;

  const currentDesign = Object.assign({}, designerDraft, { name: initial.name });
  return JSON.stringify(currentDesign) !== JSON.stringify(initial);
}

function handleSetupBack() {
  if (!isDesignerDraftDirty()) {
    showScreen("home");
    return;
  }

  openConfirmDialog({
    messageKey: "setupExitWarning",
    confirmKey: "setupExitConfirm",
    danger: true
  }).then((confirmed) => {
    if (confirmed) showScreen("home");
  });
}

function handleNameNext() {
  const input = document.getElementById("input-detective-name");
  const error = document.getElementById("name-error");
  const name = input ? input.value.trim() : "";

  if (!name) {
    if (error) error.classList.remove("hidden");
    if (input) input.focus();
    return;
  }

  if (error) error.classList.add("hidden");
  designerDraft.name = name.slice(0, 24);
  renderDesigner();
  showScreen("characterDesign");
}

function handleDesignerBack() {
  const input = document.getElementById("input-detective-name");
  if (input) input.value = designerDraft.name;
  showScreen("playerName");
}

function renderDesignerGroup(title, options, field) {
  const buttons = options.map((option) => {
    const hasColor = typeof option.color === "string";
    const classes = ["designer-option"];
    if (hasColor) classes.push("designer-option-swatch");
    if (option.active) classes.push("selected");
    return `<button type="button" class="${classes.join(" ")}" data-designer-field="${field}" data-designer-value="${String(option.value)}" aria-pressed="${option.active ? "true" : "false"}">
      ${hasColor ? `<span class="designer-swatch" style="background:${option.color};"></span>` : ""}
      <span class="designer-option-label">${option.label}</span>
    </button>`;
  }).join("");

  return `<div class="designer-group">
    <h4 class="designer-group-title">${title}</h4>
    <div class="designer-options">${buttons}</div>
  </div>`;
}

function renderDesignerOptions() {
  const isFemale = designerDraft.gender === "female";
  const groups = [];

  groups.push(renderDesignerGroup(t("genderLabel"), [
    { value: "male", label: t("gender_male"), active: !isFemale },
    { value: "female", label: t("gender_female"), active: isFemale }
  ], "gender"));

  groups.push(renderDesignerGroup(t("skinLabel"), PLAYER_SKIN_TONES.map((color, index) => ({
    value: index,
    label: t("skin_" + index),
    color: color,
    active: designerDraft.skin === index
  })), "skin"));

  groups.push(renderDesignerGroup(t("hairLabel"), [0, 1, 2, 3].map((index) => ({
    value: index,
    label: t((isFemale ? "hair_female_" : "hair_male_") + index),
    active: designerDraft.hair === index
  })), "hair"));

  groups.push(renderDesignerGroup(t("hairColorLabel"), PLAYER_HAIR_COLORS.map((color, index) => ({
    value: index,
    label: t("hairColor_" + index),
    color: color,
    active: designerDraft.hairColor === index
  })), "hairColor"));

  if (isFemale) {
    const hijabOptions = [{
      value: "none",
      label: t("hijab_none"),
      active: designerDraft.hijab === null
    }];
    PLAYER_HIJAB_COLORS.forEach((color, index) => {
      hijabOptions.push({
        value: index,
        label: t("hijabColor_" + index),
        color: color,
        active: designerDraft.hijab === index
      });
    });
    groups.push(renderDesignerGroup(t("hijabLabel"), hijabOptions, "hijab"));
  } else {
    groups.push(renderDesignerGroup(t("beardLabel"), PLAYER_BEARD_OPTIONS.map((beard) => ({
      value: beard,
      label: t("beard_" + beard),
      active: designerDraft.beard === beard
    })), "beard"));
  }

  groups.push(renderDesignerGroup(t("outfitLabel"), PLAYER_OUTFIT_KEYS.map((key, index) => ({
    value: index,
    label: t("outfit_" + key),
    active: designerDraft.outfit === index
  })), "outfit"));

  return groups.join("");
}

function renderDesigner() {
  const preview = document.getElementById("designer-preview");
  if (!preview) return;

  designerDraft.skin = clampPlayerIndex(designerDraft.skin, PLAYER_SKIN_TONES.length);
  designerDraft.hair = clampPlayerIndex(designerDraft.hair, 4);
  designerDraft.hairColor = clampPlayerIndex(designerDraft.hairColor, PLAYER_HAIR_COLORS.length);
  designerDraft.outfit = clampPlayerIndex(designerDraft.outfit, 4);
  if (designerDraft.gender === "female") {
    designerDraft.beard = "none";
    if (designerDraft.hijab !== null) {
      designerDraft.hijab = clampPlayerIndex(designerDraft.hijab, PLAYER_HIJAB_COLORS.length);
    }
  } else {
    designerDraft.hijab = null;
    if (!PLAYER_BEARD_OPTIONS.includes(designerDraft.beard)) designerDraft.beard = "none";
  }

  preview.innerHTML = getPlayerAvatarSvg(designerDraft, "large");

  const nameEl = document.getElementById("designer-name");
  if (nameEl) nameEl.textContent = designerDraft.name;

  const controls = document.getElementById("designer-controls");
  if (controls) {
    controls.innerHTML = renderDesignerOptions();
    controls.querySelectorAll("[data-designer-field]").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyDesignerChoice(btn.getAttribute("data-designer-field"), btn.getAttribute("data-designer-value"));
      });
    });
  }
}

function applyDesignerChoice(field, value) {
  if (field === "gender") {
    designerDraft.gender = value === "female" ? "female" : "male";
    if (designerDraft.gender === "female") {
      designerDraft.beard = "none";
    } else {
      designerDraft.hijab = null;
    }
  } else if (field === "skin") {
    designerDraft.skin = clampPlayerIndex(value, PLAYER_SKIN_TONES.length);
  } else if (field === "hair") {
    designerDraft.hair = clampPlayerIndex(value, 4);
  } else if (field === "hairColor") {
    designerDraft.hairColor = clampPlayerIndex(value, PLAYER_HAIR_COLORS.length);
  } else if (field === "outfit") {
    designerDraft.outfit = clampPlayerIndex(value, 4);
  } else if (field === "beard") {
    designerDraft.beard = PLAYER_BEARD_OPTIONS.includes(value) ? value : "none";
  } else if (field === "hijab") {
    designerDraft.hijab = value === "none" ? null : clampPlayerIndex(value, PLAYER_HIJAB_COLORS.length);
  }

  renderDesigner();
}

function randomizeDesigner() {
  const gender = Math.random() < 0.5 ? "male" : "female";
  designerDraft.gender = gender;
  designerDraft.skin = Math.floor(Math.random() * PLAYER_SKIN_TONES.length);
  designerDraft.hair = Math.floor(Math.random() * 4);
  designerDraft.hairColor = Math.floor(Math.random() * PLAYER_HAIR_COLORS.length);
  designerDraft.outfit = Math.floor(Math.random() * 4);

  if (gender === "female") {
    designerDraft.beard = "none";
    designerDraft.hijab = Math.random() < 0.4
      ? Math.floor(Math.random() * PLAYER_HIJAB_COLORS.length)
      : null;
  } else {
    designerDraft.hijab = null;
    designerDraft.beard = PLAYER_BEARD_OPTIONS[Math.floor(Math.random() * PLAYER_BEARD_OPTIONS.length)];
  }

  renderDesigner();
}

function confirmDesigner() {
  const name = (designerDraft.name || "").trim();
  if (!name) {
    const input = document.getElementById("input-detective-name");
    if (input) input.value = "";
    showScreen("playerName");
    return;
  }

  const isFemale = designerDraft.gender === "female";
  const previousPlayer = !designerIsNewProfile ? gameState.player : null;
  gameState.player = {
    name: name.slice(0, 24),
    gender: isFemale ? "female" : "male",
    skin: clampPlayerIndex(designerDraft.skin, PLAYER_SKIN_TONES.length),
    hair: clampPlayerIndex(designerDraft.hair, 4),
    hairColor: clampPlayerIndex(designerDraft.hairColor, PLAYER_HAIR_COLORS.length),
    beard: isFemale ? "none" : (PLAYER_BEARD_OPTIONS.includes(designerDraft.beard) ? designerDraft.beard : "none"),
    outfit: clampPlayerIndex(designerDraft.outfit, 4),
    hijab: isFemale && designerDraft.hijab !== null
      ? clampPlayerIndex(designerDraft.hijab, PLAYER_HIJAB_COLORS.length)
      : null,
    xp: previousPlayer ? previousPlayer.xp : 0,
    skillPoints: previousPlayer ? previousPlayer.skillPoints : 0,
    skills: previousPlayer
      ? Object.assign(createDefaultPlayerSkillLevels(), previousPlayer.skills || {})
      : createDefaultPlayerSkillLevels(),
    xpAwards: previousPlayer && Array.isArray(previousPlayer.xpAwards)
      ? previousPlayer.xpAwards.slice()
      : []
  };

  if (designerIsNewProfile) {
    gameState.rankIndex = 0;
    gameState.starBalance = 0;
    gameState.totalStars = 0;
    gameState.failureStreak = 0;
    gameState.lastProgression = null;
  }

  saveState();
  renderHomeRankCard();
  renderTabletRankCard();
  showScreen("home");
  showToast(t("profileSaved"));
}

function getPlayerRankIndex() {
  return Math.max(0, Math.min(getMaxRankIndex(), Number(gameState.rankIndex) || 0));
}

// Applies one finished case to the detective's star balance and rank.
// Returns a description of what changed so the UI can show warnings/promotions.
function applyCaseResultToPlayer(result) {
  if (!gameState.player) return null;

  const stars = Math.max(0, Math.min(3, Number(result && result.stars) || 0));
  let progression = {
    type: "none",
    stars: stars,
    fromIndex: getPlayerRankIndex(),
    toIndex: getPlayerRankIndex()
  };

  if (stars === 0) {
    gameState.failureStreak = (gameState.failureStreak || 0) + 1;

    if (gameState.failureStreak >= 2) {
      const fromIndex = getPlayerRankIndex();
      if (fromIndex > 0) {
        gameState.rankIndex = fromIndex - 1;
        gameState.starBalance = 0;
        progression = { type: "demotion", stars: stars, fromIndex: fromIndex, toIndex: gameState.rankIndex };
      } else {
        progression = { type: "demotionFloor", stars: stars, fromIndex: fromIndex, toIndex: fromIndex };
      }
      gameState.failureStreak = 0;
    } else {
      progression = {
        type: "warning",
        stars: stars,
        fromIndex: getPlayerRankIndex(),
        toIndex: getPlayerRankIndex()
      };
    }
    return progression;
  }

  gameState.failureStreak = 0;
  gameState.starBalance = (gameState.starBalance || 0) + stars;
  gameState.totalStars = (gameState.totalStars || 0) + stars;

  const fromIndex = getPlayerRankIndex();
  while (gameState.rankIndex < getMaxRankIndex() &&
         gameState.starBalance >= getRankStarsNeeded(gameState.rankIndex)) {
    gameState.starBalance -= getRankStarsNeeded(gameState.rankIndex);
    gameState.rankIndex += 1;
  }

  if (gameState.rankIndex >= getMaxRankIndex()) {
    gameState.starBalance = Math.min(gameState.starBalance, getRankStarsNeeded(gameState.rankIndex));
  }

  progression = {
    type: gameState.rankIndex > fromIndex ? "promotion" : "progress",
    stars: stars,
    fromIndex: fromIndex,
    toIndex: gameState.rankIndex
  };
  return progression;
}

function getDetectiveCardMarkup(avatarSize) {
  if (!gameState.player) return "";

  const rankIndex = getPlayerRankIndex();
  const needed = getRankStarsNeeded(rankIndex);
  const balance = Math.min(Math.max(0, Number(gameState.starBalance) || 0), needed);
  const isMax = rankIndex >= getMaxRankIndex();
  const percent = needed > 0 ? Math.min(100, Math.round((balance / needed) * 100)) : 100;

  return `<div class="detective-card-avatar">${getPlayerAvatarSvg(gameState.player, avatarSize)}</div>
    <div class="detective-card-info">
      <p class="detective-card-title">${t("rankCardTitle")}</p>
      <p class="detective-card-name">${escapeHtml(gameState.player.name)}</p>
      <p class="detective-card-rank">${t("rankLabel")}: <strong>${getRankName(rankIndex)}</strong></p>
      <p class="detective-card-stars"><span class="star-glyph">★</span> ${tf("starsBalance", { stars: balance, needed: needed })}</p>
      <div class="detective-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="${needed}" aria-valuenow="${balance}">
        <div class="detective-progress-fill" style="width:${percent}%"></div>
      </div>
      <p class="detective-card-progress">${isMax ? t("maxRankReached") : tf("promotionProgress", { current: balance, needed: needed })}</p>
    </div>`;
}

function renderDetectiveCard(container, avatarSize) {
  if (!container) return;
  if (!gameState.player) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = getDetectiveCardMarkup(avatarSize);
}

function renderHomeRankCard() {
  renderDetectiveCard(document.getElementById("home-rank-card"), "card");
}

function renderTabletRankCard() {
  renderDetectiveCard(document.getElementById("tablet-rank-card"), "tablet");
}

function renderPromotion() {
  const info = gameState.lastProgression;
  if (!info || info.type !== "promotion") return;

  const avatar = document.getElementById("promotion-avatar");
  if (avatar) avatar.innerHTML = gameState.player ? getPlayerAvatarSvg(gameState.player, "promotion") : "";

  const rankEl = document.getElementById("promotion-rank");
  const rank = RANKS[info.toIndex];
  if (rankEl) rankEl.textContent = rank ? t("rank_" + rank.id) : getRankName(info.toIndex);

  const starsEl = document.getElementById("promotion-stars");
  if (starsEl) {
    starsEl.innerHTML = [0, 1, 2].map((index) =>
      `<span class="promotion-star ${index < (info.stars || 0) ? "earned" : ""}" style="animation-delay:${(index * 0.18).toFixed(2)}s;">★</span>`
    ).join("");
  }
}

function continueFromPromotion() {
  const latest = gameState.currentCase && typeof getLatestCaseResult === "function"
    ? getLatestCaseResult(gameState.currentCase.id)
    : null;
  if (latest) renderCaseEnd(latest);
  if (areAllCasesCompleted()) {
    renderGameComplete();
    showScreen("gameComplete");
    return;
  }
  showScreen("caseEnd");
}

function renderCaseEndPlayer(result) {
  const container = document.getElementById("case-end-player");
  if (!container) return;

  if (!gameState.player) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");

  const info = gameState.lastProgression &&
    result &&
    gameState.lastProgression.caseId === result.caseId &&
    gameState.lastProgression.date === result.date
    ? gameState.lastProgression
    : null;

  let notice = "";
  if (info) {
    if (info.type === "warning") {
      notice = `<p class="rank-warning">⚠️ ${t("failureWarning")}</p>`;
    } else if (info.type === "demotion") {
      notice = `<p class="rank-demotion">▼ ${tf("demotionMessage", { rank: getRankName(info.toIndex) })}</p>`;
    } else if (info.type === "demotionFloor") {
      notice = `<p class="rank-warning">⚠️ ${t("lowestRankWarning")}</p>`;
    } else if (info.type === "promotion") {
      notice = `<p class="rank-promotion">★ ${tf("promotionNotice", { rank: getRankName(info.toIndex) })}</p>`;
    }
  }

  container.innerHTML = `<div class="detective-card case-end-detective-card">${getDetectiveCardMarkup("card")}</div>${notice}`;
}