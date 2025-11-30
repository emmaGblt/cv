import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import AnimatedSkillItem from "./AnimatedSkillItem";

describe("AnimatedSkillItem renders properly", () => {
  beforeEach(() =>
    render(
      <AnimatedSkillItem
        svgSrc="src/assets/react.svg"
        href="https://fr.react.dev/"
        alt="Logo de la librairie React"
        name="react"
      />
    )
  );

  it("renders a list item", () => {
    expect(screen.queryByRole("listitem")).toBeVisible();
  });

  it("renders a link", () => {
    const listItem = screen.queryByRole("listitem");
    const link = within(listItem!).getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute("href", "https://fr.react.dev/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("shows the name", () => {
    expect(screen.queryByText("react")).toBeVisible();
  });

  it("shows the svg", () => {
    const svg = screen.getByRole("img");

    expect(svg).toBeVisible();
    expect(svg).toHaveAttribute("src", "src/assets/react.svg");
    expect(svg).toHaveAttribute("alt", "Logo de la librairie React");
  });
});
