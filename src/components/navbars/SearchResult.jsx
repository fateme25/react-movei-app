import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useMovie } from "./useMovie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faPlus, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

import { convertMinsToTime, formattedDate } from "../../utils/helper";
import StarRating from "../ui/StarRating";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";
import "../../styles/index.css";
import useWatchlist from "../../hooks/useWatchList";

function SearchResult() {
  const { movieId } = useParams();
  const { movie, isLoading, error } = useMovie(movieId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { handleAddToWatchlist, handleRemoveFromWatchlist, watchlistStatus } =
    useWatchlist(movie);

  return (
    <div className="md:container sm:w-full mx-auto text-color-light-1 pb-9">
      {isLoading && <Loader />}
      {!isLoading && movie && (
        <>
          {/* Title */}
          <div className="flex justify-between items-start pt-10 mb-8">
            <div className="movie__title">
              <h2 className="sm:text-xl lg:text-4xl font-bold">{movie.title}</h2>
              <p className="mt-2 text-sm sm:text-base">{`${formattedDate(
                movie.release_date
              )} . ${convertMinsToTime(movie.runtime)}`}</p>
            </div>
            <div className="rating flex gap-6 text-base font-semibold leading-9">
              <div className="movie__rating">
                <p className="text-center">IMDB Rating</p>
                <FontAwesomeIcon
                  icon={solidStar}
                  color="#F6CA2A"
                  fontSize={18}
                  className="mx-2"
                />
                {movie.vote_average.toFixed(1)}{" "}
                <span className="text-color-grey-2">/ 10</span>
              </div>
              <div className="user__rating">
                <p className="text-center">Your Rating</p>
                <FontAwesomeIcon
                  icon={regularStar}
                  color="#20a4e2"
                  fontSize={18}
                  className="mx-2 cursor-pointer"
                  onClick={openModal}
                />
                Rate
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="grid grid-cols-3">
            <div className="item1 md:col-start-1 md:col-span-1 md:row-start-1 sm:col-span-1 sm:row-start-2 sm:pt-8 md:pt-0">
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt={movie.title}
                className="md:w-[270px] sm:w-[200px] aspect-auto"
              />
            </div>
            <div className="item2 md:-ml-36 md:col-start-2 md:col-span-3 sm:col-span-3">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie?.videos?.results[0]?.key}`}
                width="100%"
                height="100%"
                className="order-1 lg:order-2 aspect-video md:aspect-auto md:w-full md:h-[230px]"
              />
            </div>
            <div className="item3 mt-12 md:col-start-1 md:col-span-3 sm:col-start-2 sm:col-span-2  sm:row-start-2 mb-5 pl-2 ">
              <p className="gap-4 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="border-2 border-color-grey-2 rounded-full px-4 py-2 mx-2 text-sm sm:text-base"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
              {/* Overview */}
              <p className=" text-color-grey-3 text-sm md:text-base leading-7 mb-10 md:h-full sm:h-[140px] overflow-hidden">
                <h2 className="text-color-light-1 font-bold text-3xl pb-5">
                  Overview
                </h2>
                {movie.overview}
              </p>
            </div>
          </div>
          {/* Crew */}

          <div className="flex justify-between md:flex-nowrap sm:flex-wrap sm:gap-5 sm:pt-6">
            <div className="sm:basis-full">
              <ul className="crew text-sm md:text-base md:mt-2 md:leading-10">
                {movie?.credits.crew?.slice(0, 2).map((person) => (
                  <li key={person.id}>
                    <span className="font-bold text-color-grey-2">
                      {person.department}:
                    </span>{" "}
                    {person.name}
                  </li>
                ))}
              </ul>
              {/* Cast */}
              <ul className="flex text-sm md:text-base">
                <span className="font-bold text-color-grey-2 pr-2">Stars:</span>
                <li className="pr-1">
                  {movie?.credits.cast
                    .slice(0, 4)
                    .map((person) => person.name)
                    .join(", ")}
                </li>
              </ul>
            </div>

            <div className="bg-color-brand-2 text-2xl text-color-light-1 md:w-96 h-16 rounded-full flex justify-center items-center sm:w-full cursor-pointer">
              <div className="pr-5">
                {watchlistStatus[movie.id] ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    fontSize="25px"
                    onClick={() => handleRemoveFromWatchlist(movie)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faPlus}
                    fontSize="26px"
                    onClick={() => handleAddToWatchlist(movie)}
                  />
                )}
              </div>
              <span>
                {watchlistStatus[movie.id]
                  ? "In watchlist"
                  : "Add to watchlist"}
              </span>
            </div>
          </div>
          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h3 className="font-bold text-lg">Rate the Movie</h3>
            <StarRating onClose={closeModal} />
          </Modal>
        </>
      )}
    </div>
  );
}
{
  /* grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-5 lg:gap-[40rem]*/
} 
export default SearchResult;
