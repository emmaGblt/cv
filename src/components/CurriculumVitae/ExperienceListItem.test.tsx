import { cleanup, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { getStringPeriod } from "@/utils/date";

import ExperienceListItem from "./ExperienceListItem";

describe("ExperienceListItem renders properly", () => {
  beforeEach(() =>
    render(
      <ExperienceListItem
        title="Développeuse font-end"
        organization="Carbo"
        location="Normandie (remote)"
        startDate={new Date("2024-08-01")}
        endDate={new Date("2025-11-18")}
        descriptions={["Description 1", "Description 2"]}
      />
    )
  );

  it("renders a general list item", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems[0].parentElement?.parentElement?.tagName).toBe("BODY");
  });

  it("renders a heading of level 4 with the experience title", () => {
    expect(
      screen.getByRole("heading", { level: 4, name: "Développeuse font-end" })
    ).toBeVisible();
  });

  it("shows the organization name", () => {
    expect(screen.queryByText("Carbo")).toBeVisible();
  });

  it("shows the location", () => {
    expect(screen.queryByText("Normandie (remote)")).toBeVisible();
  });

  it("shows the period (short month + numeric year)", () => {
    const startDate = new Date("2024-08-01");
    const endDate = new Date("2025-11-18");

    const period = getStringPeriod(startDate, endDate, {
      month: "short",
      year: "numeric"
    });

    expect(screen.queryByText(period)).toBeVisible();
  });

  it("shows the period (only numeric year)", () => {
    cleanup();
    const { queryByText, debug } = render(
      <ExperienceListItem
        title="Développeuse font-end"
        organization="Carbo"
        location="Normandie (remote)"
        startDate={new Date("2024-08-01")}
        endDate={new Date("2025-11-18")}
        descriptions={["Description 1", "Description 2"]}
        showOnlyDateYear
      />
    );

    const startDate = new Date("2024-08-01");
    const endDate = new Date("2025-11-18");

    const period = getStringPeriod(startDate, endDate, {
      year: "numeric"
    });

    debug();

    expect(queryByText(period)).toBeVisible();
  });

  it("shows the descriptions", () => {
    const descriptionsList = screen.getByRole("list");

    expect(descriptionsList).toBeVisible();

    const descriptionsListItems =
      within(descriptionsList).getAllByRole("listitem");
    expect(descriptionsListItems.length).toBe(2);

    expect(within(descriptionsList).queryByText("Description 1")).toBeVisible();
    expect(within(descriptionsList).queryByText("Description 2")).toBeVisible();
  });

  it("does not render a list if no description is provided", () => {
    cleanup();
    const { queryByRole } = render(
      <ExperienceListItem
        title="Développeuse font-end"
        organization="Carbo"
        location="Normandie (remote)"
        startDate={new Date("2024-08-01")}
        endDate={new Date("2025-11-18")}
      />
    );
    expect(queryByRole("list")).toBeNull();
  });
});
