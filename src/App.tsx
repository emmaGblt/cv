import { PresentationCard } from "@components/Presentation";
import CardWithTabs from "@components/ui/CardWithTabs";
import AboutMeContent from "@components/AboutMe/AboutMeCard";
import { useState } from "react";
import type { TTheme } from "@/types";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ThemeButton } from "@/components/Theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState<TTheme>("cartoon");

  return (
    <ThemeContext value={currentTheme}>
      <div
        data-theme={currentTheme}
        className="py-24 h-dvh px-36 grid grid-cols-[2fr_5fr] gap-x-6 relative text-primary bg-background/90"
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
              content: <div>Work in progress here!</div>,
            },
            {
              value: "other",
              title: "Autre",
              content: <div>Another work in progress here!</div>,
            },
          ]}
        />
      </div>
    </ThemeContext>
  );
}

export default App;
