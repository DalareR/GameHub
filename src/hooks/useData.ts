import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import ApiClient from "../services/apiClient";

export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();

    ApiClient(endpoint)
      .get("", { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    () => {
      controller.abort();
    };
  }, []);
  return { data, error, isLoading };
}
