import GithubInLogo from "@assets/github.svg?react";
import LinkedInLogo from "@assets/linkedin.svg?react";
import { Card, Divider, IconLink, Tag } from "@components/ui";
import { render, screen } from "@testing-library/react";
import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import PresentationCard from "./PresentationCard";
import PresentationListItem from "./PresentationListItem";

vi.mock("@components/ui/Card", () => {
  return {
    default: vi
      .fn()
      .mockImplementation(({ children }: { children: ReactNode }) => (
        <div>{children}</div>
      ))
  };
});

vi.mock("@components/Presentation/PresentationListItem");
vi.mock("@components/ui/Tag");
vi.mock("@components/ui/Divider");
vi.mock("@components/ui/IconLink");

describe("PresentationCard renders properly", () => {
  beforeEach(() => render(<PresentationCard />));

  afterEach(() => vi.clearAllMocks());

  it("renders a Card", () => {
    expect(Card).toHaveBeenCalledOnce();
  });

  it("renders an image", () => {
    const img = screen.getByRole("img");

    expect(img).toBeVisible();
    expect(img).toHaveAttribute("src", "/src/assets/me.jpg");
    expect(img).toHaveAttribute("alt", "Une photo de ma chienne Pichu et moi");
  });

  it("renders a title", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Emma Guilbault" })
    ).toBeVisible();
  });

  it("renders 2 tags", () => {
    // One visible and one hidden (for responsive)
    expect(Tag).toHaveBeenCalledTimes(2);

    expect(Tag).toHaveBeenCalledWith(
      { text: "Développeuse full stack", className: expect.any(String) },
      undefined
    );
    expect(Tag).toHaveBeenCalledWith(
      { text: "Dev. full stack", className: expect.any(String) },
      undefined
    );
  });

  it("renders a 2 Divider components", () => {
    // One visible and one hidden (for responsive)
    expect(Divider).toHaveBeenCalledTimes(2);
  });

  it("renders a list", () => {
    expect(screen.getByRole("list")).toBeVisible();
  });

  it("renders 3 PresentationListItem components", () => {
    expect(PresentationListItem).toHaveBeenCalledTimes(3);

    expect(PresentationListItem).toHaveBeenCalledWith(
      {
        title: "EMAIL",
        Icon: Mail,
        text: "emmaguilbault1504@gmail.com",
        className: expect.any(String)
      },
      undefined
    );
    expect(PresentationListItem).toHaveBeenCalledWith(
      {
        title: "TÉLÉPHONE",
        Icon: Phone,
        text: "06.11.69.73.57",
        className: expect.any(String)
      },
      undefined
    );
    expect(PresentationListItem).toHaveBeenCalledWith(
      {
        title: "ADRESSE",
        Icon: MapPin,
        text: "Normandie, France",
        className: expect.any(String)
      },
      undefined
    );
  });

  it("renders 2 Icon components", () => {
    expect(IconLink).toHaveBeenCalledTimes(2);

    expect(IconLink).toHaveBeenCalledWith(
      {
        href: "https://github.com/emmaGblt",
        name: "Github",
        Icon: GithubInLogo,
        className: expect.any(String)
      },
      undefined
    );
    expect(IconLink).toHaveBeenCalledWith(
      {
        href: "https://www.linkedin.com/in/emma-guilbault-078588183/",
        name: "LinkedIn",
        Icon: LinkedInLogo
      },
      undefined
    );
  });
});
