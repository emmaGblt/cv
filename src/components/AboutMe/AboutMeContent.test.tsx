import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { AboutMeContent } from ".";
import SkillsList from "./SkillsList";

vi.mock("@components/AboutMe/SkillsList");

describe("AboutMeContent renders properly", () => {
  beforeEach(() => render(<AboutMeContent />));

  afterEach(() => vi.clearAllMocks());

  it("renders 4 headings of level 4", () => {
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(4);
    expect(screen.getByRole("heading", { level: 3, name: "Présentation" }));
    expect(screen.getByRole("heading", { level: 3, name: "Projets" }));
    expect(
      screen.getByRole("heading", {
        level: 3,
        name: "Ce que j'apporte à mon équipe"
      })
    );
    expect(screen.getByRole("heading", { level: 3, name: "Technologies" }));
  });

  it("renders the SkillList component", () => {
    expect(SkillsList).toHaveBeenCalledOnce();
  });
});
