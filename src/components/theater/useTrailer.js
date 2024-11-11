import { useQuery } from "@tanstack/react-query";
import { getPlayingNow, getMovieDetails } from "../../services/apiMovies";

export function useTrailer(selectedMovieId) {
  const {
    data: trailers,
    isLoading: isLoadingTrailers,
    error,
  } = useQuery({
    queryKey: ["trailers"],
    queryFn: getPlayingNow,
  });

  const { data: selectedMovieDetails, isLoading: isLoadingDetails } = useQuery({
    queryKey: ["movieDetails", selectedMovieId],
    queryFn: () => getMovieDetails(selectedMovieId),
    enabled: !!selectedMovieId,
  });

  return {
    trailers,
    isLoadingTrailers,
    selectedMovieDetails,
    isLoadingDetails,
  };
}
