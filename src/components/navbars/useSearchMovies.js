import { useQuery } from "@tanstack/react-query";
import { getSearchMovies } from "../../services/apiMovies";

export function useSearchMovies(query) {
  const {
    data: searchedMovie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => getSearchMovies(query),
  });


  return { searchedMovie, isLoading, error };
}
