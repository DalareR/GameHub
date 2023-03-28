import httpService from "./httpService";

export default interface GenresType {
  id: number;
  name: string;
  image_background: string;
}

export const genresService = httpService.getData("genres");
