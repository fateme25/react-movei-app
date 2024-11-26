import { useEffect, useState } from "react";
import CinemaFilmPlay from "../../assets/CinemaFilmPlay.png";
import MaskGroup from "../../assets/MaskGroup.png";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

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

          <div className="profile flex items-center gap-6 ">
            <div className="img_cont h-12">
              <img src={MaskGroup} className="w-full h-full" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopBar;
