import { render, screen } from "@testing-library/react";
import { Mail } from "lucide-react";
import { beforeEach, describe, expect, it } from "vitest";

import PresentationListItem from "./PresentationListItem";

describe("PresentationListItem renders properly", () => {
  beforeEach(() =>
    render(
      <PresentationListItem
        title="Email"
        text="someone@anemail.com"
        Icon={Mail}
      />
    )
  );

  it("renders a list item", () => {
    expect(screen.getByRole("listitem")).toBeVisible();
  });

  it("shows the title", () => {
    expect(screen.getByText("Email")).toBeVisible();
  });

  it("shows the text", () => {
    expect(screen.getByText("someone@anemail.com")).toBeVisible();
  });

  it("shows the icon", () => {
    const svg = document.querySelector("svg");

    expect(svg).toBeVisible();
    expect(svg).toHaveClass("lucide lucide-mail");
  });
});
