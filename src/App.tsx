import { PresentationCard } from "@components/Presentation";
import CardWithTabs from "@components/ui/CardWithTabs";
import AboutMeContent from "@components/AboutMe/AboutMeCard";
import { useState } from "react";
import type { TTheme } from "@/types";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeButton } from "@/components/Theme";
import { cn } from "./utils/classes";
import { CurriculumVitaeCard } from "./components/CurriculumVitae";

function App() {
  const [currentTheme, setCurrentTheme] = useState<TTheme>("cartoon");

  return (
    <ThemeContext value={currentTheme}>
      <div data-theme={currentTheme} className="min-h-dvh">
        <div
          className={cn(
            "py-24 px-36 min-h-dvh grid grid-cols-[2fr_5fr] gap-x-6 relative",
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
                content: <AboutMeContent />,
              },
              {
                value: "resume",
                title: "Mon CV",
                content: <CurriculumVitaeCard />,
              },
              {
                value: "other",
                title: "Autre",
                content: <div>Another work in progress here!</div>,
              },
            ]}
          />
        </div>
      </div>
    </ThemeContext>
  );
}

export default App;
