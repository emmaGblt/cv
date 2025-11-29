import { PresentationCard } from "@components/Presentation";
import { CardWithTabs } from "@components/ui";
import { useState } from "react";

import { AboutMeContent } from "@/components/AboutMe";
import { ThemeButton } from "@/components/Theme";
import { ThemeContext } from "@/contexts/ThemeContext";
import type { TTheme } from "@/types";

import { CurriculumVitaeContent } from "./components/CurriculumVitae";
import { cn } from "./utils/classes";

function App() {
  const [currentTheme, setCurrentTheme] = useState<TTheme>("neomorphism");

  return (
    <ThemeContext value={currentTheme}>
      <div data-theme={currentTheme} className="min-h-dvh">
        <div
          className={cn(
            "relative flex min-h-dvh flex-col gap-8 px-6 py-21 text-sm md:px-20 md:text-base lg:px-30 xl:grid xl:grid-cols-[2fr_5fr]",
            "cartoon:text-primary cartoon:bg-background",
            "neo:text-black/90 neo:bg-background"
          )}
        >
          <ThemeButton updateTheme={setCurrentTheme} />
          <PresentationCard />
          <CardWithTabs
            defaultValue="about-me"
            tabs={[
              {
                value: "about-me",
                title: "À propos",
                content: <AboutMeContent />
              },
              {
                value: "resume",
                title: "Mon CV",
                content: <CurriculumVitaeContent />
              },
              {
                value: "other",
                title: "Autre",
                content: <div>Another work in progress here!</div>
              }
            ]}
          />
        </div>
      </div>
    </ThemeContext>
  );
}

export default App;
