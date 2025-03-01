import { SwiperSlide } from "swiper/react";
import Carousel from "../../components/common/carousel/Carousel";
import RawImg from "../../components/common/image/RawImage";
import ProductCard from "../../components/specific/productspage/ProductCard";
import ProductMaincard from "../../components/specific/productspage/ProductMaincard";
import {
  // bannerdata,
  brands,
  productCategories,
  productPageCards,
} from "../../utilities";
// import BannerCard from "../../components/specific/home/banner/BannerCard";

const Home: React.FC = () => {
  const statistics = [
    { value: "40+", label: "Leading Brands" },
    { value: "20,000+", label: "Units Supplied Annually" },
    { value: "100+", label: "Service Excellence Awards" },
  ];

  return (
    <div className="h-full flex flex-col gap-24">
      <div className=" banner_bg ">
        <div className="backdrop-blur bg-gray-400/10 py-10">
          <div className="w-[90%] max-[1000px]:w-[100%] mx-auto">
            {/* <Carousel type="banner">
              {bannerdata.map((item, index) => (
                <SwiperSlide key={index} className="px-18">
                  <BannerCard {...item} key={index} />
                </SwiperSlide>
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-5 gap-14">
        <div className="text-center">
          <h2 className="text-3xl ">Recomended Products</h2>
          <p className="mt-2">
            Integrated enterprise of R&D, production and sales of CNC printing
            and cutting equipment
          </p>
        </div>
        <div className="h-[550px] max-[350px]:h-[500px] w-[80%] max-[1000px]:w-[100%] max-[1000px]:px-4">
          <Carousel type="product_cards">
            {productPageCards.map((item, index) => (
              <SwiperSlide>
                <ProductMaincard {...item} key={index} />
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      </div>
      <div className=" w-full  bg-sky-600 p-5  max-md:max-w-full">
        <div className="flex gap-10 max-md:flex-col">
          <div className="flex max-[1200px]:justify-center flex-col  w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Premier Machineries facility"
              className=" w-full object-contain max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col  ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex   flex-col justify-center self-stretch my-auto w-full text-white min-h-[380px] max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col w-full max-md:max-w-full">
                <h2 className="text-2xl font-semibold">About us</h2>
                <p className="mt-3 font-light text-[17px] max-[768px]:text-[1rem] leading-7 max-md:max-w-full">
                  Since its founding in [Year], Premier Machineries has grown
                  into a leading high-tech enterprise specializing in the R&D,
                  manufacturing, and distribution of advanced printing and
                  cutting solutions. Our product range includes UV printers,
                  solvent printers, laser cutting machines, and hybrid printing
                  systems, catering to diverse industrial needs.
                  <br />
                  With a state-of-the-art facility spanning [Factory Size] and a
                  dedicated team of skilled professionals, we ensure top-notch
                  quality and innovation in every machine. Our commitment to
                  excellence has enabled us to serve clients in over [Number]
                  countries, delivering reliable and efficient solutions
                  worldwide.
                </p>
              </div>
              <div className="flex flex-wrap  max-[1200px]:gap-5 gap-12 items-center self-start  max-[1150px]:mt-5 mt-8 font-semibold max-md:max-w-full">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center self-stretch my-auto"
                  >
                    <div className="text-2xl max-[768px]:text-lg max-[1000px]:text-xl ">
                      {stat.value}
                    </div>
                    <div className="mt-1 font-light text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-14">
        <div className="text-center">
          <h2 className="text-3xl ">Products</h2>
          <p className="mt-2">
            Integrated enterprise of R&D, production and sales of CNC printing
            and cutting equipment
          </p>
        </div>
        <div className=" grid  max-[550px]:grid-cols-1 max-[768px]:grid-cols-2 max-[1000px]:grid-cols-3 grid-cols-4 px-8 gap-9  my-0  max-md:gap-6 max-md:p-4 max-sm:gap-5 max-sm:p-3">
          {productCategories.map((category, index) => (
            <ProductCard
              key={index}
              image={category.image}
              altText={category.altText}
              title={category.title}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-20 gap-14">
        <div className="text-center">
          <h2 className="text-3xl ">Our Brands</h2>
          <p className="mt-2">
            Integrated enterprise of R&D, production and sales of CNC printing
            and cutting equipment
          </p>
        </div>

        <div className="flex flex-wrap w-[80%] mx-auto gap-4 items-center my-0 max-md:gap-6 max-md:p-4 max-sm:gap-5 max-sm:p-3">
          {brands.map((category, index) => (
            <div
              key={index}
              className="flex justify-center w-[calc(33.33%-16px)] max-md:w-[calc(50%-12px)] max-sm:w-full p-2"
            >
              <RawImg
                image={category.image}
                altText={category.altText}
                className="object-contain w-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
