import httpService from "./httpService";

export interface PlatformsType {
  id: number;
  name: string;
}

export const platformsService = httpService.getData("platforms");
