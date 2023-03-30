import useData from "./useData";
import { GenresType } from "./useGenres";

interface Platforms {
  platform: { id: string; name: string };
}

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  release: string;
  playtime: number;
  reviews_count: number;
  platforms: Platforms[];
  genres: GenresType[];
}

function useGames() {
  const { data: games, isLoading, error } = useData<GameType>("games");
  return { games, isLoading, error };
}

export default useGames;
