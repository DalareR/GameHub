import { Flex, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GamesCollection from "./components/GamesCollection";
import Genres from "./components/Genres";
import NavBar from "./components/NavBar";
import { gamesService, GameType } from "./services/gamesService";
import GenresType, { genresService } from "./services/genresService";
import { platformsService, PlatformsType } from "./services/platformsService";
import _ from "lodash";

function App() {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [error, setError] = useState("");
  const [genres, setGenres] = useState<GenresType[]>([]);
  const [games, setGames] = useState<GameType[]>([]);
  const [platforms, setPlatforms] = useState<PlatformsType[]>([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchInput, setSearchInput] = useState("");

  console.log(games);

  useEffect(() => {
    genresService
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message));
    gamesService
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
    platformsService
      .then((res) => setPlatforms(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  const filterSearch = !searchInput
    ? games
    : games.filter((game) =>
        game.name
          .toLowerCase()
          .replace(/\s/g, "")
          .startsWith(searchInput.toLowerCase().replace(/\s/g, ""))
      );

  const filterGenre = !selectedGenre
    ? filterSearch
    : filterSearch.filter((game) =>
        game.genres.map((genre) => genre.name).includes(selectedGenre)
      );

  function handleGenreSelect(genre: string) {
    genre === "All Genres" || selectedGenre === genre
      ? setSelectedGenre("")
      : setSelectedGenre(genre);
  }

  function handleSearchChange(value: string) {
    setSearchInput(value);
  }

  return (
    <div className="App">
      <NavBar searchInput={searchInput} onSearchChange={handleSearchChange} />
      <Flex mt="30px" direction={isLargerThan700 ? "row" : "column"}>
        <Genres
          genres={genres}
          onGenreSelect={handleGenreSelect}
          selectedGenre={selectedGenre}
        />
        <GamesCollection games={filterGenre} platforms={platforms} />
      </Flex>
    </div>
  );
}

export default App;
