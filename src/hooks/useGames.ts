import useData from "./useData";
import { GenresType } from "./useGenres";

interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  release: string;
  playtime: number;
  reviews_count: number;
  parent_platforms: Platform[];
  genres: GenresType[];
}

function useGames() {
  const { data: games, isLoading, error } = useData<GameType>("games");
  return { games, isLoading, error };
}

export default useGames;
