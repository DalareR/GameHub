export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GenresType {
  id: number;
  name: string;
  image_background: string;
}

export interface GameType {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  release: string;
  playtime: number;
  reviews_count: number;
  parent_platforms: Platform[];
  genres: GenresType[];
}
