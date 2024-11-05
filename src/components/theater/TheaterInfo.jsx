import React from "react";
import ReactPlayer from "react-player/youtube";
import leftArrow from "../../assets/LeftArrow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation } from "swiper/modules";

import "./theatherInfo.css";

function TheaterInfo() {
  return (
    <>
      <div className="flex justify-between items-center py-6">
        <h2 className="py-4 text-3xl font-bold text-color-light-1">
          IN THEATER
        </h2>
        <h4 className="text-color-brand-1">
          View All <FontAwesomeIcon icon={faAngleRight} />
        </h4>
      </div>
      {/* grid grid-cols-[600px_minmax(200px,1fr)_300px] gap-8 */}
      {/* grid-cols-[600px_400px_minmax(200px,1fr)] */}

      <div class="grid md:grid-cols-2 sm:grid-col-1 gap-10">
        <div>
          <p className="text-color-grey-1 font-light text-3xl py-6">
            WONDER WOMAN - Official Trailer [HD]
          </p>

          <ReactPlayer url="https://www.youtube.com/watch?v=1Q8fG0TtVAY" />
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
                <SwiperSlide>
                  <img src="" alt="" className="cast_image" />
                  <div>
                    <h3 className="text-color-light-1">Name</h3>
                    <h3 className="text-color-grey-2">Actor</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src="" alt="" className="cast_image" />
                  <div>
                    <h3 className="text-color-light-1">Name</h3>
                    <h3 className="text-color-grey-2">Actor</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src="" alt="" className="cast_image" />
                  <div>
                    <h3 className="text-color-light-1">Name</h3>
                    <h3 className="text-color-grey-2">Actor</h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src="" alt="" className="cast_image" />
                  <div>
                    <p className="text-color-light-1">text</p>
                    <p className="text-color-grey-2">2:15</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <img src="" alt="" className="cast_image" />
                  <div>
                    <h3 className="text-color-light-1">Name</h3>
                    <h3 className="text-color-grey-2">Actor</h3>
                  </div>
                </SwiperSlide>
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
              navigation={true} // فعال کردن ناوبری
              modules={[Navigation]}
              className="trailers bg-color-dark-blue mt-5 rounded-sm"
            >
              <SwiperSlide>
                <img src="" alt="" className="trailers_image" />
                <div>
                  <p className="text-color-light-1">text</p>
                  <p className="text-color-grey-2">2:15</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="" alt="" className="trailers_image" />
                <div>
                  <p className="text-color-light-1">text</p>
                  <p className="text-color-grey-2">2:15</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="" alt="" className="trailers_image" />
                <div>
                  <p className="text-color-light-1">text</p>
                  <p className="text-color-grey-2">2:15</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="" alt="" className="trailers_image" />
                <div>
                  <p className="text-color-light-1">text</p>
                  <p className="text-color-grey-2">2:15</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img src="" alt="" className="trailers_image" />
                <div>
                  <p className="text-color-light-1">text</p>
                  <p className="text-color-grey-2">2:15</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheaterInfo;
