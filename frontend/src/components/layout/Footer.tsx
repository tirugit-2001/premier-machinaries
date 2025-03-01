import { Link } from "react-router-dom";
import { addresses, footer_navitmes } from "../../utilities";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-neutral-950 flex flex-col gap-19  max-[900px]:p-10 p-16"
    >
      <div className="">
        <h3 className="text-2xl text-white mb-4">Our Offices</h3>
        <div className="flex max-[900px]:flex-col mt-3 gap-10">
          {addresses.map((address, index) => (
            <div
              key={index}
              className="flex-[0.8] max-[500px]:flex-col  max-[500px]:gap-5 justify-between text-white  border-[0.3px] py-5 max-[500px]:px-4 px-8 border-white  flex "
            >
              <div className="flex flex-col  gap-4">
                <h4 className="text-xl">{address.city} Office</h4>
                <p className=" w-[50%] max-[500px]:w-full">{address.address}</p>
                <a
                  href={`${address.number}`}
                  className="flex items-center gap-2"
                >
                  <span>
                    <IoMdCall />
                  </span>
                  {address.number}
                </a>
              </div>
              <div>
                <iframe
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={address.iframe}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-between items-start border-red-400 w-full max-md:flex-wrap max-md:gap-10 max-md:p-10 max-sm:flex-col max-sm:p-5">
        <div className="flex flex-col items-start max-md:w-[calc(50%_-_20px)] max-sm:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/00bedd7c3997447984bf9cef0c80b29a/f06f8fb2478dfda44b43333059ae5677070fbfc7fa3a8413ab7237628439a702?apiKey=00bedd7c3997447984bf9cef0c80b29a&"
            alt={`Premiere Missionaries  logo`}
            className="object-contain aspect-[1.41] w-[93px]"
          />
          <strong className="text-white my-3 max-[500px]:my-1 text-base">
            Premiere Missionaires
          </strong>
          <h4 className="text-gray-400 text-base">Bengaluru | Mangaluru</h4>
        </div>
        {footer_navitmes.map((item, ind) => {
          if (ind !== footer_navitmes.length - 1) {
            return (
              <div
                key={ind}
                className="flex text-white flex-col max-md:w-[calc(50%_-_20px)] max-sm:w-full"
              >
                <div className="mb-4 text-base">{item.mainTitle}</div>
                <div className="flex flex-col gap-2 text-sm">
                  {item.links.map((links, index) => (
                    <Link key={index} to={links.path}>
                      {links.title}
                    </Link>
                  ))}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={ind}
                className="flex flex-col text-white max-md:w-[calc(50%_-_20px)] max-sm:w-full"
              >
                <div className="mb-4 max-[500px]:mb-2 text-base">
                  {item.mainTitle}
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  {item.links.map((links, index) => (
                    <a
                      className="flex items-center gap-2"
                      key={index}
                      href={links.path}
                    >
                      {links.path.includes("tel") ? <IoMdCall /> : <MdEmail />}{" "}
                      {links.title}
                    </a>
                  ))}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div>
        <p className="text-white max-[500px]:text-start text-center">
          Premiere Machinaries | Design and developed by{" "}
          <a href="www.pixeltechin.com" className=" no-underline">
            Pixeltechin.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
