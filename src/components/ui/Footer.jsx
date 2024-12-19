import CinemaFilmPlay from "../../assets/CinemaFilmPlay.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="p-5 bg-[#171414]">
        <div className="md:container sm:w-full mx-auto flex justify-between px-4 flex-wrap ">
          <div className="company flex flex-col gap-5 md:w-1/3 sm:w-full ">
            <div className="brand flex">
              <div className="img_cont">
                <img src={CinemaFilmPlay} className="w-full" />
              </div>
              <span className="text-white text-4xl">
                Film<span className="text-[#BE0C0C]">flix</span>
              </span>
            </div>
            <div className="text-white text-sm ">
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                iusto. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia magnam asperiores suscipit officiis totam voluptatum
                quae doloremque quas, quasi fugiat?
              </p>
              <p className="mt-10 font-medium sm:pb-10">
                Call Us (+1) 0123456789
              </p>
            </div>
          </div>
          <div className="links flex justify-between  md:w-[60%] sm:w-full">
            <Nav header={"Resources"} array={resources} />

            <Nav header={"Legal"} array={legal} />

            <Nav header={"Account"} array={account} />
          </div>
        </div>
        <div className="mt-10 flex justify-center text-gray-500 text-[1rem]">
          © 2024 Filmflix.
        </div>
      </footer>
    </>
  );
}

const Nav = ({ header, array }) => {
  return (
    <>
      <div>
        <h1 className="text-white font-bold text-2xl mb-3">{header}</h1>

        <ul className="flex flex-col gap-3">
          {array.map((item, index) => {
            return <Linker to={item.to} text={item.text} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

const Linker = ({ to, text }) => {
  return (
    <Link to={to}>
      <li className="text-gray-400">{text}</li>
    </Link>
  );
};

const resources = [
  { link: "/", text: "About" },
  { link: "/", text: "Contact Us" },
  { link: "/", text: "Forums" },
  { link: "/", text: "Blog" },
  { link: "/", text: "Help Center" },
];
const legal = [
  { link: "/", text: "Terms of Use" },
  { link: "/", text: "Privacy Policy" },
  { link: "/", text: "Security" },
];
const account = [
  { link: "/", text: "My Account" },
  { link: "/", text: "User Guide" },
  { link: "/", text: "Collections" },
];

export default Footer;
