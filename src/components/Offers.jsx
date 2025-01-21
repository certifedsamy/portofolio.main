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
      transition={{ duration: 1, delay: 0.5 }}
      className=" px-10 sm:px-48 mt-32 flex flex-col sm:grid sm:gap-12 sm:grid-cols-4 pb-10 font-poppins"
    >
      {offers.map((o, index) => (
        <div className="offer-item cursor-pointer  sm:rounded-3xl overflow-hidden group">
          <img
            key={index}
            src={o.img}
            alt={o.alt || `Image ${index + 1} `}
            className={`mb-3 sm:mb-0 ${index === 0 ? "rounded-t-[30px]" : ""} 
            ${index === 6 ? "rounded-b-[30px]" : ""} 
            sm:hover:scale-110 sm:transition-all sm:duration-500 w-full h-auto object-cover`}
          />
          <span className="absolute p-5 text-white text-3xl sm:text-xl sm:py-8 sm:w-[80%] w-auto rounded-xl sm:px-8 sm:bottom-0 bg-black bg-opacity-5 sm:mb-0 backdrop-blur-md sm:transform sm:translate-y-full sm:transition-transform sm:duration-300 sm:group-hover:-translate-y-5">
            {o.domain}{" "}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export default Offers;
