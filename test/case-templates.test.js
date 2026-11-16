const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

function createCaseContext() {
  const warnings = [];
  let saveCount = 0;
  const context = {
    console: { warn: (...args) => warnings.push(args.join(" ")) },
    gameState: { generatedCases: [], currentCase: null },
    saveState: () => { saveCount++; }
  };
  const source = [
    path.join(__dirname, "..", "data", "rules.js"),
    path.join(__dirname, "..", "data", "cases.js"),
    path.join(__dirname, "..", "data", "case-templates.js")
  ].map((file) => fs.readFileSync(file, "utf8")).join("\n");

  vm.createContext(context);
  vm.runInContext(source + `
    globalThis.caseApi = {
      cases: CASES,
      generate: generateCaseFromTemplate,
      ensure: ensureGeneratedCases,
      validate: validateCase,
      evaluate: evaluateAccusation
    };
  `, context);

  return { context, warnings, getSaveCount: () => saveCount };
}

test("observatory template validates and supports a full-star accusation", () => {
  const { context } = createCaseContext();
  const caseObj = context.caseApi.generate("observatory_last_signal");
  assert.equal(context.caseApi.validate(caseObj), true);

  const result = context.caseApi.evaluate(caseObj, {
    suspectId: caseObj.killerId,
    clueIds: caseObj.generation.requiredKillerClueIds.slice(0, 2),
    motiveId: caseObj.motiveOptions.correctId
  }, 60);
  assert.equal(result.outcome, "full");
  assert.equal(result.stars, 3);
});

test("existing authored cases remain valid with generated-case checks enabled", () => {
  const { context } = createCaseContext();
  assert.equal(context.caseApi.cases.length, 5);
  assert.ok(context.caseApi.cases.every((caseObj) => context.caseApi.validate(caseObj)));
});

test("generated case has manual outage comparison, a body, and one gated secret per suspect", () => {
  const { context } = createCaseContext();
  const caseObj = context.caseApi.generate("observatory_last_signal");
  const body = caseObj.scene.find((point) => point.id === caseObj.generation.bodyPointId);
  const powerLog = caseObj.clues.find((clue) => clue.id === caseObj.generation.powerLogClueId);

  assert.equal(body.bodyPresent, true);
  assert.equal(caseObj.generation.timeline.mode, "manual");
  assert.ok(caseObj.pressingCooperationMultiplier > 1);
  assert.match(powerLog.paperText.ar, /22:26/);
  assert.match(powerLog.paperText.ar, /22:33/);
  assert.match(powerLog.paperText.en, /22:26/);
  assert.match(powerLog.paperText.en, /22:33/);
  for (const suspect of caseObj.suspects) {
    const gatedSecrets = suspect.questions.filter((question) => question.secretReveal);
    assert.equal(gatedSecrets.length, 1);
    assert.ok(["calm", "pressing", "sympathetic"].includes(gatedSecrets[0].secretReveal.approach));
    assert.equal(suspect.alibiWindow, undefined);
  }
});

test("generated case is saved, reused, and replaced when its saved copy fails validation", () => {
  const { context, getSaveCount } = createCaseContext();
  const first = context.caseApi.ensure()[0];
  const savedCopy = JSON.parse(JSON.stringify(first));

  context.gameState.generatedCases = [savedCopy];
  const reused = context.caseApi.ensure()[0];
  assert.deepEqual(JSON.parse(JSON.stringify(reused)), savedCopy);
  assert.equal(context.caseApi.cases.filter((caseObj) => caseObj.id === first.id).length, 1);

  context.gameState.generatedCases[0].suspects[0].questions[0] = null;
  const replacement = context.caseApi.ensure()[0];
  assert.equal(context.caseApi.validate(replacement), true);
  assert.equal(replacement.killerId, "obs_suspect_engineer");
  assert.equal(getSaveCount() > 0, true);
});
