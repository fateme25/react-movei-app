import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../services/apiMovies";

export function useMovie(movieId) {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchMovies", movieId],
    queryFn: () => getMovieDetails(movieId),
  });

  return { movie, isLoading, error };
}
