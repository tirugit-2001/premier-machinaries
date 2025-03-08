import { nav_items } from "../../utilities";
import iconsImages from "../../assets";
import { MdEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState<boolean>(false);
  let timeoutId: any = null;

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);
  return (
    <header className="flex relative flex-col ">
      <div className="flex  px-8 justify-between items-center w-full max-md:px-5 max-md:py-3 max-sm:justify-between max-sm:px-4 max-sm:py-3">
        <Link to={"/"}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/f06f8fb2478dfda44b43333059ae5677070fbfc7fa3a8413ab7237628439a702?apiKey=00bedd7c3997447984bf9cef0c80b29a&"
            alt="Logo"
            className="object-contain h-[66px] w-[93px] max-sm:w-20 max-sm:h-[57px]"
          />
        </Link>
        <nav className="flex gap-8 items-center max-md:gap-5 max-[800px]:hidden">
          {nav_items.map((item, index) => (
            <Link to={item.path} className=" no-underline" key={index}>
              {item.title}
            </Link>
          ))}
          <a
            href="#about"
            className="cursor-pointer"
            onClick={() => handleNavigation("about")}
          >
            About
          </a>
          <a className="cursor-pointer" href="#contact">
            Locations
          </a>
          <a className="cursor-pointer" href="#contact">
            Contact Us
          </a>
          <a
            href="tel:+917259573500"
            className="flex gap-3 items-center px-5 py-2 text-base text-black no-underline rounded-sm border border-sky-600 border-solid transition-all duration-[0.2s] ease-[ease] max-sm:px-4 max-sm:py-1.5 max-sm:text-sm"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/7dccdebdbbc8803af866d251fad9fc9d90d1a53d7aaee48c16ad57f4fe3dc591?apiKey=00bedd7c3997447984bf9cef0c80b29a&"
              alt="Phone"
              className="object-contain w-4 h-4"
            />
            <span>+91 72595 73500</span>
          </a>
        </nav>
        <div className="md:hidden ">
          {!toggle && (
            <RxHamburgerMenu
              className=" text-sky-600 text-xl cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        {toggle && (
          <div className="flex  bg-sky-600 absolute top-[150px] p-2 right-10 rounded-2xl h-[50vh] w-1/2 z-13 md:hidden flex-col gap-3 mt-3">
            <div className="flex justify-end p-2 ">
              <RxCross1
                onClick={() => setToggle(!toggle)}
                className="cursor-pointer align text-white max-[462px]:text-xl text-2xl"
              />
            </div>
            <div className="flex flex-1  flex-col items-center justify-center gap-8 text-white ">
              {nav_items.map((item, ind) => (
                <Link
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  className="gap-1 text-white hover:text-sky-800"
                  key={ind}
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
              <a
                onClick={() => {
                  setToggle(!toggle);
                  handleNavigation("about");
                }}
                className="gap-1 text-white hover:text-sky-800"
                href="/#about"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="gap-1 cursor-pointer text-white hover:text-sky-800"
              >
                Locations
              </a>
              <a
                href="#contact"
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="gap-1 cursor-pointer text-white hover:text-sky-800"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="bg-black flex max-[350px]:flex-col max-[350px]:justify-center justify-end items-center gap-9 max-[350px]:gap-5 p-4">
        <div className="flex max-[350px]:gap-5 gap-6 text-white max-[350px]:text-start items-center">
          <a href="">
            <img src={iconsImages.twitter} alt="twitter" />
          </a>
          <a
            href="https://www.instagram.com/premiermachineries/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconsImages.instagram} alt="instagram" />
          </a>
          <a href="">
            <img src={iconsImages.facebook} alt="facebook" />
          </a>
        </div>
        <a
          href="mailto:premiermachineries@yahoo.com"
          className="flex max-[350px]:gap-2 gap-3 text-white items-center"
        >
          <MdEmail className="text-xl max-[350px]:text-lg" />
          premiermachineries@yahoo.com
        </a>
      </div>
    </header>
  );
};

export default Navbar;

<nav className="flex relative max-[462px]:gap-3 gap-5 justify-between items-center  px-6 w-full font-medium   py-3   max-md:max-w-full">
  <Link to={"/"}>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d498f58c6c27ddfbc793b00a720be2cd72be5d33066a0cb8700137e6fd70544a?placeholderIfAbsent=true&apiKey=00bedd7c3997447984bf9cef0c80b29a"
      className="object-contain  max-[462px]:w-[180px] aspect-[5.13] w-[292px]"
      alt="Company Logo"
    />
  </Link>
  <div className="flex max-[768px]:hidden gap-10 items-center my-auto text-base leading-none text-emerald-900">
    {nav_items.map((item, ind) => (
      <Link
        className="   gap-1
           text-emerald-800
            self-stretch
            my-auto
            hover:text-emerald-700"
        key={ind}
        to={item.path}
      >
        {item.title}
      </Link>
    ))}
  </div>
  <div className="flex gap-2.5 max-[768px]:hidden   items-center self-start mt-1 text-sm leading-none text-white min-h-11">
    <Link
      to={"/contact"}
      className="gap-3  self-stretch px-5 py-3 my-auto bg-emerald-900 rounded hover:bg-emerald-800 transition-colors"
    >
      JOIN US
    </Link>
  </div>
</nav>;
