import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import useWatchlist from "../../hooks/useWatchList";

const WatchlistCard = ({ type, item }) => {
  const { handleRemoveFromWatchlist } = useWatchlist();
  const { currentUser } = useAuth();

  return (
    <Link to={`/search/${item?.id}`}>
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center">
        {/* Image Section */}
        <div className="relative w-full sm:w-full md:w-56 flex-shrink-0">
          <img
            src={
              item?.poster_path
                ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg" // Default image
            }
            alt={item.title}
            className="movie-image rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-full h-full object-cover"
          />
          <span
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 75%, 100% 100%, 49% 75%, 0 100%, 0% 75%)",
            }}
            className="font-bold text-white absolute left-0 top-0 bg-color-brand-2 bg-opacity-90 w-10 h-14 flex justify-center items-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="h-4 w-4"
              onClick={() => handleRemoveFromWatchlist(item)}
            />
          </span>
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-base sm:text-lg md:text-xl font-bold truncate">
            {item?.title || item?.name}
          </h2>
          <h3 className="text-sm sm:text-md font-bold text-color-brand-2 mt-2">
            {new Date(item?.release_date).getFullYear()}
          </h3>
          <div className="flex items-center gap-2 mt-4">
            <FontAwesomeIcon
              icon={faStar}
              className="h-4 w-4"
              color="#F6CA2A"
            />
            <span className="text-sm">{item?.vote_average?.toFixed(1)}</span>
          </div>
          <p className="mt-4 text-xs sm:text-sm line-clamp-5">
            {item?.overview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WatchlistCard;
