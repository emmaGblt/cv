import { render, screen } from "@testing-library/react";
import { Briefcase } from "lucide-react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import ExperienceListItem from "./ExperienceListItem";
import Experiences from "./Experiences";

vi.mock("./ExperienceListItem");

describe("Experiences renders properly", () => {
  beforeEach(() =>
    render(
      <Experiences
        title="Expériences"
        Icon={Briefcase}
        experiences={[
          {
            title: "Titre 1",
            organization: "Organization 1",
            location: "Location 1",
            startDate: new Date("2024-08-01"),
            endDate: new Date("2025-11-18"),
            descriptions: ["Description 1", "Description 2"]
          },
          {
            title: "Titre 2",
            organization: "Organization 2",
            location: "Location 2",
            startDate: new Date("2023-07-10"),
            endDate: new Date("2024-08-01")
          }
        ]}
      />
    )
  );

  afterEach(() => vi.clearAllMocks());

  it("renders an Icon", () => {
    const svg = document.querySelector("svg");
    expect(svg).toBeVisible();
    expect(svg).toHaveClass("lucide lucide-briefcase");
  });

  it("renders a heading of level 3", () => {
    const heading = screen.getByRole("heading", {
      level: 3,
      name: "Expériences"
    });
    expect(heading).toBeVisible();
  });

  it("renders a list", () => {
    expect(screen.getByRole("list")).toBeVisible();
  });

  it("renders the ExperienceListItem component", () => {
    expect(ExperienceListItem).toHaveBeenCalledTimes(2);
    expect(ExperienceListItem).toHaveBeenCalledWith(
      {
        title: "Titre 1",
        organization: "Organization 1",
        location: "Location 1",
        startDate: new Date("2024-08-01"),
        endDate: new Date("2025-11-18"),
        descriptions: ["Description 1", "Description 2"]
      },
      undefined
    );
    expect(ExperienceListItem).toHaveBeenCalledWith(
      {
        title: "Titre 2",
        organization: "Organization 2",
        location: "Location 2",
        startDate: new Date("2023-07-10"),
        endDate: new Date("2024-08-01")
      },
      undefined
    );
  });
});
