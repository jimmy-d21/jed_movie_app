import { useEffect, useState } from "react";
import { fetchMovies } from "./api";

const useFetch = <T>(
  fetchFunction: (params?: any) => Promise<T>,
  autoFetch = true,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (params?: any) => {
    try {
      setLoading(true);
      setError(null);

      const results = await fetchMovies(params);
      setData(results);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch]);

  return {
    data,
    loading,
    error,
  };
};
