import useData from "./useData";

export interface PlatformsType {
  id: number;
  name: string;
}

function usePlatforms() {
  return useData<PlatformsType>("platforms");
}

export default usePlatforms;
