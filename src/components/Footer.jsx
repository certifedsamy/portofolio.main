import React from "react";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-auto sm:py-44 py-36 sm:px-20 pr-8 fixed bg-[#d3aa85] z-10 bottom-0 h-[500px] flex items-center gap-10">
      <div className="space-x-10">
        {" "}
        <div className="flex items-center">
          <img src={logo} alt="" className="sm:h-40 h-28 ml-5" />
          <span className="text-[#d3aa85] sm:text-xl text-sm font-poppins italic bg-white sm:py-1 sm:px-3 ">
            SE media
          </span>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a review"
          className="sm:py-5 sm:px-7 px-0 rounded-lg text-center py-3 border-none text-[#d3aa85] outline-none text-sm"
        />
      </div>
      <div className="flex flex-col gap-3 font-poppins items-center ml-0 sm:ml-72">
        <div className="font-normal sm:text-lg text-[10px] text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Conditions générales et politique de confidentialité
        </div>
        <div className="font-normal sm:text-lg text-[10px] text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Chaîne d'approvisionnement
        </div>
        <div className="font-normal sm:text-lg text-[10px] text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Politique sur les Cookies et la Confidentialité
        </div>
        <div className="font-normal sm:text-lg text-[10px] text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Paramètres des Cookies
        </div>
      </div>
      <div className="h-[500px] absolute w-[5px] bg-white rotate-45 sm:right-10 right-[1000px]  mt-48"></div>
      <div className="h-[800px] absolute w-[5px] bg-white rotate-45 sm:right-48 right-[1000px] mt-48"></div>
    </div>
  );
};

export default Footer;
