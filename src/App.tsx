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
      <link
        rel="icon"
        type="image/png"
        href={`/${currentTheme === "cartoon" ? "cartoon" : "neo"}/favicon-96x96.png`}
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href={`/${currentTheme === "cartoon" ? "cartoon" : "neo"}/favicon.svg`}
      />
      <link
        rel="shortcut icon"
        href={`/${currentTheme === "cartoon" ? "cartoon" : "neo"}/favicon.ico`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/${currentTheme === "cartoon" ? "cartoon" : "neo"}/apple-touch-icon.png`}
      />
      <meta name="apple-mobile-web-app-title" content="Emma's CV" />
      <link
        rel="manifest"
        href={`/${currentTheme === "cartoon" ? "cartoon" : "neo"}/site.webmanifest`}
      />
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
              }
            ]}
          />
        </div>
      </div>
    </ThemeContext>
  );
}

export default App;
