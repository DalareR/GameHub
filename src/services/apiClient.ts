import axios from "axios";

export default function ApiClient(request: string) {
  return axios.create({
    baseURL: `https://api.rawg.io/api/${request}?key=47ed37d94d634d4ba4f1933a137c3902`,
  });
}
