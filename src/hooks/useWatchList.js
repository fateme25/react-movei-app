import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useFirestore } from "./useFirestore";
import { toast } from "react-hot-toast";

const useWatchlist = (input) => {
  const { currentUser } = useAuth();
  const { addToWatchlist, checkIfInWatchList, removeFromWatchlist } =
    useFirestore();
  const [watchlistStatus, setWatchlistStatus] = useState({});

  // Ensure input is always an array for consistency
  const moviesList = Array.isArray(input) ? input : [input];

  // Helper function to check if a movie is in the watchlist
  const checkMovieInWatchlist = async (movieId) => {
    if (!currentUser) return false;
    return await checkIfInWatchList(currentUser?.uid, movieId);
  };

  // Update the status of movies in the list only when necessary
  useEffect(() => {
    const updateWatchlistStatus = async () => {
      if (!moviesList.length || !currentUser) return;

      // Only update if the status hasn't been set yet or it's different
      const statusPromises = moviesList.map(async (movie) => {
        const isInWatchlist = await checkMovieInWatchlist(movie?.id);
        return { [movie?.id]: isInWatchlist };
      });

      const statuses = await Promise.all(statusPromises);
      const combinedStatus = statuses.reduce(
        (acc, curr) => ({ ...acc, ...curr }),
        {}
      );

      // If the status has changed, update state
      setWatchlistStatus((prevStatus) => {
        const newStatus = { ...prevStatus, ...combinedStatus };
        if (JSON.stringify(newStatus) !== JSON.stringify(prevStatus)) {
          return newStatus;
        }
        return prevStatus;
      });
    };

    updateWatchlistStatus();
  }, [moviesList, currentUser]);

  // Add a movie to the watchlist
  const handleAddToWatchlist = async (movie) => {
    if (!currentUser) {
      toast.error("You must be logged in to add to your watchlist.");
      return false;
    }

    const movieId = movie?.id.toString();
    const movieData = {
      id: movieId,
      title: movie?.title,
      poster_path: movie?.poster_path,
      release_date: movie?.release_date,
      vote_average: movie?.vote_average,
      genre_ids: movie?.genre_ids || movie?.genres,
      overview: movie?.overview,
    };

    try {
      const isAlreadyInWatchlist = await checkIfInWatchList(
        currentUser?.uid,
        movieId
      );

      if (isAlreadyInWatchlist) {
        toast.error("This item is already in your watchlist.", {
          duration: 9000,
          style: { color: "#000000" },
        });
        return false;
      }

      await addToWatchlist(currentUser?.uid, movieId, movieData);
      toast.success("Added to watchlist");

      // Avoid unnecessary re-renders
      setWatchlistStatus((prev) => ({ ...prev, [movieId]: true }));

      return true;
    } catch (error) {
      toast.error("Error adding to watchlist: " + error.message);
      return false;
    }
  };

  // Remove movie from watchlist
  const handleRemoveFromWatchlist = async (movie) => {
    const movieId = movie.id.toString(); // Get the movie ID from the movie object
    if (!currentUser) {
      toast.error("You must be logged in to remove from your watchlist.");
      return false;
    }

    try {
      await removeFromWatchlist(currentUser?.uid, movieId);
      toast.success("Removed from watchlist");

      setWatchlistStatus((prev) => ({ ...prev, [movieId]: false })); // Set status to false

      return true;
    } catch (error) {
      toast.error("Error while deleting: " + error.message);
      return false;
    }
  };

  return { handleAddToWatchlist, handleRemoveFromWatchlist, watchlistStatus };
};

export default useWatchlist;
