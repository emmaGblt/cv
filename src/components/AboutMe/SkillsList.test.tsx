import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, test, vi } from "vitest";

import SkillFilter from "./SkillFilter";
import SkillsList from "./SkillsList";

vi.mock("@components/AboutMe/SkillFilter");

describe("SkillsList renders properly", () => {
  beforeEach(() => render(<SkillsList />));

  afterEach(() => vi.clearAllMocks());

  it("renders a list and 11 list items", () => {
    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(21);
  });

  it("renders the SkillFilter component", () => {
    expect(SkillFilter).toHaveBeenCalledOnce();
    expect(SkillFilter).toHaveBeenCalledWith(
      {
        filter: "none",
        handleFilterChange: expect.any(Function)
      },
      undefined
    );
  });

  test("each skill is represented", () => {
    expect(screen.queryByText("javascript")).toBeVisible();
    expect(screen.queryByText("typescript")).toBeVisible();
    expect(screen.queryByText("react")).toBeVisible();
    expect(screen.queryByText("python")).toBeVisible();
    expect(screen.queryByText("django")).toBeVisible();
    expect(screen.queryByText("react router")).toBeVisible();
    expect(screen.queryByText("github")).toBeVisible();
    expect(screen.queryByText("gitlab")).toBeVisible();
    expect(screen.queryByText("tailwindcss")).toBeVisible();
    expect(screen.queryByText("vite")).toBeVisible();
    expect(screen.queryByText("vitest")).toBeVisible();
    expect(screen.queryByText("testing library")).toBeVisible();
    expect(screen.queryByText("aws")).toBeVisible();
    expect(screen.queryByText("docker")).toBeVisible();
    expect(screen.queryByText("kubernetes")).toBeVisible();
    expect(screen.queryByText("terraform")).toBeVisible();
    expect(screen.queryByText("ansible")).toBeVisible();
    expect(screen.queryByText("prometheus")).toBeVisible();
    expect(screen.queryByText("grafana")).toBeVisible();
    expect(screen.queryByText("pytest")).toBeVisible();
    expect(screen.queryByText("storybook")).toBeVisible();
  });
});
