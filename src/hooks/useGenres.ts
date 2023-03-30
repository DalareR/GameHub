import _ from "lodash";
import useGames from "./useGames";

function useGenres() {
  const { games } = useGames();
  const genresArray = games.map((game) => game.genres.map((genre) => genre));
  const genres = _.uniqBy(genresArray.flat(1), "name");

  // console.log(genres);
  return { genres };
}

export default useGenres;
