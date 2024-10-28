import TopBar from "./navbars/topBar";
import banner from '../assets/banner.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

function Banner() {


    const handleClick = () => {
        console.log(window.scrollY)
    }

    return (
        <>
            <div className="banner w-full h-screen relative">

                {/* The background image and overlay */}
                <div className='bg absolute w-full h-full -z-50'>
                    <div className="overlay absolute w-full h-full top-0 left-0 bg-black/50"></div>
                    <img src={banner}
                    className="object-cover w-full h-full -z-10" />
                </div>

                {/* The movie infos */}
                <div className="container mx-auto -z-30">

                    <div className="overhead_info text-white inline-flex flex-col gap-0 w-[30em] mt-[18%]">
                        <h1 className="text-3xl font-bold">Star Wars: the force awakens</h1>
                        <div className="sub_info flex flex-col gap-5">

                            <div className="">
                                <span>2015</span>
                                <span>
                                    <span> Action</span>
                                    <span> Adventure</span>
                                </span>
                            </div>

                            {/* <div className="sub_icons">
                                <span>
                                <img src={imdb}/> <span>86.0/100</span>
                                </span> 

                                <span>
                                <img src={tomato}/> <span>97%</span>
                                </span>
                            </div> */}

                            <p className="">As a new threat to the galaxy rises, Rey, a desert scavenger, and Finn, an ex-stormtrooper, must join Han Solo and Chewbacca to search for the one hope of restoring peace.</p>

                            <div className="rating">
                                <span><span className="font-bold text-lg">7.8</span> / 10 </span>
                                <span>
                                <FontAwesomeIcon icon={faStar} className="text-[#FFFD54] ml-1" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFFD54] ml-1" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFFD54] ml-1" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFFD54] ml-1" />
                                <FontAwesomeIcon icon={faStar} className="text-[#FFFD54] ml-1" />
                                </span>
                            </div>

                            <div className="watch_button bg-gradient-to-r from-pink-500 to-orange-500 w-fit py-2 px-3 rounded-lg cursor-pointer" onClick={handleClick}>
                                <span>WATCH TRAILER </span> 
                                <FontAwesomeIcon icon={faCirclePlay} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Banner