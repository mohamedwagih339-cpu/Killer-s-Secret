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
    },
    // Personalities introduced with the museum case (case_002).
    arrogant: {
      calm: { cooperation: 10, stress: -5, result: "good", points: 10 },
      pressing: { cooperation: -25, stress: 20, result: "bad", points: -10 },
      sympathetic: { cooperation: -5, stress: 5, result: "neutral", points: 0 }
    },
    evasive: {
      calm: { cooperation: 15, stress: -10, result: "good", points: 10 },
      pressing: { cooperation: -20, stress: 20, result: "bad", points: -10 },
      sympathetic: { cooperation: -5, stress: 5, result: "neutral", points: 0 }
    },
    remorseful: {
      calm: { cooperation: 5, stress: -5, result: "neutral", points: 0 },
      pressing: { cooperation: -20, stress: 25, result: "bad", points: -10 },
      sympathetic: { cooperation: 20, stress: -10, result: "good", points: 10 }
    },
    ruthless: {
      calm: { cooperation: 10, stress: -5, result: "good", points: 10 },
      pressing: { cooperation: -20, stress: 15, result: "bad", points: -10 },
      sympathetic: { cooperation: 0, stress: 5, result: "neutral", points: 0 }
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

  // Forensic lab rules: three analyses at once, each costs three player actions
  lab: {
    capacity: 3,
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
  if (!caseObj || typeof caseObj !== "object" || Array.isArray(caseObj)) return false;

  const warnings = [];
  const caseId = caseObj.id || "unknown_case";
  const objectList = (items, label) => {
    if (!Array.isArray(items)) {
      warnings.push(label + " must be an array.");
      return [];
    }
    const objects = items.filter((item) => item && typeof item === "object" && !Array.isArray(item));
    if (objects.length !== items.length) {
      warnings.push(label + " contains invalid entries.");
    }
    return objects;
  };
  const suspects = objectList(caseObj.suspects, "suspects");
  const clues = objectList(caseObj.clues, "clues");
  const scene = objectList(caseObj.scene, "scene");
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

  clues.filter((clue) => clue.analyzable && clue.labType === "document").forEach((clue) => {
    const paperText = clue.paperText || {};
    const missingLanguages = ["ar", "en"].filter((language) =>
      typeof paperText[language] !== "string" ||
      paperText[language].trim().split(/\s+/).filter(Boolean).length < 6
    );
    if (missingLanguages.length > 0) {
      warnings.push("analyzable document clue " + clue.id + " has missing or too-short paperText for: " + missingLanguages.join(", ") + ".");
    }
  });

  suspects.forEach((suspect) => {
    const questions = objectList(suspect.questions || [], "questions for suspect " + suspect.id);
    Object.keys(suspect.presentReactions || {}).forEach((key) => {
      const reaction = suspect.presentReactions[key];
      if (reaction && reaction.unlockQuestion) {
        const unlockQuestion = reaction.unlockQuestion;
        if (unlockQuestion && typeof unlockQuestion === "object" && !Array.isArray(unlockQuestion)) {
          questions.push(unlockQuestion);
        } else {
          warnings.push("suspect " + suspect.id + " has an invalid unlock question for reaction " + key + ".");
        }
      }
    });

    questions.forEach((question) => {
      const responses = question.responses || {};
      const missing = ["calm", "pressing", "sympathetic"].filter((approach) => !responses[approach]);
      if (missing.length > 0) {
        warnings.push("question " + question.id + " (suspect " + suspect.id + ") lacks responses: " + missing.join(", ") + ".");
      }
      if (question.secretReveal) {
        const approaches = ["calm", "pressing", "sympathetic"];
        const reveal = question.secretReveal;
        if (!approaches.includes(reveal.approach)) {
          warnings.push("question " + question.id + " (suspect " + suspect.id + ") has an invalid secretReveal approach.");
        }
        if (!reveal.text || !reveal.text.ar || !reveal.text.en) {
          warnings.push("question " + question.id + " (suspect " + suspect.id + ") has an incomplete bilingual secretReveal.");
        }
      }
    });
  });

  scene.forEach((point) => {
    if (!point.hiddenUntil) return;
    const unlock = point.hiddenUntil;
    if (unlock.approach && !["calm", "pressing", "sympathetic"].includes(unlock.approach)) {
      warnings.push("checkpoint " + point.id + " has an invalid hiddenUntil approach.");
    }
    if (unlock.approach) {
      const unlockSuspect = suspects.find((suspect) => suspect.id === unlock.suspectId);
      const unlockQuestion = unlockSuspect &&
        (unlockSuspect.questions || []).find((question) => question.id === unlock.questionId);
      if (!unlockQuestion || !unlockQuestion.secretReveal ||
          unlockQuestion.secretReveal.approach !== unlock.approach) {
        warnings.push("checkpoint " + point.id + " is not tied to a matching approach-gated question secret.");
      }
    }
  });

  if (caseObj.generation) {
    const generation = caseObj.generation;
    const hasText = (value) => !!(
      value &&
      typeof value.ar === "string" && value.ar.trim() &&
      typeof value.en === "string" && value.en.trim()
    );
    const idsAreUnique = (items) =>
      new Set(items.map((item) => item && item.id).filter(Boolean)).size === items.length;
    const findClue = (id) => clues.find((clue) => clue.id === id);
    const clueIsAvailable = (clueId) =>
      scene.some((point) => point.clueId === clueId) ||
      clues.some((clue) => clue.recoveredClue && clue.recoveredClue.id === clueId);
    const parseTime = (value) => {
      if (typeof value !== "string" || !/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(value)) return null;
      const parts = value.split(":").map(Number);
      return parts[0] * 60 + parts[1];
    };
    const generatedWarning = (message) => warnings.push("generated case " + message);
    const requiredKillerClueIds = Array.isArray(generation.requiredKillerClueIds)
      ? generation.requiredKillerClueIds
      : [];
    const requiredFalseLeadIds = Array.isArray(generation.requiredFalseLeadIds)
      ? generation.requiredFalseLeadIds
      : [];

    if (!generation.templateId || !generation.schemaVersion) {
      generatedWarning("is missing template metadata.");
    }
    if (!Number.isFinite(caseObj.pressingCooperationMultiplier) ||
        caseObj.pressingCooperationMultiplier <= 1 ||
        caseObj.pressingCooperationMultiplier > 2) {
      generatedWarning("must apply a bounded increase to cooperation loss under pressure.");
    }
    if (requiredKillerClueIds.length !== 3 || new Set(requiredKillerClueIds).size !== 3) {
      generatedWarning("must declare exactly three unique required killer clues.");
    }
    const decisiveClues = clues.filter((clue) =>
      clue.importance === "crucial" &&
      Array.isArray(clue.suspectIds) &&
      clue.suspectIds.length === 1 &&
      clue.suspectIds[0] === caseObj.killerId
    );
    if (decisiveClues.length !== 3 ||
        decisiveClues.some((clue) => !requiredKillerClueIds.includes(clue.id))) {
      generatedWarning("must contain exactly the three declared exclusive decisive clues.");
    }
    if (!idsAreUnique(suspects) || !idsAreUnique(clues) || !idsAreUnique(scene)) {
      generatedWarning("contains duplicate suspect, clue, or checkpoint IDs.");
    }
    if (suspects.length < 3 ||
        !hasText(caseObj.title) ||
        !hasText(caseObj.intro) ||
        !caseObj.victim ||
        !hasText(caseObj.victim.name) ||
        !hasText(caseObj.victim.description) ||
        !hasText(caseObj.victim.placeOfDeath) ||
        !hasText(caseObj.victim.timeOfDeath) ||
        !caseObj.location ||
        !hasText(caseObj.location.name) ||
        !hasText(caseObj.location.description)) {
      generatedWarning("is missing bilingual case, victim, or location details.");
    }
    const allClueIds = clues.flatMap((clue) => [
      clue.id,
      clue.recoveredClue && clue.recoveredClue.id
    ]).filter(Boolean);
    if (new Set(allClueIds).size !== allClueIds.length) {
      generatedWarning("contains duplicate IDs between evidence and recovered lab clues.");
    }
    requiredKillerClueIds.forEach((clueId) => {
      const clue = findClue(clueId);
      if (!clue || clue.importance !== "crucial" ||
          !Array.isArray(clue.suspectIds) ||
          clue.suspectIds.length !== 1 ||
          clue.suspectIds[0] !== caseObj.killerId ||
          !clueIsAvailable(clueId)) {
        generatedWarning("required clue " + clueId + " is not available and exclusive to the killer.");
      }
    });

    clues.forEach((clue) => {
      if (!hasText(clue.name) || !hasText(clue.desc)) {
        generatedWarning("clue " + clue.id + " is missing bilingual name or description.");
      }
      if (!["fingerprint", "document", "personal", "trace", "message"].includes(clue.type) ||
          !["crucial", "important", "misleading"].includes(clue.importance)) {
        generatedWarning("clue " + clue.id + " has an unsupported type or importance.");
      }
      if (clue.analyzable) {
        if (!["trace", "fingerprint", "document"].includes(clue.labType) ||
            !hasText(clue.labResult)) {
          generatedWarning("analyzable clue " + clue.id + " is missing a supported lab type or bilingual result.");
        }
        if (clue.labType === "fingerprint" && !Number.isInteger(clue.labSeed)) {
          generatedWarning("fingerprint clue " + clue.id + " is missing a stable lab seed.");
        }
        if (clue.labType === "document" &&
            ["ar", "en"].some((language) =>
              !clue.paperText ||
              typeof clue.paperText[language] !== "string" ||
              clue.paperText[language].trim().split(/\s+/).filter(Boolean).length < 6
            )) {
          generatedWarning("document clue " + clue.id + " has missing or too-short bilingual paper text.");
        }
      }
      if (clue.recoveredClue &&
          (!hasText(clue.recoveredClue.name) ||
           !hasText(clue.recoveredClue.desc) ||
           !Array.isArray(clue.recoveredClue.suspectIds) ||
           clue.recoveredClue.suspectIds.some((suspectId) =>
             !suspects.some((suspect) => suspect.id === suspectId)
           ))) {
        generatedWarning("recovered clue from " + clue.id + " has incomplete localization or suspect references.");
      }
    });

    const falseLeads = requiredFalseLeadIds.map(findClue);
    if (falseLeads.length < 2 || falseLeads.some((clue) =>
      !clue ||
      clue.importance !== "misleading" ||
      !clue.misleading ||
      !Array.isArray(clue.suspectIds) ||
      clue.suspectIds.length === 0 ||
      clue.suspectIds.includes(caseObj.killerId) ||
      !clueIsAvailable(clue.id) ||
      !hasText(clue.labResult)
    )) {
      generatedWarning("must have at least two available, bilingual false leads for other suspects.");
    }

    scene.forEach((point) => {
      if (!hasText(point.name) || !hasText(point.desc) ||
          !Number.isFinite(Number(point.x)) || Number(point.x) < 0 || Number(point.x) > 100 ||
          !Number.isFinite(Number(point.y)) || Number(point.y) < 0 || Number(point.y) > 100 ||
          (point.clueId && !findClue(point.clueId))) {
        generatedWarning("checkpoint " + point.id + " has incomplete localization, coordinates, or clue reference.");
      }
    });

    suspects.forEach((suspect) => {
      if (!hasText(suspect.name) || !hasText(suspect.job) ||
          !hasText(suspect.relation) || !hasText(suspect.personalityDesc) ||
          !hasText(suspect.secret) || !RULES.approaches[suspect.personality]) {
        generatedWarning("suspect " + suspect.id + " has incomplete bilingual data or an unsupported personality.");
      }
      if (suspect.alibiWindow) {
        generatedWarning("suspect " + suspect.id + " has an automatic alibi window; the timeline must be compared manually.");
      }

      const questions = Array.isArray(suspect.questions)
        ? suspect.questions.filter((question) =>
          question && typeof question === "object" && !Array.isArray(question)
        )
        : [];
      const secretQuestions = questions.filter((question) => question.secretReveal);
      if (questions.length < 3 || !idsAreUnique(questions) || secretQuestions.length !== 1) {
        generatedWarning("suspect " + suspect.id + " must have unique questions and exactly one gated secret.");
      }
      questions.forEach((question) => {
        const responses = question.responses || {};
        if (!hasText(question.text) ||
            ["calm", "pressing", "sympathetic"].some((approach) => !hasText(responses[approach]))) {
          generatedWarning("question " + question.id + " for suspect " + suspect.id + " is not fully localized.");
        }
        if (question.secretReveal &&
            (!["calm", "pressing", "sympathetic"].includes(question.secretReveal.approach) ||
             !hasText(question.secretReveal.text))) {
          generatedWarning("question " + question.id + " for suspect " + suspect.id + " has an invalid or untranslated secret.");
        }
      });
    });

    const bodyPoint = scene.find((point) => point.id === generation.bodyPointId);
    if (!bodyPoint || bodyPoint.id !== "point_body" || bodyPoint.bodyPresent !== true ||
        bodyPoint.clueId || !caseObj.autopsy || !hasText(caseObj.autopsy.cause) ||
        !Array.isArray(caseObj.autopsy.findings) || caseObj.autopsy.findings.length < 2 ||
        caseObj.autopsy.findings.some((finding) => !hasText(finding))) {
      generatedWarning("must include a visible body and a complete bilingual autopsy.");
    }

    const deathStart = caseObj.autopsy && parseTime(caseObj.autopsy.deathWindow && caseObj.autopsy.deathWindow.start);
    const deathEnd = caseObj.autopsy && parseTime(caseObj.autopsy.deathWindow && caseObj.autopsy.deathWindow.end);
    const outageStart = parseTime(generation.timeline && generation.timeline.outageStart);
    const outageEnd = parseTime(generation.timeline && generation.timeline.outageEnd);
    const powerLog = findClue(generation.powerLogClueId);
    if (!generation.timeline ||
        generation.timeline.mode !== "manual" ||
        deathStart === null || deathEnd === null || deathStart >= deathEnd ||
        outageStart === null || outageEnd === null || outageStart >= outageEnd ||
        outageStart > deathEnd || outageEnd < deathStart ||
        !powerLog || powerLog.importance === "crucial" ||
        !scene.some((point) => point.clueId === generation.powerLogClueId) ||
        !powerLog.paperText ||
        typeof powerLog.paperText.ar !== "string" ||
        typeof powerLog.paperText.en !== "string" ||
        !powerLog.paperText.ar.includes(generation.timeline.outageStart) ||
        !powerLog.paperText.ar.includes(generation.timeline.outageEnd) ||
        !powerLog.paperText.en.includes(generation.timeline.outageStart) ||
        !powerLog.paperText.en.includes(generation.timeline.outageEnd)) {
      generatedWarning("must offer a separate bilingual power log that overlaps the autopsy window for manual comparison.");
    }

    if (!caseObj.motiveOptions ||
        !Array.isArray(caseObj.motiveOptions.options) ||
        !caseObj.motiveOptions.options.some((option) =>
          option && option.id === caseObj.motiveOptions.correctId && hasText(option.text)
        ) ||
        caseObj.motiveOptions.options.some((option) => !option || !hasText(option.text))) {
      generatedWarning("is missing a complete correct motive choice.");
    }
    ["full", "partial", "innocent"].forEach((ending) => {
      const entry = caseObj.endings && caseObj.endings[ending];
      if (!entry || !hasText(entry.title) || !hasText(entry.text)) {
        generatedWarning("is missing a bilingual " + ending + " ending.");
      }
    });

    const solvable = evaluateAccusation(Object.assign({}, caseObj, {
      suspects: suspects,
      clues: clues
    }), {
      suspectId: caseObj.killerId,
      clueIds: requiredKillerClueIds.slice(0, 2),
      motiveId: caseObj.motiveOptions && caseObj.motiveOptions.correctId
    }, RULES.accusation.investigationScoreThreshold);
    if (solvable.outcome !== "full" || solvable.stars !== RULES.accusation.stars.max) {
      generatedWarning("does not have a verifiable full-star accusation path.");
    }
  }

  warnings.forEach((warning) => {
    console.warn("[validateCase] " + caseId + ": " + warning);
  });

  return warnings.length === 0;
}

