import { render } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";

import Heading, { type HeadingLevel } from "./Heading";

describe("Heading renders properly", () => {
  it("renders a h1 by default", () => {
    const { getByRole } = render(<Heading>Hello!</Heading>);

    expect(getByRole("heading", { level: 1, name: "Hello!" })).toBeVisible();
  });

  test.each([
    [
      "1",
      "h1",
      "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-1.5 text-2xl md:mb-3 md:text-4xl"
    ],
    [
      "2",
      "h2",
      "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-4 max-w-fit text-xl md:text-3xl"
    ],
    [
      "3",
      "h3",
      "cartoon-title cartoon:text-shadow-md cartoon:text-shadow-primary mb-2 max-w-fit text-lg md:mb-4 md:text-2xl"
    ],
    ["4", "h4", "font-bold md:text-lg"]
  ])(
    "Heading of level %s renders a %s tag with the correct styles",
    (level, tag, className) => {
      const { getByRole } = render(
        <Heading level={level as HeadingLevel}>Hello!</Heading>
      );

      const heading = getByRole("heading", {
        level: Number(level),
        name: "Hello!"
      });

      expect(heading).toBeVisible();
      expect(heading.nodeName).toBe(tag.toUpperCase());
      expect(heading.className).toContain(className);
    }
  );
});
