import PresentationCard from "@components/Presentation/PresentationCard";
import Card from "@components/ui/Card";

function App() {
  return (
    <div className="my-24 mx-36 grid grid-cols-[2fr_5fr] gap-x-6">
      <PresentationCard />
      <Card>Hello, I'm another Emma!</Card>
    </div>
  );
}

export default App;
