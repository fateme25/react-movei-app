import { useQuery } from "@tanstack/react-query";
import { getTopRatedMovie } from "../../services/apiMovies";

export function useTopRated() {
  const {
    data: topRatedMovies,
    isLoading: isLoadingTopRated,
    error,
  } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovie,
  });

  return { topRatedMovies, isLoadingTopRated };
}
