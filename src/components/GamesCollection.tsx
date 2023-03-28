import {
  Card,
  Text,
  CardBody,
  Image,
  Stack,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  theme,
  useMediaQuery,
  CardHeader,
} from "@chakra-ui/react";
import _ from "lodash";
import { useState } from "react";
import { GameType } from "../services/gamesService";
import { PlatformsType } from "../services/platformsService";

interface GameCollectionProps {
  games: GameType[];
  platforms: PlatformsType[];
}

export default function GamesCollection({
  games,
  platforms,
}: GameCollectionProps) {
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const [orderBy, setOrderBy] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState("");

  const platformFilteredGames =
    !selectedPlatform || selectedPlatform === "Select Platform"
      ? games
      : games.filter((game) =>
          game.platforms.map((p) => p.platform.name).includes(selectedPlatform)
        );

  const orderFilteredGames = !orderBy
    ? platformFilteredGames
    : _.orderBy(platformFilteredGames, `${orderBy}`, "desc");

  function handleOrderBy(order: string) {
    setOrderBy(order);
  }

  function handlePlatformSelect(platform: string) {
    setSelectedPlatform(platform);
  }

  return (
    <Flex direction="column" width={"100%"}>
      <Flex mt={"25px"} width={isLargerThan700 ? "50%" : "100%"}>
        <Select
          mr={"15px"}
          onChange={(e) => handlePlatformSelect(e.target.value)}
        >
          <option defaultChecked value="Select Platform">
            Select Platform
          </option>
          {platforms.map((platform) => (
            <option key={platform.id} value={platform.name}>
              {platform.name}
            </option>
          ))}
        </Select>
        <Select onChange={(e) => handleOrderBy(e.target.value)}>
          <option value="">Select Order</option>
          <option value="rating">Order by: Rating</option>
          <option value="playtime">Order by: Playtime</option>
          <option value="released">Order by: Release</option>
          <option value="reviews_count">Order by: Reviews</option>
        </Select>
      </Flex>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        mt={"25px"}
      >
        {orderFilteredGames.length === 0 ? (
          <Text fontSize="4xl">No Games</Text>
        ) : (
          orderFilteredGames.map((game) => (
            <Card
              maxW="sm"
              key={game.id}
              style={{ transition: "all .4s" }}
              _hover={{ transform: "scale(1.04)" }}
            >
              <Image
                minW="200px"
                maxW="400px"
                minH="200px"
                maxH="200px"
                objectFit="cover"
                src={game.background_image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={"center"}>
                    {game.name}
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          ))
        )}
      </SimpleGrid>
    </Flex>
  );
}
