import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";

const MenuLinks = [
  { id: 1, name: "Home", link: "/", idInPage: "home" },
  { id: 3, name: "About", link: "/about", idInPage: "about" },
  { id: 2, name: "Shop", link: "/shop", idInPage: "shop " },
  { id: 4, name: "Blog", link: "/blog", idInPage: "blog" },
];
const DropDownLinks = [
  { id: 1, name: "Registeration", link: "/registeration" },
  { id: 2, name: "All Products", link: "/allProduct" },
  { id: 3, name: "Top Products", link: "/#" },
];
const Navbar = ({ popupHandler }) => {
  const [menu, openMenu] = useState(false);
  return (
    <nav>
      {" "}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative">
        <div className="py-4">
          <div
            className={`container flex justify-between items-center ${
              menu ? "opacity-10" : "opacity-100"
            }`}
          >
            <div className="flex gap-4 items-center">
              <p className="text-2xl  text-primary italic uppercase font-semibold sm:text-3xl tracking-widest">
                ESHOP
              </p>
              <IoMdMenu
                className="md:hidden flex cursor-pointer "
                size={18}
                onClick={() => {
                  openMenu(!menu);
                }}
              />
            </div>
            <div className="hidden md:block relative">
              <ul className="flex items-center  gap-1 md:gap-4">
                {MenuLinks.map((item, index) => (
                  <li key={index}>
                    {" "}
                    <a
                      href={"/"}
                      className="text-gray-500    dark:hover:text-white inline-block font-semibold px-4 duration-200 hover:text-black dark:hover-text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#/"
                    className="flex hover:text-black items-center gap-[2px] font-semibold text-gray-500 py-2 dark:hover:text-white"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  <div className="absolute dark:text-white z-50 hidden dark:bg-gray-900 p-2 text-black group-hover:block w-[200px] rounded-md bg-white shadow-md">
                    <ul className="space-y-2">
                      {DropDownLinks.map((item, idx) => (
                        <li key={idx}>
                          {" "}
                          <NavLink
                            to={item.link}
                            className="rounded-md  duration-200 p-2 w-full inline-block hover:bg-primary/20 hover:text-black items-center gap-[2px] font-semibold text-gray-500 py-2 dark:hover:text-white"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            {/* right section */}
            <div className="flex justify-center items-center gap-4">
              <div className="relative group hidden sm:block ml-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
                <IoMdSearch className="text-xl absolute duration-200 group-hover:text-primary text-gray-600 dark:text-gray-400 top-1/2 -translate-y-1/2  right-3" />
              </div>
              <div>
                <button className="relative p-3" onClick={popupHandler}>
                  <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                  <div className="w-4 h-4 bg-red-500 text-white absolute text-xs italic rounded-full top-0 right-0 flex items-center justify-center">
                    {" "}
                    4
                  </div>
                </button>
              </div>
              <div>
                <DarkMode />
              </div>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {menu ? (
          <div className=" relative">
            {" "}
            <div className="absolute  z-40 top-1/2 -translate-y-1/2 left-1/2 mt-[270px]  -translate-x-1/2 h-[380px] w-[60%] bg-[#f5f5f5] text-black md:hidden block">
              <div className="relative">
                <IoMdCloseCircleOutline
                  onClick={() => {
                    openMenu(!menu);
                  }}
                  className="right-0 absolute m-2 cursor-pointer"
                  size={18}
                />
                <ul className="flex flex-col justify-center items-center">
                  {MenuLinks.map((item) => (
                    <li
                      key={item.id}
                      className="w-full block p-8 border-b-2 last:border-b-0 "
                    >
                      {" "}
                      <a
                        href={item.idInPage}
                        className=" text-black italic dark:hover:text-white inline-block font-semibold px-4 duration-200 hover:text-black dark:hover-text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
