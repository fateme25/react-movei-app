import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import leftArrow from "../../assets/LeftArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";

import "./theatherInfo.css";
import { useTrailer } from "./useTrailer";
import Heading from "../ui/Heading";

function TheaterInfo() {
  const [selectedMovieId, setSelectedMovieId] = useState();
  const {
    trailers,
    isLoadingTrailers,
    selectedMovieDetails,
    isLoadingDetails,
  } = useTrailer(selectedMovieId);

  //set default select movie id (first movie slider)
  useEffect(() => {
    if (!isLoadingTrailers && trailers.results.length > 0) {
      setSelectedMovieId(trailers.results[0].id);
    }
  }, [isLoadingTrailers, trailers]);

  function handleMovieInfo(i) {
    const movieId = trailers.results[i].id;
    setSelectedMovieId(movieId);
  }

  let videos = selectedMovieDetails?.videos.results.filter(
    (movie) => movie.type === "Trailer"
  );

  console.log(videos)

  // console.log(selectedMovieDetails);
  return (
    <div className="md:container sm:w-[90%] mx-auto">
      <Heading>IN THEATER</Heading>
      {/* grid grid-cols-[600px_minmax(200px,1fr)_300px] gap-8 */}
      {/* grid-cols-[600px_400px_minmax(200px,1fr)] */}

      <div class="grid md:grid-cols-2 sm:grid-col-1 gap-10 py-10">
        <div className="sm:ml-5">
          <p className="text-color-grey-1 font-light md:text-2xl sm:text-lg py-6">
            {selectedMovieDetails?.original_title} - Official Trailer [HD]
          </p>
          <div className="relative w-full pt-[56.25%]">
            <div className="absolute top-0 left-0 w-full h-full">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videos?.[0].key}`}
                width="100%"
                height="100%"
                className="react-player"
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 ">
          <div className="">
            <p className="text-color-light-1 font-bold text-xl tracking-wide uppercase ">
              spotlight casts
              </p>
              <Swiper
                slidesPerView={3}
                direction={"vertical"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="trailers "
              >
                {selectedMovieDetails &&
                  selectedMovieDetails.credits.cast.map((people) => (
                    <SwiperSlide key={people.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${people.profile_path}`}
                        alt={people.original_name}
                        className="cast_image rounded-xl"
                      />
                      <div className="px-2">
                        <h3 className="text-color-light-1 w-[220px]">
                          {people.original_name}
                        </h3>
                        <h3 className="text-color-grey-2">
                          {people.character}
                        </h3>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} inverse />
            <img src={leftArrow} className="inline px-4" alt="" />

            <Swiper
              slidesPerView={4}
              direction={"vertical"}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation]}
              className="trailers bg-color-dark-blue mt-5 rounded-sm cursor-pointer"
            >
              {trailers?.results.map((trailer, i) => (
                <SwiperSlide key={i} onClick={() => handleMovieInfo(i)}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${trailer.poster_path}`}
                    alt=""
                    className="w-[130px] h-[60px] object-cover rounded-md ml-2"
                  />
                  <div className="w-[180px] px-5">
                    <p className="text-color-light-1 px-2">{trailer.title}</p>
                    <p className="text-color-grey-2">2:15</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheaterInfo;
