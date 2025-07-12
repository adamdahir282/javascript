const revelationPlaces = {
  "Al-Fatiha": "Mecca",
  "Al-Baqara": "Medina",
  "Al-Ikhlas": "Mecca",
};

export function getRevelationCity(surahName) {
  return revelationPlaces[surahName] || "Unknown";
}
