import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, test } from "vitest";

import SkillsList from "./SkillsList";

describe("SkillsList renders properly", () => {
  beforeEach(() => render(<SkillsList />));

  it("renders a list and 11 liste items", () => {
    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(11);
  });

  test("each skill is represented", () => {
    expect(screen.queryByText("javascript")).toBeVisible();
    expect(screen.queryByText("typescript")).toBeVisible();
    expect(screen.queryByText("react")).toBeVisible();
    expect(screen.queryByText("python")).toBeVisible();
    expect(screen.queryByText("django")).toBeVisible();
    expect(screen.queryByText("react router")).toBeVisible();
    expect(screen.queryByText("github")).toBeVisible();
    expect(screen.queryByText("tailwindcss")).toBeVisible();
    expect(screen.queryByText("vite")).toBeVisible();
    expect(screen.queryByText("vitest")).toBeVisible();
    expect(screen.queryByText("testing library")).toBeVisible();
  });
});
