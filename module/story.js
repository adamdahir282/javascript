const surahStories = {
  "Al-Fatiha":
    "Known as the Opening, it's a prayer for guidance and mercy. Recited in every prayer.",
  "Al-Baqara":
    "Covers guidance, laws, and lessons for the Muslim community after migration to Medina.",
  "Al-Ikhlas":
    "A short chapter declaring the oneness of Allah — pure monotheism.",
};

export function getSurahStory(surahName) {
  return surahStories[surahName] || "No story available for this Surah yet.";
}
