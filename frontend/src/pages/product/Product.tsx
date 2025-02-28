import { useState } from "react";
import ProductMaincard from "../../components/specific/productspage/ProductMaincard";
import { productPageCardCategory, productPageNavitems } from "../../utilities";

const Product = () => {
  const [activecategory, setActiveActiveCategory] =
    useState<string>("printers");
  return (
    <div className="h-full w-full p-3  min-h-[100vh]">
      <div className="p-3 flex max-600px]:text-sm  max-[500px]:flex-col max-[600px]:gap-6 gap-8 items-center justify-end">
        {productPageNavitems.map((item, ind) => (
          <span
            className="cursor-pointer"
            key={ind}
            onClick={() => {
              setActiveActiveCategory(item.path);
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-4 mt-5 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[520px]:grid-cols-1 gap-5">
        {productPageCardCategory[activecategory].map((item, ind) => (
          <ProductMaincard {...item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Product;
