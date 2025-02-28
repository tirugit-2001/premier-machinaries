import { ProductPageCardType } from "../../../../types";
import { Link } from "react-router-dom";

const BannerCard = ({
  title,
  image,
  altText,
  contact_link,
  features,
}: ProductPageCardType) => {
  return (
    <div className="flex gap-5  max-[450px]:px-0 px-4 justify-between max-[768px]:flex-col-reverse  w-full">
      <div className="flex text-white flex-1 text-justify  justify-center max-[600px]:gap-3 gap-5 flex-col">
        <h1 className="text-3xl max-[400px]:text-xl max-[600px]:text-2xl">
          {title}
        </h1>
        <ul className="flex flex-col gap-2">
          {features.map((feature, index) => (
            <li
              className="list-disc max-[600px]:text-base max-[400px]:text-sm list-inside"
              key={index}
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <Link
            to={contact_link}
            className="gap-2.5 max-[600px]:px-2 max-[400px]:text-sm  text-center cursor-pointer self-stretch px-4 py-2 text-white whitespace-nowrap bg-sky-600 rounded-sm w-[143px] max-[400px]:w-max"
            aria-label={`Consult about ${title}`}
          >
            Consult
          </Link>
          <a
            href=""
            className="gap-2.5 max-[600px]:px-2 max-[400px]:text-sm  text-center border-[0.5px] text-white cursor-pointer self-stretch px-4 py-2  whitespace-nowrap rounded-sm  max-[400px]:w-max w-[143px]"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="w-[50%] max-[768px]:w-full max-[450px]:h-[200px] max-[600px]:h-[250px] h-[450px] flex items-start">
        <img
          src={image}
          className="h-full w-full object-contain  max-["
          alt={altText}
        />
      </div>
    </div>
  );
};

export default BannerCard;
