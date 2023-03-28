import ApiClient from "./apiClient";

class HttpService {
  getData(request: string) {
    return ApiClient(request).get("");
  }
}

export default new HttpService();
