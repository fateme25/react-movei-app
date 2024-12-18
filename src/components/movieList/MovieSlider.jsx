import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
import { genreMovies } from "../../utils/genres";
import useWatchlist from "../../hooks/useWatchList";

import "./MovieSlider.css";

function MovieSlider({
  slidesPerView,
  spaceBetween,
  sliderClass,
  showInfo,
  moviesList,
}) {
  const { handleAddToWatchlist, handleRemoveFromWatchlist, watchlistStatus } =
    useWatchlist(moviesList);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={`my-10 ${sliderClass}`}
      breakpoints={{
        300: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        // 976: {
        //   slidesPerView: 5,
        //   spaceBetween: 40,
        // },
      }}
    >
      {moviesList?.map((movie) => (
        <SwiperSlide key={movie.id}>
          <motion.div
            className="movie-slide"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            {showInfo && (
              <>
                <span
                  className={`tag font-bold text-color-light-1 absolute left-0 top-0 ${
                    watchlistStatus[movie.id]
                      ? "bg-color-brand-2 bg-opacity-90"
                      : "bg-zinc-900 bg-opacity-45"
                  }  w-10 h-14 flex justify-center pt-2 cursor-pointer`}
                >
                  {watchlistStatus[movie.id] ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      fontSize="25px"
                      onClick={() => handleRemoveFromWatchlist(movie)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPlus}
                      fontSize="20px"
                      onClick={() => handleAddToWatchlist(movie)}
                    />
                  )}
                </span>
                <div className="text-left">
                  <h3 className="text-lg text-color-light-1">{movie.title}</h3>
                  <span className="text-color-grey-2 text-sm font-medium">
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
