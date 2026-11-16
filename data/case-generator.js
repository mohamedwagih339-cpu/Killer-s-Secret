// Builds validated randomized variants from the authored case templates.
function cloneCaseTemplate(caseTemplate) {
  return JSON.parse(JSON.stringify(caseTemplate));
}

function chooseRandomItem(items) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleItems(items) {
  const shuffled = items.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = shuffled[index];
    shuffled[index] = shuffled[swapIndex];
    shuffled[swapIndex] = current;
  }
  return shuffled;
}

function localizeGeneratorText(key) {
  return {
    ar: translations.ar[key],
    en: translations.en[key]
  };
}

function chooseCheckpointPosition(scene) {
  const candidates = [
    [18, 72], [86, 70], [18, 24], [86, 50], [50, 18], [48, 76]
  ];
  const available = candidates.filter((position) =>
    scene.every((point) => Math.hypot(point.x - position[0], point.y - position[1]) > 18)
  );
  return chooseRandomItem(available) || [50, 76];
}

function createRandomizedCase(template, excludedKillerId) {
  const randomization = template.randomization;
  const killerCandidates = randomization.candidateSuspectIds.filter((id) => id !== excludedKillerId);
  const killerId = chooseRandomItem(killerCandidates);
  const motiveId = randomization.motiveBySuspect[killerId];
  if (!killerId || !motiveId) return null;

  const generated = cloneCaseTemplate(template);
  generated.baseCaseId = template.id;
  generated.id = template.id + "_random_" + Date.now().toString(36) +
    Math.random().toString(36).slice(2, 8);
  generated.killerId = killerId;
  generated.motiveOptions.correctId = motiveId;

  generated.clues.forEach((clue) => {
    if (randomization.killerClueIds.includes(clue.id)) {
      clue.importance = "crucial";
      clue.suspectIds = [killerId];
      if (Array.isArray(clue.labSuspectIds)) clue.labSuspectIds = [killerId];
    }
  });

  const distractorClues = generated.clues.filter((clue) =>
    !randomization.killerClueIds.includes(clue.id) &&
    clue.importance !== "crucial"
  );
  const distractor = chooseRandomItem(distractorClues);
  const innocentCandidates = randomization.candidateSuspectIds.filter((id) => id !== killerId);
  const distractorSuspectId = chooseRandomItem(innocentCandidates);
  if (distractor && distractorSuspectId) {
    distractor.importance = "misleading";
    distractor.misleading = true;
    distractor.suspectIds = [distractorSuspectId];
    if (distractor.analyzable) {
      distractor.labSuspectIds = [distractorSuspectId];
      distractor.labResult = localizeGeneratorText("randomizedDecoyLabResult");
    }
  }

  const placedClueIds = new Set(generated.scene.map((point) => point.clueId).filter(Boolean));
  generated.clues.forEach((clue) => {
    if (placedClueIds.has(clue.id)) return;
    const position = chooseCheckpointPosition(generated.scene);
    generated.scene.push({
      id: "random_point_" + clue.id,
      name: localizeGeneratorText("randomEvidencePointName"),
      desc: localizeGeneratorText("randomEvidencePointDesc"),
      x: position[0],
      y: position[1],
      clueId: clue.id
    });
  });

  const checkpointClueIds = generated.scene
    .map((point) => point.clueId)
    .filter((clueId) => clueId && generated.clues.some((clue) => clue.id === clueId));
  const randomizedClueIds = shuffleItems(checkpointClueIds);
  let clueIndex = 0;
  generated.scene.forEach((point) => {
    if (point.clueId && clueIndex < randomizedClueIds.length) {
      point.clueId = randomizedClueIds[clueIndex];
      clueIndex += 1;
    }
  });

  return generated;
}

function generateRandomCase(maxAttempts) {
  const templates = Array.isArray(CASES)
    ? CASES.filter((caseObj) => caseObj && caseObj.randomization)
    : [];
  if (!templates.length) {
    throw new Error("No case templates are configured for random generation.");
  }

  const attempts = Number.isInteger(maxAttempts) && maxAttempts > 0 ? maxAttempts : 20;
  const previousVariant = typeof gameState !== "undefined" ? gameState.lastRandomCaseVariant : null;
  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const template = chooseRandomItem(templates);
    const excludedKillerId = previousVariant && previousVariant.baseCaseId === template.id
      ? previousVariant.killerId
      : null;
    const generated = template ? createRandomizedCase(template, excludedKillerId) : null;
    if (generated && validateCase(generated)) {
      if (typeof gameState !== "undefined") {
        gameState.lastRandomCaseVariant = {
          baseCaseId: template.id,
          killerId: generated.killerId
        };
      }
      return generated;
    }
  }

  throw new Error("Random case generation did not produce a valid case after " + attempts + " attempts.");
}
