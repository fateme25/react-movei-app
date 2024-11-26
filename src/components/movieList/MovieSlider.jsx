import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

import "./MovieSlider.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import {genreMovies} from "../../utils/genres"

function MovieSlider({
  slidesPerView,
  spaceBetween,
  sliderClass,
  showInfo,
  moviesList,
}) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={`my-10 ${sliderClass}`}
    >
      {moviesList?.map((movie) => (
        <SwiperSlide key={movie.title}>
          <motion.div
            className={`movie-slide`}
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            {showInfo && (
              <>
                <span className="tag font-bold text-color-light-1 absolute left-0 top-0 bg-zinc-900 bg-opacity-45  w-10 h-14 flex justify-center pt-2 cursor-pointer">
                  <FontAwesomeIcon icon={faPlus} fontSize={"20px"} />
                </span>
                <div className="text-left">
                  <h3 className="text-lg text-color-light-1">{movie.title}</h3>
                  <span className="text-color-grey-2 text-sm font-medium">
                    {" "}
                    {`${movie.release_date} ‧ ${movie.genre_ids
                      .slice(0, 2)
                      .map((id) => genreMovies[id])
                      .join(",")} ‧ ${movie.vote_average.toFixed(1)}`}
                  </span>
                </div>
              </>
            )}
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSlider;
