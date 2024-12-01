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

  const { currentUser } = useAuth();
  // console.log(currentUser);

  return (
    <>
      <header
        className={`${
          home && scrollVal < 1 ? "bg-transparent" : "bg-slate-900"
        } z-10 p-5 fixed w-full`}
      >
        <div className="container mx-auto flex justify-between items-center space-between">
          <div className="brand flex">
            <div className="img_cont">
              <img src={CinemaFilmPlay} className="w-full" />
            </div>
            <span className="text-white text-4xl">
              Film<span className="text-[#BE0C0C]">flix</span>
            </span>
          </div>

          <div className="search flex-initial w-1/3 h-14 rounded-full  cursor-pointer border-2 border-[#b6b4b4]">
            <div className="flex justify-between mx-6 mt-2 items-center text-slate-200 ">
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Type to search ..."
                  className="bg-transparent outline-none border-none text-xl placeholder-gray-300"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </form>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>

          <div className="profile flex items-center gap-6 text-color-light-1 font-bold text-lg">
            <div className="space-x-2">
              <FontAwesomeIcon icon={faSquarePlus} fontSize={25} />
              <Link to="">WatchList</Link>
            </div>
            <div className="img_cont">
              {currentUser ? (
                <div className="flex items-center space-x-2">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost rounded-btn"
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
                        <a>Your WatchList</a>
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
