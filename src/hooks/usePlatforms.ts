import _ from "lodash";
import useGames from "./useGames";

function usePlatforms() {
  const { games } = useGames();
  const platformsArray = games.map((game) =>
    game.parent_platforms.map((p) => p.platform)
  );
  const platforms = _.uniqBy(platformsArray.flat(1), "name");
  return { platforms };
}

export default usePlatforms;
