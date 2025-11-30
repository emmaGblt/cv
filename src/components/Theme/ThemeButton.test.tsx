import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeContext } from "@/contexts/ThemeContext";

import ThemeButton from "./ThemeButton";

describe("ThemeButton renders properly", () => {
  const mockUpdateTheme = vi.fn();
  const user = userEvent.setup();

  beforeEach(() =>
    render(
      <ThemeContext value="cartoon">
        <ThemeButton updateTheme={mockUpdateTheme} />
      </ThemeContext>
    )
  );

  it("renders a button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("type", "button");
  });

  it("renders the cartoon theme by default (name + Icon)", () => {
    expect(screen.queryByText("Cartoon")).toBeVisible();

    const svg = document.querySelector("svg");
    expect(svg).toBeVisible();
    expect(svg).toHaveClass("lucide lucide-party-popper");
  });

  it("calls the function when the button is clicked", async () => {
    const button = screen.getByRole("button");
    expect(mockUpdateTheme).not.toHaveBeenCalled();

    await user.click(button);

    expect(mockUpdateTheme).toHaveBeenCalledExactlyOnceWith("neomorphism");
  });
});
