import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import Bold from "./Bold";

describe("Bold renders properly", () => {
  beforeEach(() => render(<Bold>Bold text!</Bold>));

  it("renders a strong tag with the correct style", () => {
    const element = document.querySelector("strong");

    expect(element).toBeVisible();
    expect(element).toHaveClass("font-bold");
  });
});
