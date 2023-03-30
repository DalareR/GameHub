import _ from "lodash";
import useData from "./useData";
import useGames from "./useGames";

export interface PlatformsType {
  id: number;
  name: string;
}

function usePlatforms() {
  const { games } = useGames();
  const platformsArray = games.map((game) =>
    game.parent_platforms.map((p) => p.platform.name)
  );

  const platforms = _.uniq(platformsArray.flat(1));
  return { platforms };
}

export default usePlatforms;
