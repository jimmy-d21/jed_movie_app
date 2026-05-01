import { useCallback, useEffect, useState } from "react";

const useFetch = <T>(
  fetchFunction: (params?: any) => Promise<T>,
  autoFetch = true,
) => {
  const [data, setData] = useState<T | null>(null);
  const [trendingMovies, setTrendingMovies] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (params?: any) => {
      try {
        setLoading(true);
        setError(null);
        const results = await fetchFunction(params);
        setData(results);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    },
    [fetchFunction],
  );

  const fetchPopularMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const results = await fetchFunction({ query: "" });
      if (Array.isArray(results)) {
        const sortedByPopularity = [...(results as any[])].sort(
          (a, b) => b.vote_count - a.vote_count,
        );

        setTrendingMovies(sortedByPopularity as unknown as T);
      } else {
        setTrendingMovies(results);
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An error occurred"));
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);
  useEffect(() => {
    if (autoFetch) {
      fetchData({ query: "" });
    }
  }, [autoFetch, fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    trendingMovies,
    fetchPopularMovies,
  };
};

export default useFetch;
