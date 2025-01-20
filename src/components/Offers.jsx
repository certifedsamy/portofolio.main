import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { offers } from "../constants/data";

const Offers = () => {
  //   const [isHovered, setIsHovered] = useState(false);

  //fadeIn when scroll
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.01 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Cleanup observer
      }
    };
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, delay: 1.5 }}
      className=" px-10 sm:px-48 mt-32 offers-grid pb-10 font-poppins"
    >
      {offers.map((o, i) => (
        <div className="offer-item cursor-pointer rounded-3xl overflow-hidden group">
          <img
            src={o.img}
            alt=""
            className="relative hover:scale-110 transition-all duration-500"
          />
          <span className="absolute text-white text-[10px] sm:text-xl sm:py-8 sm:w-[80%] w-auto rounded-xl sm:px-8 bottom-0 bg-black bg-opacity-5 backdrop-blur-md  transform translate-y-full transition-transform duration-300 group-hover:-translate-y-5">
            {o.domain}{" "}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default Offers;
