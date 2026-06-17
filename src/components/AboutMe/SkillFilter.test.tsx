import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, test, vi } from "vitest";

import type { TSKILL_TYPE } from "@/types/skills";

import SkillFilter from "./SkillFilter";

describe("SkillFilter main structure", () => {
  beforeEach(() =>
    render(<SkillFilter filter="none" handleFilterChange={vi.fn()} />)
  );

  it("renders a radiogroup", () => {
    const radiogroup = screen.getByLabelText("Filtre :");

    expect(radiogroup).toBeVisible();
    expect(radiogroup.role).toBe("radiogroup");
  });

  it("renders 4 radio inputs (3 filters + None)", () => {
    const radioInputs = screen.queryAllByRole("radio");

    expect(radioInputs.length).toBe(4);
  });

  it("renders 3 different filters", () => {
    const frontendRadio = screen.getByLabelText("frontend", {
      selector: "input"
    });
    const backendRadio = screen.getByLabelText("backend", {
      selector: "input"
    });
    const devopsRadio = screen.getByLabelText("devops", {
      selector: "input"
    });

    expect(frontendRadio).toBeVisible();
    expect(backendRadio).toBeVisible();
    expect(devopsRadio).toBeVisible();
  });
});

describe("SkillFilter filter", () => {
  const mockedHandleFilterChange = vi.fn();

  const user = userEvent.setup();

  test.each([
    ["frontend", "frontend"],
    ["backend", "backend"],
    ["devops", "devops"],
    ["none", "None"]
  ])(
    "renders with the %s filter selected when passed as a prop",
    (filterValue, filterName) => {
      const { getByLabelText } = render(
        <SkillFilter
          filter={filterValue as TSKILL_TYPE}
          handleFilterChange={mockedHandleFilterChange}
        />
      );

      const radio = getByLabelText(filterName, {
        selector: "input"
      }) as HTMLInputElement;

      expect(radio.checked).toBeTruthy();
    }
  );

  test.each([
    ["frontend", "frontend"],
    ["backend", "backend"],
    ["devops", "devops"]
  ])(
    "calls handleFilterChange with %s filter value",
    async (filterValue, filterName) => {
      const { getByLabelText } = render(
        <SkillFilter
          filter="none"
          handleFilterChange={mockedHandleFilterChange}
        />
      );

      const radio = getByLabelText(filterName, {
        selector: "input"
      }) as HTMLInputElement;

      await user.click(radio);

      expect(mockedHandleFilterChange).toHaveBeenCalledWith(filterValue);
    }
  );
});

describe("SkillFilter filter deletion", () => {
  const mockedHandleFilterChange = vi.fn();

  const user = userEvent.setup();

  it("does not show the delete button when no filter is selected", () => {
    const { queryByRole } = render(
      <SkillFilter
        filter="none"
        handleFilterChange={mockedHandleFilterChange}
      />
    );

    expect(queryByRole("button", { name: "delete-filter" })).toBeNull();
  });

  it("shows the delete button when a filter is selected", () => {
    const { getByRole } = render(
      <SkillFilter
        filter="frontend"
        handleFilterChange={mockedHandleFilterChange}
      />
    );

    expect(getByRole("button", { name: "delete-filter" })).toBeVisible();
  });

  it("calls handleFilterChange when the delete button is clicked", async () => {
    const { getByRole } = render(
      <SkillFilter
        filter="frontend"
        handleFilterChange={mockedHandleFilterChange}
      />
    );

    const deleteButton = getByRole("button", { name: "delete-filter" });

    await user.click(deleteButton);

    expect(mockedHandleFilterChange).toHaveBeenCalledWith("none");
  });
});
