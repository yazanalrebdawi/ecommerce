import React from "react";
import { FaCarSide, FaWallet } from "react-icons/fa6";
import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: " Free Shipping",
    desciption: "Free shipping On AllOrder",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: " Safe Money",
    desciption: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    desciption: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Supoort 24/7",
    desciption: "Techinical Support 24/7",
  },
];
const Services = () => {
  return (
    <div>
      <div className="container mt-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {serviceData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start sm:flex-row gap-4"
            >
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.desciption}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
