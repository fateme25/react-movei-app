import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CinemaFilmPlay from "../../assets/CinemaFilmPlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { signOutUser } from "../../features/Authentication/auth";
import {
  faMagnifyingGlass,
  faSquarePlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function TopBar({ home }) {
  const [scrollVal, setScrollVal] = useState(0);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { currentUser } = useAuth();

  //Determine the scroll value for conditional styling
  useEffect(() => {
    const handleScrollValue = () => {
      setScrollVal(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollValue);

    return () => window.removeEventListener("scroll", handleScrollValue);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <header
        className={`${
          home && scrollVal < 1 ? "bg-transparent" : "bg-slate-900"
        } z-10 py-5 fixed w-full`}
      >
        <div className="lg:container sm:w-full lg:mx-auto flex justify-between items-center ">
          <div className="brand flex">
            <div className="img_cont">
              <img src={CinemaFilmPlay} className="w-full" />
            </div>
            <span className="text-white text-4xl hidden md:block">
              Film<span className="text-[#BE0C0C]">flix</span>
            </span>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <label className=" input-bordered flex items-center  md:w-[28rem]  h-12 rounded-full cursor-pointer  border-2 border-[#b6b4b4] px-3 ml-4">
              <input
                type="text"
                className="grow bg-transparent outline-none border-none  placeholder-gray-300"
                placeholder="Type to search ..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label>
          </form>
          <div className="profile flex items-center gap-6 text-color-light-1 font-bold text-lg">
            <div className="space-x-2 sm:hidden lg:block">
              <FontAwesomeIcon icon={faSquarePlus} fontSize={25} />
              <Link to="/watchlist">WatchList</Link>
            </div>
            <div className="img_cont">
              {currentUser ? (
                <div className="flex items-center space-x-2">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost rounded-btn px-1"
                    >
                      <FontAwesomeIcon icon={faUserCircle} fontSize={25} />
                      <p className="text-lg">
                        {currentUser.email.substring(0, 6)}
                      </p>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 px-2 leading-7 pt-4 shadow "
                    >
                      <li className="font-medium truncate border-b border-b-zinc-500">
                        {currentUser.email}
                        <small className="-mt-2 text-color-grey-2">
                          View Profile
                        </small>
                      </li>
                      <li className="">
                        <Link to="/watchlist">Your WatchList</Link>
                      </li>
                      <li className="border-b border-b-zinc-500">
                        <a href="">Your Rating</a>
                      </li>
                      <li>
                        <a href="">Settings</a>
                      </li>
                      <li>
                        <a href="" onClick={() => signOutUser()}>
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopBar;
