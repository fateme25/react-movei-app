import { useSearchParams, useNavigate } from "react-router-dom";
import { useSearchMovies } from "./useSearchMovies";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Loader from "../ui/Loader";
import TopBar from "./topBar";
import Footer from "../ui/Footer"

function SearchMovieList() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { searchedMovie, isLoading, error } = useSearchMovies(query);
  const navigate = useNavigate();

  // const exactedMovie = searchedMovie?.find(
  //   (movie) =>
  //     movie.title ==
  //     query
  //       .split(" ") // Split the string into words
  //       .map(
  //         (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  //       ) // Capitalize first letter, make rest lowercase
  //       .join(" ")
  // );

  return (
    <>
    <TopBar/>
    <div className="md:container sm:w-full mx-auto  text-color-light-1">
      <h2 className="text-3xl font-bold pt-28">
        Search Results for{" "}
        <span className="text-color-brand-1 font-bold">{query}</span> movies
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {isLoading && <Loader />}
        {!isLoading &&
          searchedMovie.map((movie) => (
            <li
              key={movie.id}
              className="p-4"
              onClick={() => navigate(`/search/${movie.id}`)}
            >
              <div className="">
                <img
                  src={
                    movie?.poster_path
                      ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                      : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" // Default image URL
                  }
                  alt=""
                  className={`${
                    movie?.poster_path
                      ? "rounded-sm object-contain w-full h-[400px]"
                      : "bg-color-grey-2"
                  }`}
                />
              </div>
              <div className="flex justify-between items-center pt-6">
                <p className="text-xl md:text-2xl font-semibold ">
                  {movie.title}
                </p>
                <div className="flex items-center">
                  <span className="text-sm md:text-lg text-color-light-1">
                    {movie.vote_average === 0 ? "" : `${movie.vote_average} `}
                  </span>
                  <span className="text-[10px] md:text-[12px] text-stone-300">
                    / 10
                  </span>
                  <FontAwesomeIcon
                    icon={faStar}
                    color="#F6CA2A"
                    fontSize={20}
                    className="mx-2"
                  />
                </div>
              </div>
              <p className="text-color-grey-3 text-sm md:text-lg font-light pt-3 text-justify tracking-tight line-clamp-3 md:line-clamp-4">
                {movie?.overview || "No description available"}
              </p>
            </li>
          ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
}

export default SearchMovieList;
