import { describe, expect, test } from "vitest";

import type { TTheme } from "@/types";

import { getNextTheme } from "./themes";

describe("getNextTheme works properly", () => {
  test.each<[Array<TTheme>, TTheme, TTheme]>([
    [["cartoon", "neomorphism"], "cartoon", "neomorphism"],
    [["cartoon", "neomorphism"], "neomorphism", "cartoon"]
  ])(
    "themes: %o, currentTheme: %s -> next theme: %s",
    (themes, currentTheme, nextTheme) => {
      expect(getNextTheme(currentTheme, themes)).toBe(nextTheme);
    }
  );
});
