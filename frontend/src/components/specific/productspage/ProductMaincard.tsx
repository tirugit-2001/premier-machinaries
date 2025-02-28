import { Link } from "react-router-dom";
import { ProductPageCardType } from "../../../types";

const ProductMaincard = ({
  title,
  image,
  altText,
  contact_link,
  features,
  subtitle,
}: ProductPageCardType) => {
  return (
    <article className="py-6 flex flex-col  gap-5 px-8 rounded-md bg-zinc-100  max-[350px]:h-auto h-[500px]">
      <figure className="flex max-[350px]:h-[30%] h-[50%] flex-col justify-center items-center w-full">
        <img
          loading="lazy"
          src={image}
          className="w-full h-full object-contain max-[350px]:aspect-square"
          alt={altText}
        />
      </figure>
      <div className="flex flex-col justify-between max-[350px]:flex-0 flex-1 w-full">
        <section className="w-full text-start">
          <div className="max-w-full w-[228px]">
            <h2 className="text-base font-semibold">{title}</h2>
            <p>{subtitle}</p>
            <p className="mt-2 text-sm">Features: {features.join(",")} </p>
          </div>
        </section>
        <Link
          to={contact_link}
          className="gap-2.5 max-[300px]:w-[100px] cursor-pointer self-stretch px-4 py-2 text-white whitespace-nowrap bg-sky-600 rounded-sm w-[143px]"
          aria-label="Consult about Yueming Laser Cutting Machine"
        >
          Consult
        </Link>
      </div>
    </article>
  );
};
export default ProductMaincard;
