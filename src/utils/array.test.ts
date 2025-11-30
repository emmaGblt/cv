import { describe, expect, test } from "vitest";

import { getNextItem } from "./array";

describe("getNextItem works properly", () => {
  test.each([
    [[0, 1, 2], 0, 1],
    [[0, 1, 2], 1, 2],
    [[0, 1, 2], 2, 0],
    [[0, 1, 2], 6, undefined]
  ])(
    "array: %o, current item: %s -> next item: %s",
    (array, currentItem, nextItem) => {
      expect(getNextItem(currentItem, array)).toBe(nextItem);
    }
  );
});
