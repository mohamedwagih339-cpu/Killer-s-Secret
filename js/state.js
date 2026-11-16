const gameState = {
  currentCase: null,
  currentScreen: "home",
  evidence: [],
  clues: [],
  interrogatedSuspects: [],
  statements: [],
  decisions: [],
  activeSuspectId: null,
  searchedPoints: [],
  notes: "",
  suspectStats: {},
  contradictions: {},
  presentedClues: {},
  unlockedQuestions: {},
  unlockedPoints: [],
  investigationScore: 0,
  actions: 0,
  labJobs: [],
  labReports: {},
  autopsyNotified: false,
  caseResults: [],
  generatedCases: [],
  lastAccusation: null,
  caseCompleted: false,
  lastCaseScreen: null,
  // Part 7: detective profile and rank progression.
  player: null,
  rankIndex: 0,
  starBalance: 0,
  totalStars: 0,
  failureStreak: 0,
  lastProgression: null
};

const PLAYER_BEARD_VALUES = ["none", "light", "full", "goatee"];

function createDefaultPlayerSkillLevels() {
  const skills = {};
  const definitions = typeof SKILL_DEFINITIONS === "undefined" ? [] : SKILL_DEFINITIONS;
  definitions.forEach((skill) => {
    skills[skill.id] = 0;
  });
  return skills;
}

function getMaxRankIndex() {
  return typeof MAX_RANK_INDEX === "number" ? MAX_RANK_INDEX : 7;
}

// Keeps older saves usable: returns a clean player profile or null when there
// is no valid detective yet (which sends the player to the setup screen).
function normalizePlayerProfile(raw) {
  if (!raw || typeof raw !== "object") return null;

  const name = typeof raw.name === "string" ? raw.name.trim().slice(0, 24) : "";
  if (!name) return null;

  const clampIndex = (value, size) => {
    const number = Number(value);
    return Number.isInteger(number) && number >= 0 && number < size ? number : 0;
  };

  const player = {
    name: name,
    gender: raw.gender === "female" ? "female" : "male",
    skin: clampIndex(raw.skin, 5),
    hair: clampIndex(raw.hair, 4),
    hairColor: clampIndex(raw.hairColor, 5),
    beard: "none",
    outfit: clampIndex(raw.outfit, 4)
  };

  const rawXp = Number(raw.xp);
  player.xp = Number.isFinite(rawXp) && rawXp > 0 ? Math.floor(rawXp) : 0;
  const rawSkillPoints = Number(raw.skillPoints);
  player.skillPoints = Number.isInteger(rawSkillPoints) && rawSkillPoints >= 0
    ? rawSkillPoints
    : Math.floor(player.xp / 100);
  player.skills = createDefaultPlayerSkillLevels();
  const rawSkills = raw.skills && typeof raw.skills === "object" ? raw.skills : {};
  Object.keys(player.skills).forEach((skillId) => {
    const level = Number(rawSkills[skillId]);
    player.skills[skillId] = Number.isInteger(level) ? Math.max(0, Math.min(3, level)) : 0;
  });
  player.xpAwards = Array.isArray(raw.xpAwards)
    ? Array.from(new Set(raw.xpAwards.filter((award) => typeof award === "string")))
    : [];

  if (player.gender === "female") {
    const hijab = Number(raw.hijab);
    player.hijab = Number.isInteger(hijab) && hijab >= 0 && hijab < 5 ? hijab : null;
  } else {
    player.hijab = null;
    player.beard = PLAYER_BEARD_VALUES.includes(raw.beard) ? raw.beard : "none";
  }

  return player;
}

function normalizeProgressionState() {
  const maxIndex = getMaxRankIndex();
  const rank = Number(gameState.rankIndex);
  gameState.rankIndex = Number.isInteger(rank) ? Math.max(0, Math.min(maxIndex, rank)) : 0;

  const balance = Number(gameState.starBalance);
  gameState.starBalance = Number.isFinite(balance) && balance > 0 ? Math.floor(balance) : 0;

  const total = Number(gameState.totalStars);
  gameState.totalStars = Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;

  const failures = Number(gameState.failureStreak);
  gameState.failureStreak = Number.isFinite(failures) && failures > 0 ? Math.floor(failures) : 0;

  if (!gameState.lastProgression || typeof gameState.lastProgression !== "object") {
    gameState.lastProgression = null;
  }
}

function saveState() {
  localStorage.setItem("detective_save", JSON.stringify(gameState));
}

function loadState() {
  const saved = localStorage.getItem("detective_save");
  if (saved) {
    try {
      Object.assign(gameState, JSON.parse(saved));
      if (!Array.isArray(gameState.searchedPoints)) gameState.searchedPoints = [];
      if (!Array.isArray(gameState.clues)) gameState.clues = [];
      if (!Array.isArray(gameState.statements)) gameState.statements = [];
      if (!Array.isArray(gameState.decisions)) gameState.decisions = [];
      if (!Array.isArray(gameState.interrogatedSuspects)) gameState.interrogatedSuspects = [];
      if (!Array.isArray(gameState.unlockedPoints)) gameState.unlockedPoints = [];
      if (!gameState.suspectStats || typeof gameState.suspectStats !== "object") gameState.suspectStats = {};
      if (!gameState.contradictions || typeof gameState.contradictions !== "object") gameState.contradictions = {};
      if (!gameState.presentedClues || typeof gameState.presentedClues !== "object") gameState.presentedClues = {};
      if (!gameState.unlockedQuestions || typeof gameState.unlockedQuestions !== "object") gameState.unlockedQuestions = {};
      if (typeof gameState.investigationScore !== "number") gameState.investigationScore = 0;
      if (typeof gameState.notes !== "string") gameState.notes = "";
      if (typeof gameState.actions !== "number") gameState.actions = 0;
      if (!Array.isArray(gameState.labJobs)) gameState.labJobs = [];
      if (!gameState.labReports || typeof gameState.labReports !== "object") gameState.labReports = {};
      if (typeof gameState.autopsyNotified !== "boolean") gameState.autopsyNotified = false;
      if (!Array.isArray(gameState.caseResults)) gameState.caseResults = [];
      if (!Array.isArray(gameState.generatedCases)) gameState.generatedCases = [];
      if (!gameState.lastAccusation || typeof gameState.lastAccusation !== "object") gameState.lastAccusation = null;
      // Older saves do not know whether the loaded case was already finished.
      if (typeof gameState.caseCompleted !== "boolean") {
        gameState.caseCompleted = !!(
          gameState.currentCase &&
          gameState.lastAccusation &&
          gameState.lastAccusation.caseId === gameState.currentCase.id
        );
      }
      if (typeof gameState.lastCaseScreen !== "string") gameState.lastCaseScreen = null;
      if (!["intro", "suspects", "interrogation", "crimeScene", "accusation"].includes(gameState.lastCaseScreen)) {
        gameState.lastCaseScreen = null;
      }
      gameState.player = normalizePlayerProfile(gameState.player);
      normalizeProgressionState();
      return true;
    } catch (e) {
      return false;
    }
  }
  return false;
}

function resetState() {
  gameState.currentCase = null;
  gameState.currentScreen = "home";
  gameState.evidence = [];
  gameState.clues = [];
  gameState.interrogatedSuspects = [];
  gameState.statements = [];
  gameState.decisions = [];
  gameState.activeSuspectId = null;
  gameState.searchedPoints = [];
  gameState.notes = "";
  gameState.suspectStats = {};
  gameState.contradictions = {};
  gameState.presentedClues = {};
  gameState.unlockedQuestions = {};
  gameState.unlockedPoints = [];
  gameState.investigationScore = 0;
  gameState.actions = 0;
  gameState.labJobs = [];
  gameState.labReports = {};
  gameState.autopsyNotified = false;
  gameState.caseResults = [];
  gameState.generatedCases = [];
  gameState.lastAccusation = null;
  gameState.caseCompleted = false;
  gameState.lastCaseScreen = null;
  gameState.player = null;
  gameState.rankIndex = 0;
  gameState.starBalance = 0;
  gameState.totalStars = 0;
  gameState.failureStreak = 0;
  gameState.lastProgression = null;
  localStorage.removeItem("detective_save");
}

// Clears only the current case's progress while keeping case history,
// language and any other global progress intact.
function resetCaseProgress() {
  gameState.evidence = [];
  gameState.clues = [];
  gameState.interrogatedSuspects = [];
  gameState.statements = [];
  gameState.decisions = [];
  gameState.activeSuspectId = null;
  gameState.searchedPoints = [];
  gameState.notes = "";
  gameState.suspectStats = {};
  gameState.contradictions = {};
  gameState.presentedClues = {};
  gameState.unlockedQuestions = {};
  gameState.unlockedPoints = [];
  gameState.investigationScore = 0;
  gameState.actions = 0;
  gameState.labJobs = [];
  gameState.labReports = {};
  gameState.autopsyNotified = false;
  gameState.lastAccusation = null;
  gameState.caseCompleted = false;
  gameState.lastCaseScreen = null;
  gameState.currentScreen = "home";
  saveState();
}

function getSuspectStats(suspectId) {
  if (!gameState.suspectStats[suspectId]) {
    gameState.suspectStats[suspectId] = {
      cooperation: 50,
      stress: 20
    };
  }
  return gameState.suspectStats[suspectId];
}

function updateSuspectStats(suspectId, deltaCoop, deltaStress) {
  const stats = getSuspectStats(suspectId);
  stats.cooperation = Math.max(0, Math.min(100, stats.cooperation + deltaCoop));
  stats.stress = Math.max(0, Math.min(100, stats.stress + deltaStress));
  saveState();
  return stats;
}

function updateInvestigationScore(delta) {
  gameState.investigationScore = Math.max(0, (gameState.investigationScore || 0) + delta);
  saveState();
  return gameState.investigationScore;
}

// One investigation action = searching a checkpoint or asking a question.
// Actions are the currency the forensic lab consumes.
function recordAction() {
  gameState.actions = (gameState.actions || 0) + 1;
  if (typeof advanceLabJobs === "function") advanceLabJobs();
  if (typeof checkAutopsyUnlock === "function") checkAutopsyUnlock();
  saveState();
  return gameState.actions;
}