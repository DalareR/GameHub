import { GameType } from "../compiler/types";
import useData from "./useData";

function useGames() {
  const { data: games, isLoading, error } = useData<GameType>("games");
  return { games, isLoading, error };
}

export default useGames;
