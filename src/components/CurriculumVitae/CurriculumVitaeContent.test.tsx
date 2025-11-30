import { render } from "@testing-library/react";
import { BookOpen, Briefcase } from "lucide-react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import type { TExperience } from "@/types";

import CurriculumVitaeContent from "./CurriculumVitaeContent";
import Experiences from "./Experiences";

vi.mock("./Experiences");

describe("CurriculumVitaeContent renders properly", () => {
  beforeEach(() => render(<CurriculumVitaeContent />));

  it("renders the Experiences component twice", () => {
    expect(Experiences).toHaveBeenCalledTimes(2);

    expect(Experiences).toHaveBeenCalledWith(
      {
        title: "Expériences",
        Icon: Briefcase,
        experiences: expect.any(Array<TExperience>)
      },
      undefined
    );

    expect(Experiences).toHaveBeenCalledWith(
      {
        title: "Formation",
        Icon: BookOpen,
        experiences: expect.any(Array<TExperience>)
      },
      undefined
    );
  });
});
