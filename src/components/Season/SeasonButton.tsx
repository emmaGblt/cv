import { SeasonContext } from "@contexts/SeasonContext";
import type { TSeason } from "@/types";
import { cn } from "@utils/classes";
import { Flower2, Leaf, Snowflake, Sun, type LucideIcon } from "lucide-react";
import { use } from "react";
import { getNextSeason } from "@/utils/seasons";

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
  const season = use(SeasonContext);
  const SeasonIcon = SEASON_ICONS[season];

  const onSeasonChange = () => {
    const nextSeason = getNextSeason(season, ORDERED_SEASONS);
    updateSeason(nextSeason);
  };

  // ADD ANIMATION ON ICON AND TEXT

  return (
    <button
      type="button"
      onClick={onSeasonChange}
      className={cn(
        "z-10 cursor-pointer fixed top-6 right-8 min-w-[120px]",
        "bg-white  border border-gray-400 py-2 px-4 rounded-3xl text-sm flex items-center gap-x-2"
      )}
    >
      <SeasonIcon className="size-4 shrink-0" />
      {SEASON_NAMES[season]}
    </button>
  );
}

export default SeasonButton;
