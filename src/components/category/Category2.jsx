import React from "react";
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../shared/Button";
const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8">
          {/* first col */}
          <div className="py-10 pl-5 col-span-2 bg-gradient-to-br from-gray-400/90 to-primary-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4 ">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold ">With</p>
                <p className="text-4xl xl:text-5xl font-bold  opacity-40 mb-2 ">
                  Laptop
                </p>
                <Button
                  bgColor="bg-primary"
                  text="Browse"
                  textColor="text-white"
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="pic"
              className="w-[300px] absolute   top-1/2 right-0 -translate-y-1/2"
            />
          </div>
          {/*  second col*/}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/60 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold ">With</p>
                <p className="text-4xl xl:text-5xl font-bold  opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  bgColor="bg-white"
                  text="Browse"
                  textColor="text-brandGreen"
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="pic"
              className="w-[320px] absolute bottom-0 "
            />
          </div>
          {/* third col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/40 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl mb-[2px] font-semibold ">With</p>
                <p className="text-4xl xl:text-5xl font-bold  opacity-40 mb-2 ">
                  Gadget
                </p>
                <Button
                  bgColor="bg-white"
                  text="Browse"
                  textColor="text-brandBlue"
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="pic"
              className="w-[320px] absolute   top-[30px] bottom-0 right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
