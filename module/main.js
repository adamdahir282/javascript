import { surahs } from "./data.js";
import { getAyahCount } from "./logic.js";
import { getRevelationCity } from "./revelation.js";
import { getSurahStory } from "./story.js";

const dropdown = document.getElementById("surah-select");
const result = document.getElementById("result");
const city = document.getElementById("city");
const story = document.getElementById("story");

// Populate dropdown
surahs.forEach((surah) => {
  const option = document.createElement("option");
  option.value = surah.name;
  option.textContent = surah.name;
  dropdown.appendChild(option);
});

// Handle selection
dropdown.addEventListener("change", () => {
  const selectedSurah = dropdown.value;
  result.textContent = `The Surah "${selectedSurah}" has ${getAyahCount(
    selectedSurah,
    surahs
  )} verses.`;
  city.textContent = `Revealed in: ${getRevelationCity(selectedSurah)}`;
  story.textContent = `Story: ${getSurahStory(selectedSurah)}`;
});
