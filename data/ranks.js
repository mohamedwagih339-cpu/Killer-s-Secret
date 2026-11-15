// Detective ranks, ordered from the lowest to the highest.
// starsNeeded is the number of stars required to be promoted to the next rank.
// It is editable per rank without touching the progression logic.
const RANKS = [
  { id: "lieutenant", name: { ar: "ملازم", en: "Lieutenant" }, starsNeeded: 2 },
  { id: "first_lieutenant", name: { ar: "ملازم أول", en: "First Lieutenant" }, starsNeeded: 2 },
  { id: "captain", name: { ar: "نقيب", en: "Captain" }, starsNeeded: 2 },
  { id: "major", name: { ar: "رائد", en: "Major" }, starsNeeded: 2 },
  { id: "lieutenant_colonel", name: { ar: "مقدم", en: "Lieutenant Colonel" }, starsNeeded: 2 },
  { id: "colonel", name: { ar: "عقيد", en: "Colonel" }, starsNeeded: 2 },
  { id: "brigadier", name: { ar: "عميد", en: "Brigadier" }, starsNeeded: 2 },
  { id: "major_general", name: { ar: "لواء", en: "Major General" }, starsNeeded: 2 }
];

const MAX_RANK_INDEX = RANKS.length - 1;

function getRankStarsNeeded(index) {
  const rank = RANKS[index];
  if (!rank || typeof rank.starsNeeded !== "number" || rank.starsNeeded < 1) {
    return 2;
  }
  return Math.max(1, Math.round(rank.starsNeeded));
}

function getRankName(index) {
  const safeIndex = Math.max(0, Math.min(MAX_RANK_INDEX, Number(index) || 0));
  const rank = RANKS[safeIndex] || RANKS[0];
  if (!rank) return "";
  const lang = typeof currentLang !== "undefined" ? currentLang : "ar";
  return rank.name[lang] || rank.name.ar;
}
