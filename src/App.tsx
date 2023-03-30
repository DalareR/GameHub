import { Flex, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import GamesCollection from "./components/GamesCollection";
import Genres from "./components/Genres";
import NavBar from "./components/NavBar";
import _ from "lodash";
import useGames from "./hooks/useGames";
import useGenres from "./hooks/useGenres";
import usePlatforms from "./hooks/usePlatforms";

function App() {
  const { data: games, isLoading, error } = useGames();
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [searchInput, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

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
          isLoading={isLoading}
        />
        <GamesCollection
          games={filterGenre}
          platforms={platforms}
          isLoading={isLoading}
          error={error}
        />
      </Flex>
    </div>
  );
}

export default App;
