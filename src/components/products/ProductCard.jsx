import React from "react";
import Button from "../shared/Button";
const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section  */}
        {data.map((item, idx) => (
          <div key={idx} className="group">
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="relative"
            >
              {" "}
              <img
                src={item.img}
                alt="pic"
                className="h-[180px] w-[260px] object-cover rounded-md "
              />
              {/* hover button */}
              <div className="absolute group-hover:flex hidden justify-center items-center duration-200 h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center  w-full group-hover:backdrop-blur-sm">
                <Button
                  text="Add to cart"
                  bgColor="bg-primary"
                  textColor="text-white"
                />
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold">{item.title}</h2>
              <h2 className="font-bold">${item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
