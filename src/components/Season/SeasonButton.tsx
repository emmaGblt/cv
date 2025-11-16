import { SeasonContext } from "@contexts/SeasonContext";
import type { TSeason } from "@/types";
import { cn } from "@utils/classes";
import { Flower2, Leaf, Snowflake, Sun, type LucideIcon } from "lucide-react";
import { use } from "react";
import { getNextSeason } from "@/utils/seasons";
import "./index.css";

type SeasonButtonProps = {
  updateSeason: (newSeason: TSeason) => void;
};

const ORDERED_SEASONS: Array<TSeason> = [
  "winter",
  "spring",
  "summer",
  "autumn",
];

const SEASON_NAMES: Record<TSeason, string> = {
  winter: "Hiver",
  spring: "Printemps",
  summer: "Été",
  autumn: "Automne",
};

const SEASON_ICONS: Record<TSeason, LucideIcon> = {
  winter: Snowflake,
  spring: Flower2,
  summer: Sun,
  autumn: Leaf,
};

function SeasonButton({ updateSeason }: SeasonButtonProps) {
  const currentSeason = use(SeasonContext);
  const SeasonIcon = SEASON_ICONS[currentSeason];

  const onSeasonChange = () => {
    const nextSeason = getNextSeason(currentSeason, ORDERED_SEASONS);
    updateSeason(nextSeason);
  };

  return (
    <button
      type="button"
      onClick={onSeasonChange}
      className={cn(
        "z-10 cursor-pointer fixed top-6 right-8 min-w-[120px]",
        "bg-background-2 border-3 border-primary py-2.5 px-4.5 font-semibold shadow-sm shadow-primary/70 rounded-xl"
      )}
    >
      <span
        className="slideInSeason flex items-center gap-x-2"
        key={currentSeason}
      >
        <SeasonIcon className="size-5 shrink-0" />
        {SEASON_NAMES[currentSeason]}
      </span>
    </button>
  );
}

export default SeasonButton;
