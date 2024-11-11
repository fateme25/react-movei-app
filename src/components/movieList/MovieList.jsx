import React from "react";
import MovieSlider from "./MovieSlider";
import { useUpcoming } from "./useUpcoming";
import { useTopRated } from "./useTopRated";
import Heading from "../ui/Heading";
import Loader from "../ui/Loader";

function MovieList() {
  const { upcomingMovies, isLoadingUpcoming } = useUpcoming();
  const { topRatedMovies, isLoadingTopRated } = useTopRated();

  // Show the loader if data is loading or if the delay is still active
  if (isLoadingUpcoming && isLoadingTopRated) {
    return <Loader />;
  }
  return (
    <>
      <Heading>COMING SOON</Heading>
      <MovieSlider
        slidesPerView={5}
        spaceBetween={20}
        sliderClass="slider-fixed-size"
        showInfo={true}
        moviesList={upcomingMovies.results}
      />

      <Heading>TOP RATED</Heading>
      <MovieSlider
        slidesPerView={7}
        spaceBetween={10}
        sliderClass="slider-variable-size"
        moviesList={topRatedMovies.results}
      />
    </>
  );
}

export default MovieList;
