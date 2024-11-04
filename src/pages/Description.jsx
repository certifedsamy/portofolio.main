import React from "react";
import SlideToLeft from "../components/SlideToLeft";
import Navbar from "../components/Navbar";
import Passion from "../components/Passion";
import Offers from "../components/Offers";
import Slider from "../components/Slider";
import CursorFollower from "../components/CursorFollower";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";

const Description = () => {
  return (
    <div className="">
      <div className="relative bg-[#151515] z-40">
        <CursorFollower />
        <SlideToLeft />
        <div className="mb-[400px]">
          <Navbar />
          <Passion />
          <Offers />
          <Slider />
          <About />
          <Skills />
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Description;
