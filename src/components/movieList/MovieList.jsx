import React from "react";
import MovieSlider from "./MovieSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MovieList() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="py-4 text-3xl font-bold text-color-light-1">
          COMING SOON
        </h2>
        <h4 className="text-color-brand-1">
          View All <FontAwesomeIcon icon={faAngleRight} />
        </h4>
      </div>
      <MovieSlider
        slidesPerView={5}
        spaceBetween={20}
        sliderClass="slider-fixed-size"
        showInfo={true}
      />

      <div className="flex justify-between items-center mt-24">
        <h2 className="py-4 text-3xl font-bold text-color-light-1">
          OPENING THIS WEEK
        </h2>
        <h4 className="text-color-brand-1">
          View All <FontAwesomeIcon icon={faAngleRight} />
        </h4>
      </div>
      <MovieSlider
        slidesPerView={7}
        spaceBetween={10}
        sliderClass="slider-variable-size"
      />
    </>
  );
}

export default MovieList