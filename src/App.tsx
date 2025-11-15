import { PresentationCard } from "@components/Presentation";
import CardWithTabs from "@components/ui/CardWithTabs";
import AboutMeContent from "@components/AboutMe/AboutMeCard";
import { useState } from "react";
import type { TSeason } from "@/types";
import { SeasonContext } from "@contexts/SeasonContext";
import { SeasonButton } from "@components/Season";

function App() {
  const [currentSeason, setCurrentSeason] = useState<TSeason>("autumn");
  console.log("currentSeason", currentSeason);

  return (
    <SeasonContext value={currentSeason}>
      <div
        data-theme={currentSeason}
        className="pt-24 mp-12 px-36 grid grid-cols-[2fr_5fr] gap-x-6 relative"
      >
        <SeasonButton updateSeason={setCurrentSeason} />
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
    </SeasonContext>
  );
}

export default App;
