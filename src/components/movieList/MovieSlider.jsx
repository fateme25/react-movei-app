import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./MovieSlider.css";

// Fake Data
const movies = [
  {
    Title: "The Lion King",
    Year: "2019",
    Runtime: "118 min",
    Genre: "Advanture/Animation",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  },
  {
    Title: "Mowgli: Legend of the Jungle",
    Year: "2018",
    Runtime: "104 min",
    Genre: "Advanture/Darama",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
  },
  {
    Title: "Doctor Strange",
    Year: "2016",
    Runtime: "115 min",
    Genre: "Action/Fantasy",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  },
  {
    Title: "John Wick",
    Year: "2014",
    Runtime: "101 min",
    Genre: "Action/Crime",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
  },
  {
    Title: "Disclaimer",
    Year: "2024",
    Runtime: "123 min",
    Genre: "Mystery/Drama",
    Poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhEVY5mdbfT57Y5N0250s3dNyNmj36tYVlg&s",
  },
  {
    Title: "Monsters",
    Year: "2024",
    Runtime: "104 min",
    Genre: "Crime/Darama",
    Poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WB4-tCaDc88-8TzaH16C2GEkdCt9KqcUxDlA5iD2KCr59B0PzmkCJqBhWzPhVBhfcQE&usqp=CAU",
  },
  {
    Title: "The Lion King",
    Year: "2019",
    Runtime: "118 min",
    Genre: "Advanture/Animation",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
  },
  {
    Title: "Mowgli: Legend of the Jungle",
    Year: "2018",
    Runtime: "104 min",
    Genre: "Advanture/Darama",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
  },
  {
    Title: "The Wild Robot",
    Year: "2024",
    Runtime: "104 min",
    Genre: "Survival/Animation",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjM2M2E3YzAtZDJjYy00MDhkLThiYmItOGZhNzQ3NTgyZmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
];

function MovieSlider({ slidesPerView, spaceBetween, sliderClass, showInfo }) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      className={`my-10 ${sliderClass}`}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.Title}>
          <div className="movie-slide">
            <img src={movie.Poster} alt={movie.Title} className="movie-image" />
            {showInfo && (
              <>
                <span className="tag font-bold text-color-light-1 absolute left-0 top-0 bg-zinc-900 bg-opacity-45  w-10 h-14 flex justify-center pt-2 cursor-pointer">
                  <FontAwesomeIcon icon={faPlus} fontSize={"20px"} />
                </span>
                <div className="text-left">
                  <h3 className="text-lg text-color-light-1">{movie.Title}</h3>
                  <span className="text-color-grey-2 text-xs font-medium">
                    {" "}
                    {`${movie.Year} ‧ ${movie.Genre} ‧ ${movie.Runtime}`}
                  </span>
                </div>
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSlider;
