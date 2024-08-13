import React from "react";
import { Link } from "react-router-dom";
const Button = ({ text, bgColor, textColor, handler }) => {
  return (
    <Link to={"/allProduct"}>
      {" "}
      <button
        onClick={handler}
        className={`${bgColor} ${textColor} relative z-10 cursor-pointer font-semibold py-2 px-8 rounded-full hover:scale-105 duration-300`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
