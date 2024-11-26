import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import { useMovie } from "./useMovie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

import { convertMinsToTime, formattedDate } from "../../utils/helper";
import StarRating from "../ui/StarRating";
import Loader from "../ui/Loader";
import Modal from "../ui/Modal";
import "../../styles/index.css";

function SearchResult() {
  const { movieId } = useParams();
  const { movie, isLoading, error } = useMovie(movieId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto text-color-light-1">
      {isLoading && <Loader />}
      {!isLoading && movie && (
        <>
          {/* Title */}
          <div className="flex flex-col lg:flex-row justify-between items-start pt-10 mb-8">
            <div className="movie__title">
              <h2 className="text-3xl sm:text-xl lg:text-3xl">
                {movie.title}
              </h2>
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
          <div className="grid grid-cols-3  ">
            <div className="item1  md:col-start-1 md:col-span-1 md:row-start-1 sm:col-span-1 sm:row-start-2 mt-9">
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt={movie.title}
                className="sm:w-[200px]"
              />
            </div>
            <div className="item2 bg-red-500 md:-ml-36 md:col-start-2 md:col-span-3 sm:col-span-3">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie?.videos?.results[0]?.key}`}
                width="100%"
                height="100%"
                className="order-1 lg:order-2 aspect-[16/9] md:aspect-auto md:w-full md:h-[230px]"
              />
            </div>
            <div className="item3  mt-12 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-2  sm:row-start-2  mb-10">
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
              <p className=" text-color-grey-3 text-sm md:text-base leading-7 mb-6 h-[120px] overflow-hidden">
                {movie.overview}
              </p>

              {/* Crew */}
              <ul className="crew text-sm md:text-base md:pt-6 md:leading-10">
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
          </div>

          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h3 className="font-bold text-lg">Rate the Movie</h3>
            <StarRating />
          </Modal>
        </>
      )}
    </div>
  );


  {
    /*       <div className="container mx-auto text-color-light-1">
            <div className="grid grid-cols-1 lg:grid-cols-[350px_minmax(500px,_1fr)] gap-4 sm:m-auto">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${movie?.videos?.results[0]?.key}`}
                width="100%"
                height="100%"
                className="order-1 lg:order-2 aspect-[16/9] md:aspect-auto md:w-full md:h-[230px]"
              />


              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt={movie.title}
                className="w-full order-2 lg:order-1 lg:w-[300px]"
              />
            </div>

            <div className="col-span-4 md:col-span-3 sm:col-span-5 mt-10">
              <p className="flex flex-wrap gap-4 mb-6">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="border-2 border-color-grey-2 rounded-full px-4 py-2 text-sm sm:text-base"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>


              <p className="text-justify text-color-grey-3 text-base sm:text-lg leading-7 mb-6">
                {movie.overview}
              </p>

              <ul className="crew text-xl pt-6 leading-10">
                {movie?.credits.crew?.slice(0, 2).map((person) => (
                  <li key={person.id}>
                    <span className="font-bold text-color-grey-2">
                      {person.department}:
                    </span>{" "}
                    {person.name}
                  </li>
                ))}
              </ul>

              <ul className="cast flex items-center text-xl space-x-3">
                <span className="font-bold text-color-grey-2">Stars:</span>
                {movie?.credits.cast.slice(0, 4).map((person) => (
                  <li key={person.id}>{person.name}</li>
                ))}
              </ul>
              */
  }
}

export default SearchResult;
