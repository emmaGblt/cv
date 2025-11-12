import { SeasonContext } from "@/contexts/SeasonContext";
import type { TSeason } from "@/types";
import { use } from "react";

type SeasonButtonProps = {
  updateSeason: (newSeason: TSeason) => void;
};

const ORDERED_SEASONS: Array<TSeason> = [
  "winter",
  "spring",
  "summer",
  "autumn",
];

function SeasonButton({ updateSeason }: SeasonButtonProps) {
  const season = use(SeasonContext);

  const onSeasonChange = () => {
    const currentSeasonIndex = ORDERED_SEASONS.indexOf(season);
    const numberOfSeasons = ORDERED_SEASONS.length;

    if (currentSeasonIndex >= 0) {
      const nextSeasonIndex =
        currentSeasonIndex === numberOfSeasons - 1 ? 0 : currentSeasonIndex + 1;

      if (nextSeasonIndex >= 0 && nextSeasonIndex < numberOfSeasons) {
        updateSeason(ORDERED_SEASONS[nextSeasonIndex]);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={onSeasonChange}
      className="absolute top-0 right-0"
    >
      {season}
    </button>
  );
}

export default SeasonButton;
