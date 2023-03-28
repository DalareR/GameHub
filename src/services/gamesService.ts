import GenresType from "./genresService";
import httpService from "./httpService";
// import { PlatformsType } from "./platformsService";

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

export const gamesService = httpService.getData("games");
