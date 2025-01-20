import React, { useState } from "react";
import logo from "../assets/icons/logo.png";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setIsTransparent(!isTransparent);
  };

  return (
    <div className="px-12 pt-5 bg-gradient-to-b from-black to-transparent flex items-center justify-between font-poppins fixed w-[100%] bg-opacity-5 z-10 top-0 sm:">
      <img src={logo} alt="" className="h-20" />
      <div className="flex gap-4 items-center">
        <span className="text-white text-md">Menu</span>
        <div
          className={`rounded-full flex flex-col gap-1 items-end cursor-pointer px-5 py-7 ${
            isTransparent ? "bg-transparent" : "bg-white"
          } transition-all duration-300`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <div
            className={`py-[1.6px] rounded-l-full ${
              isTransparent ? "bg-white" : "bg-black"
            }  ${
              isClicked
                ? "px-[14px] -rotate-45 rounded-full translate-y-[3px]"
                : "px-[8px]"
            } transition-all duration-300`}
          ></div>
          <div
            className={`py-[1.6px] rounded-l-full ${
              isTransparent ? "bg-white" : "bg-black"
            } ${
              isClicked
                ? "px-[14px] rotate-45 rounded-full -translate-y-1 "
                : "px-[12px]"
            } transition-all duration-300`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
