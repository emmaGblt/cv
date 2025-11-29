import LinkedInLogo from "@assets/linkedin.svg?react";
import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import IconLink from "./IconLink";

describe("IconLink renders properly", () => {
  beforeEach(() =>
    render(
      <IconLink
        href="https://www.linkedin.com/in/emma-guilbault-078588183/"
        name="LinkedIn"
        Icon={LinkedInLogo}
      />
    )
  );

  it("renders a link that opens in a new tab", () => {
    const link = screen.getByRole("link");

    expect(link).toBeVisible();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/emma-guilbault-078588183/"
    );
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("shows the name", () => {
    const link = screen.getByRole("link");

    expect(within(link).queryByText("LinkedIn")).toBeVisible();
  });

  it("shows the logo", () => {
    const svg = document.querySelector("svg");

    expect(svg).toBeVisible();
  });
});
