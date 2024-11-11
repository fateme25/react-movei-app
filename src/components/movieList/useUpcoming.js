import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovie } from "../../services/apiMovies";

export function useUpcoming() {
  const {
    data: upcomingMovies,
    isLoading:isLoadingUpcoming,
    error,
  } = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingMovie,
  });

  return { upcomingMovies, isLoadingUpcoming };
}
