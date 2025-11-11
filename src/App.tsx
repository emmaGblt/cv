import { PresentationCard } from "@components/Presentation";
import CardWithTabs from "./components/ui/CardWithTabs";
import AboutMeContent from "./components/AboutMe/AboutMeCard";

function App() {
  return (
    <div className="mt-24 mb-12 mx-36 grid grid-cols-[2fr_5fr] gap-x-6">
      <PresentationCard />
      <CardWithTabs
        defaultValue="about-me"
        tabs={[
          { value: "about-me", title: "À propos", content: <AboutMeContent /> },
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
  );
}

export default App;
