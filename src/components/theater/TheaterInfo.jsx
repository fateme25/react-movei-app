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

  let video = selectedMovieDetails?.videos.results.filter(
    (movie) => movie.type === "Trailer"
  );

  // console.log(selectedMovieDetails);
  return (
    <>
      <Heading>IN THEATER</Heading>
      {/* grid grid-cols-[600px_minmax(200px,1fr)_300px] gap-8 */}
      {/* grid-cols-[600px_400px_minmax(200px,1fr)] */}

      <div class="grid md:grid-cols-2 sm:grid-col-1 gap-10">
        <div>
          <p className="text-color-grey-1 font-light text-3xl py-6">
            {selectedMovieDetails?.original_title} - Official Trailer [HD]
          </p>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${video?.[0].key}`}
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-color-light-1 font-bold text-[26px] tracking-wide">
              SPOTLIGHT CASTS
              <Swiper
                slidesPerView={3}
                direction={"vertical"}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="trailers bg-[#171414]"
              >
                {selectedMovieDetails &&
                  selectedMovieDetails.credits.cast.map((people) => (
                    <SwiperSlide>
                      <img
                        src={`https://image.tmdb.org/t/p/original${people.profile_path}`}
                        alt={people.original_name}
                        className="cast_image "
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
            </p>
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
                    className="trailers_image"
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
    </>
  );
}

export default TheaterInfo;
