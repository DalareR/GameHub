import {
  ListItem,
  UnorderedList,
  Image,
  Flex,
  theme,
  Text,
  useColorMode,
  useMediaQuery,
  Select,
} from "@chakra-ui/react";
import GenresType from "../services/genresService";

interface GenresProps {
  genres: GenresType[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

export default function Genres({
  genres,
  onGenreSelect,
  selectedGenre,
}: GenresProps) {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Flex direction="column">
      <Text fontSize="3xl">Genres</Text>
      <Select
        onChange={(e) => onGenreSelect(e.target.value)}
        display={isLargerThan700 ? "none" : "block"}
      >
        <option defaultChecked value="All Genres">
          All Genres
        </option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.name}>
            <Flex align={"center"}>
              <Image
                width={"30px"}
                height={"30px"}
                objectFit={"cover"}
                borderRadius="10px"
                mr={"5px"}
                src={genre.image_background}
              />{" "}
              {genre.name}
            </Flex>
          </option>
        ))}
      </Select>
      <UnorderedList
        listStyleType={"none"}
        margin="0"
        mr={"25px"}
        width="200px"
        display={isLargerThan700 ? "block" : "none"}
      >
        {genres.map((genre) => (
          <ListItem
            key={genre.id}
            mt="5px"
            cursor={"pointer"}
            onClick={() => onGenreSelect(genre.name)}
            bg={
              selectedGenre === genre.name
                ? colorMode === "dark"
                  ? theme.colors.gray[600]
                  : theme.colors.gray[200]
                : ""
            }
            borderRadius="3px"
            padding={"5px"}
            style={{ transition: "all .4s" }}
            _hover={{ transform: "scale(1.1)" }}
          >
            <Flex align={"center"}>
              <Image
                width={"30px"}
                height={"30px"}
                objectFit={"cover"}
                borderRadius="10px"
                mr={"5px"}
                src={genre.image_background}
              />{" "}
              {genre.name}
            </Flex>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
}
