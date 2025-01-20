import React from "react";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-auto sm:py-44 py-24 sm:px-20 fixed bg-[#d3aa85] z-10 bottom-0 h-[500px] flex items-center gap-10">
      <div className="space-x-10">
        {" "}
        <div className="flex items-center">
          <img src={logo} alt="" className="h-40" />
          <span className="text-[#d3aa85] sm:text-xl font-poppins italic bg-white sm:py-1 sm:px-3 ">
            SE media
          </span>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a review"
          className="sm:py-5 sm:px-7 px-2 py-3 border-none text-[#d3aa85] outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 font-poppins items-start sm:ml-72 mt-12">
        <div className="font-normal sm:text-lg text-sm text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Conditions générales et politique de confidentialité
        </div>
        <div className="font-normal sm:text-lg text-sm text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Chaîne d'approvisionnement
        </div>
        <div className="font-normal sm:text-lg text-sm text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Politique sur les Cookies et la Confidentialité
        </div>
        <div className="font-normal sm:text-lg text-sm text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Paramètres des Cookies
        </div>
      </div>
      <div className="h-[500px] absolute w-[5px] bg-white rotate-45 sm:right-10 right-[1000px]  mt-48"></div>
      <div className="h-[800px] absolute w-[5px] bg-white rotate-45 sm:right-48 right-[1000px] mt-48"></div>
    </div>
  );
};

export default Footer;
