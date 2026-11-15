const RULES = {
  // Rules for how each personality reacts to each questioning approach
  approaches: {
    stubborn: {
      calm: { cooperation: 5, stress: -5, result: "neutral", points: 0 },
      pressing: { cooperation: -25, stress: 20, result: "bad", points: -10 },
      sympathetic: { cooperation: 10, stress: -10, result: "good", points: 10 }
    },
    nervous: {
      calm: { cooperation: 5, stress: -5, result: "neutral", points: 0 },
      pressing: { cooperation: -15, stress: 25, result: "bad", points: -10 },
      sympathetic: { cooperation: 20, stress: -10, result: "good", points: 10 }
    },
    proud: {
      calm: { cooperation: 15, stress: -10, result: "good", points: 10 },
      pressing: { cooperation: -20, stress: 20, result: "bad", points: -10 },
      sympathetic: { cooperation: -5, stress: 5, result: "neutral", points: 0 }
    },
    calm: {
      calm: { cooperation: 5, stress: -5, result: "neutral", points: 0 },
      pressing: { cooperation: -10, stress: 10, result: "bad", points: -10 },
      sympathetic: { cooperation: 10, stress: -5, result: "good", points: 10 }
    }
  },

  // Rules for presenting evidence
  evidence: {
    relevantCrucial: { cooperation: 20, stress: 25, result: "good", points: 10 },
    relevantImportant: { cooperation: 15, stress: 15, result: "good", points: 10 },
    irrelevantOrMisleading: { cooperation: -10, stress: 5, result: "bad", points: -10 }
  },

  // Baseline thresholds
  thresholds: {
    refuseThreshold: 10,
    initialCooperation: 50,
    initialStress: 20
  },

  // Forensic lab rules: two analyses at once, each costs three player actions
  lab: {
    capacity: 2,
    analysisActions: 3,
    retryActions: 2,
    autopsyUnlockActions: 3
  },

  // Accusation rules and the 0-3 star scoring formula
  accusation: {
    maxSelectedClues: 3,
    requiredCrucialClues: 2,
    investigationScoreThreshold: 60,
    stars: {
      innocent: 0,
      partial: 1,
      fullBase: 2,
      fullBonus: 1,
      max: 3
    }
  }
};

function getApproachRule(personality, approach) {
  const p = RULES.approaches[personality];
  if (p && p[approach]) {
    return p[approach];
  }
  return { cooperation: 0, stress: 0, result: "neutral", points: 0 };
}

// Evaluates a player's accusation and returns the outcome plus its star score.
// The formula lives here so it can be tuned without touching the UI code.
function evaluateAccusation(caseObj, accusation, investigationScore) {
  const rules = RULES.accusation;
  const draft = accusation || {};
  const score = Number(investigationScore) || 0;

  const correctKiller = !!caseObj && draft.suspectId === caseObj.killerId;
  const selectedIds = Array.isArray(draft.clueIds)
    ? draft.clueIds.slice(0, rules.maxSelectedClues)
    : [];
  const clues = ((caseObj && caseObj.clues) || []).filter((clue) => selectedIds.includes(clue.id));
  const crucialCount = clues.filter((clue) =>
    clue.importance === "crucial" &&
    Array.isArray(clue.suspectIds) &&
    clue.suspectIds.includes(caseObj.killerId)
  ).length;
  const correctMotiveId = caseObj && caseObj.motiveOptions ? caseObj.motiveOptions.correctId : null;
  const motiveCorrect = !!draft.motiveId && draft.motiveId === correctMotiveId;

  let outcome;
  let stars;

  if (!correctKiller) {
    outcome = "innocent";
    stars = rules.stars.innocent;
  } else if (crucialCount >= rules.requiredCrucialClues && motiveCorrect) {
    outcome = "full";
    stars = rules.stars.fullBase;
    if (score >= rules.investigationScoreThreshold) {
      stars += rules.stars.fullBonus;
    }
  } else {
    outcome = "partial";
    stars = rules.stars.partial;
  }

  stars = Math.max(0, Math.min(rules.stars.max, stars));

  return {
    correctKiller,
    crucialCount,
    motiveCorrect,
    investigationScore: score,
    selectedClueIds: selectedIds,
    outcome,
    stars
  };
}

// Runs on load to make sure a case is actually solvable and fully localized.
// It only warns in the console; it never blocks the game.
function validateCase(caseObj) {
  if (!caseObj) return false;

  const warnings = [];
  const caseId = caseObj.id || "unknown_case";
  const suspects = Array.isArray(caseObj.suspects) ? caseObj.suspects : [];
  const clues = Array.isArray(caseObj.clues) ? caseObj.clues : [];
  const scene = Array.isArray(caseObj.scene) ? caseObj.scene : [];
  const killer = suspects.find((suspect) => suspect.id === caseObj.killerId);

  if (!caseObj.killerId || !killer) {
    warnings.push("killerId is missing or does not match any suspect.");
  }

  if (caseObj.killerId && killer) {
    const crucialToKiller = clues.filter((clue) =>
      clue.importance === "crucial" &&
      Array.isArray(clue.suspectIds) &&
      clue.suspectIds.length === 1 &&
      clue.suspectIds[0] === caseObj.killerId
    );
    if (crucialToKiller.length < 3) {
      warnings.push("fewer than 3 crucial clues point only to the killer (found " + crucialToKiller.length + ").");
    }
  }

  if (caseObj.killerId) {
    clues.filter((clue) => clue.importance === "crucial").forEach((clue) => {
      const inCheckpoint = scene.some((point) => point.clueId === clue.id);
      const inLab = clues.some((other) =>
        other.recoveredClue && other.recoveredClue.id === clue.id
      );
      if (!inCheckpoint && !inLab) {
        warnings.push("crucial clue " + clue.id + " is not available from any checkpoint or lab result.");
      }
    });
  }

  suspects.forEach((suspect) => {
    const questions = [...(suspect.questions || [])];
    Object.keys(suspect.presentReactions || {}).forEach((key) => {
      const reaction = suspect.presentReactions[key];
      if (reaction && reaction.unlockQuestion) {
        questions.push(reaction.unlockQuestion);
      }
    });

    questions.forEach((question) => {
      const responses = question.responses || {};
      const missing = ["calm", "pressing", "sympathetic"].filter((approach) => !responses[approach]);
      if (missing.length > 0) {
        warnings.push("question " + question.id + " (suspect " + suspect.id + ") lacks responses: " + missing.join(", ") + ".");
      }
    });
  });

  warnings.forEach((warning) => {
    console.warn("[validateCase] " + caseId + ": " + warning);
  });

  return warnings.length === 0;
}

