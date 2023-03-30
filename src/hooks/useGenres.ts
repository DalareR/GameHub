import useData from "./useData";

export interface GenresType {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  return useData<GenresType>("genres");
}

export default useGenres;
