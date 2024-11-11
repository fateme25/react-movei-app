import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { getMovieTrending } from "../../services/apiMovies";
import { genreMovies } from "../../utils/genres";

function Banner() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  //it will memoize fetchData
  const fetchData = useCallback(async () => {
    const data = await getMovieTrending();

    setTrendingMovies(data.results);
  }, []);

  //the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = () => {
    console.log(window.scrollY);
  };

  //   https://qazimaazarshad.github.io/Movie-Streaming-Website/loaderLogo.webp
  return (
    <>
      {trendingMovies.length > 0 && (
        <div className="banner h-screen relative">
          {/* The background image and overlay */}
          <div className="absolute w-full h-full -z-50 ">
            <div className="overlay absolute w-full h-full top-0 left-0 bg-black/50"></div>
            <img
              src={`https://image.tmdb.org/t/p/original${trendingMovies[0].backdrop_path}`}
              className="object-cover w-full h-full -z-10"
            />
          </div>

          {/* The movie infos */}
          <div className="container mx-auto -z-30">
            <div className="overhead_info text-white inline-flex flex-col gap-0 w-[30em] mt-[18%]">
              <h1 className="text-6xl font-bold text-color-brand-2 font-inter">
                {trendingMovies[0].title}
              </h1>
              <div className="sub_info flex flex-col gap-5">
                <div className="text-xs leading-10 text-color-light-2 tracking-[4px] pt-4">
                  <span>
                    {trendingMovies[0].release_date.split("-")[0]}
                    {"  "}
                  </span>

                  <span className="">
                    {trendingMovies[0].genre_ids
                      .map((id) => genreMovies[id])
                      .join(" .  ")}
                  </span>
                </div>
                <p className="text-color-light-2 font-inter font-[18px] leading-7 text-justify">
                  {trendingMovies[0].overview}
                </p>

                <div className="rating">
                  <span>
                    <span className="font-bold text-xl">
                      {trendingMovies[0].vote_average}
                    </span>{" "}
                    / <span className="text-color-grey-3">10 </span>
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#FFFD54] ml-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#FFFD54] ml-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#FFFD54] ml-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#FFFD54] ml-1"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#FFFD54] ml-1"
                    />
                  </span>
                </div>

                <div
                  className="watch_button bg-gradient-to-r from-pink-500 to-orange-500 w-fit py-3 px-8 rounded-3xl cursor-pointer text-[18px] text-lg"
                  onClick={handleClick}
                >
                  <span>Watch Trailer </span>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
