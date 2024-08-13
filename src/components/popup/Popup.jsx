import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../shared/Button";
const Popup = ({ orderPopup, popupHandler }) => {
  return (
    orderPopup && (
      <div>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed w-[300px] rounded-md dark:bg-gray-900 dark:text-white duration-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-md p-4 bg-white">
            {/* header section */}
            <div className="flex items-center justify-between">
              <h1>Order Now</h1>
              <div>
                <IoMdCloseCircleOutline
                  className="text-2xl cursor-pointer"
                  onClick={popupHandler}
                />
              </div>
            </div>
            {/* form section */}
            <div className="mt-4">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <input type="text" placeholder="Address" className="form-input" />
            </div>
            <div className="flex justify-center">
              {" "}
              <Button
                handler={popupHandler}
                text={"Order Now"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
