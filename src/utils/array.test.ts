import { describe, expect, test } from "vitest";

import { getNextItem } from "./array";

describe("getNextItem works properly", () => {
  test.each([
    [[0, 1, 2], 0, 1],
    [[0, 1, 2], 1, 2],
    [[0, 1, 2], 2, 0],
    [[0, 1, 2], 6, undefined],
    [[], 0, undefined],
    [[42], 42, 42],
    [[1, 2, 2, 3], 2, 2] // special case not handled: array with duplicate values
  ])(
    "array: %o, current item: %s -> next item: %s",
    (array, currentItem, nextItem) => {
      expect(getNextItem(currentItem, array)).toBe(nextItem);
    }
  );

  test("works with strings", () => {
    const array = ["a", "b", "c"];
    expect(getNextItem("a", array)).toBe("b");
    expect(getNextItem("c", array)).toBe("a");
  });

  test("works with objects", () => {
    const obj1 = { id: 1 };
    const obj2 = { id: 2 };
    const obj3 = { id: 3 };
    const array = [obj1, obj2, obj3];

    expect(getNextItem(obj1, array)).toBe(obj2);
    expect(getNextItem(obj3, array)).toBe(obj1);
  });
});
