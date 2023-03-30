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
import { GenresType } from "../compiler/types";
import ListSkeleton from "./ListSkeleton";

interface GenresProps {
  genres: GenresType[];
  selectedGenre: string;
  isLoading: boolean;
  onGenreSelect: (genre: string) => void;
}

export default function Genres({
  genres,
  onGenreSelect,
  selectedGenre,
  isLoading,
}: GenresProps) {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const { colorMode } = useColorMode();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Flex direction="column">
      <Text fontSize="3xl">Genres</Text>
      {/* for mobile view */}
      <Select
        onChange={(e) => onGenreSelect(e.target.value)}
        display={isLargerThan700 ? "none" : "block"}
      >
        <option defaultChecked value="All Genres">
          All Genres
        </option>
        {genres.map((genre) => (
          <option value={genre.name} key={genre.id}>
            {genre.name}
          </option>
        ))}
      </Select>
      {/* for desktop view */}
      <UnorderedList
        listStyleType={"none"}
        margin="0"
        mr={"25px"}
        width="200px"
        display={isLargerThan700 ? "block" : "none"}
      >
        {isLoading
          ? skeletons.map((skeleton) => <ListSkeleton key={skeleton} />)
          : genres.map((genre) => (
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
