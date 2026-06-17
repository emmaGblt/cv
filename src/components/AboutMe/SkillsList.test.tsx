import { render, screen } from "@testing-library/react";
import userEvent, { type UserEvent } from "@testing-library/user-event";
import { beforeEach, describe, expect, it, test } from "vitest";

import type { TSKILL_TYPE } from "@/types/skills";

import SkillsList from "./SkillsList";

async function clickOnFilter(user: UserEvent, filter: TSKILL_TYPE) {
  const radioInput = screen.getByLabelText(filter, {
    selector: "input"
  }) as HTMLInputElement;

  expect(radioInput.nodeName).toBe("INPUT");
  expect(radioInput.type).toBe("radio");

  await user.click(radioInput);
}

describe("SkillsList renders all the skills (no filter)", () => {
  beforeEach(() => render(<SkillsList />));

  it("renders a list and 26 list items", () => {
    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(26);
  });

  test.each([
    ["javascript"],
    ["typescript"],
    ["react"],
    ["python"],
    ["django"],
    ["react router"],
    ["github"],
    ["gitlab"],
    ["tailwindcss"],
    ["vite"],
    ["vitest"],
    ["testing lib."],
    ["aws"],
    ["docker"],
    ["kubernetes"],
    ["terraform"],
    ["ansible"],
    ["prometheus"],
    ["grafana"],
    ["pytest"],
    ["storybook"],
    ["PostgreSQL"],
    ["django REST"],
    ["factory boy"],
    ["radix ui"],
    ["base ui"]
  ])("%s is visible", (skill) => {
    expect(screen.queryByText(skill)).toBeVisible();
  });
});

describe("SkillsList renders properly when filtering frontend skills", () => {
  const user = userEvent.setup();

  beforeEach(() => render(<SkillsList />));

  it("returns the correct number of skills", async () => {
    await clickOnFilter(user, "frontend");

    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(11);
  });

  test.each([
    ["javascript"],
    ["typescript"],
    ["react"],
    ["react router"],
    ["tailwindcss"],
    ["vite"],
    ["vitest"],
    ["testing lib."],
    ["storybook"],
    ["radix ui"],
    ["base ui"]
  ])("%s is visible", async (skill) => {
    await clickOnFilter(user, "frontend");

    expect(screen.queryByText(skill)).toBeVisible();
  });
});

describe("SkillsList renders properly when filtering backend skills", () => {
  const user = userEvent.setup();

  beforeEach(() => render(<SkillsList />));

  it("returns the correct number of skills", async () => {
    await clickOnFilter(user, "backend");

    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(6);
  });

  test.each([
    ["python"],
    ["django"],
    ["pytest"],
    ["PostgreSQL"],
    ["django REST"],
    ["factory boy"]
  ])("%s is visible", async (skill) => {
    await clickOnFilter(user, "backend");

    expect(screen.queryByText(skill)).toBeVisible();
  });
});

describe("SkillsList renders properly when filtering devops skills", () => {
  const user = userEvent.setup();

  beforeEach(() => render(<SkillsList />));

  it("returns the correct number of skills", async () => {
    await clickOnFilter(user, "devops");

    expect(screen.getByRole("list")).toBeVisible();
    expect(screen.getAllByRole("listitem").length).toBe(9);
  });

  test.each([
    ["github"],
    ["gitlab"],
    ["aws"],
    ["docker"],
    ["kubernetes"],
    ["terraform"],
    ["ansible"],
    ["prometheus"],
    ["grafana"]
  ])("%s is visible", async (skill) => {
    await clickOnFilter(user, "devops");

    expect(screen.queryByText(skill)).toBeVisible();
  });
});
