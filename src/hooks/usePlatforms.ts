import useData from "./useData";
import useGames from "./useGames";

export interface PlatformsType {
  id: number;
  name: string;
}

function usePlatforms() {
  const { data: platforms } = useData<PlatformsType>("platforms");
  return { platforms };
}

export default usePlatforms;
