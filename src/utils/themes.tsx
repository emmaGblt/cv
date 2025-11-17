import type { TTheme } from "@/types";

function getNextTheme(currentTheme: TTheme, themes: Array<TTheme>): TTheme {
  const currentThemeIndex = themes.indexOf(currentTheme);
  const numberOfThemes = themes.length;

  const nextThemeIndex =
    currentThemeIndex === numberOfThemes - 1 ? 0 : currentThemeIndex + 1;

  return themes[nextThemeIndex];
}

export { getNextTheme };
