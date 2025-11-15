import type { TSeason } from "@/types";

function getNextSeason(
  currentSeason: TSeason,
  seasons: Array<TSeason>
): TSeason {
  const currentSeasonIndex = seasons.indexOf(currentSeason);
  const numberOfSeasons = seasons.length;

  const nextSeasonIndex =
    currentSeasonIndex === numberOfSeasons - 1 ? 0 : currentSeasonIndex + 1;

  return seasons[nextSeasonIndex];
}

export { getNextSeason };
