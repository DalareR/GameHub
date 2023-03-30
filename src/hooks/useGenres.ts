import useData from "./useData";

export interface GenresType {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  const { data: genres } = useData<GenresType>("genres");
  return { genres };
}

export default useGenres;
