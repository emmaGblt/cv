import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import Card from "./Card";

describe("Card renders properly", () => {
  beforeEach(() => render(<Card>Hello!</Card>));

  it("renders the Card children", () => {
    expect(screen.queryByText("Hello!")).toBeVisible();
  });
});
