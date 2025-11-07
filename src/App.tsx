import { PresentationCard } from "@components/Presentation";
import { AboutMeCard } from "./components/AboutMe";

function App() {
  return (
    <div className="my-24 mx-36 grid grid-cols-[2fr_5fr] gap-x-6">
      <PresentationCard />
      <AboutMeCard />
    </div>
  );
}

export default App;
