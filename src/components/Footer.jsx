import React from "react";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  return (
    <div className="w-full h-auto py-44 px-20 fixed bg-orange-800 z-10 bottom-0 h-[500px] flex items-center">
      <div className="space-x-10">
        {" "}
        <div className="flex items-center">
          <img src={logo} alt="" className="h-40" />
          <span className="text-orange-800 text-xl font-poppins italic bg-white py-1 px-3 ">
            SE media
          </span>
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type a review"
          className="py-5 px-7 border-none text-orange-900 outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 font-poppins items-start ml-72 mt-12">
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Conditions générales et politique de confidentialité
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Chaîne d'approvisionnement
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Politique sur les Cookies et la Confidentialité
        </div>
        <div className="font-normal text-lg text-white hover:underline transition-all duration-300 text-center cursor-pointer">
          Paramètres des Cookies
        </div>
      </div>
      <div className="h-[500px] absolute w-[5px] bg-white rotate-45 right-10 mt-48"></div>
      <div className="h-[800px] absolute w-[5px] bg-white rotate-45 right-48 mt-48"></div>
    </div>
  );
};

export default Footer;
