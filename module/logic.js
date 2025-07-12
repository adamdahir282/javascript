export function getAyahCount(surahName, surahList) {
  const surah = surahList.find((s) => s.name === surahName);
  return surah ? surah.ayahs : "Surah not found";
}
