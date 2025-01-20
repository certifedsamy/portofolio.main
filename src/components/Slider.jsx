import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { sponsors } from "../constants/data";
import { motion } from "framer-motion";

const Slider = () => {
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
      { threshold: 0.5 } // Trigger when 50% of the element is visible
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
      initial={{ opacity: 0, x: 40 }} // Initial state before animation
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }} // Animate based on visibility
      transition={{ duration: 1.4 }} // Duration of the animation
      className="py-28 w-[74.5%] flex sm:gap-28 gap-10 absolute sm:ml-48 pl-16 w-full"
    >
      <span className="text-3xl sm:text-3xl font-poppins font-semibold text-[#d3aa85] w-[20%] italic">
        Clients
      </span>
      <Marquee
        speed={100}
        direction="right"
        pauseOnHover={true}
        className="cursor-pointer flex"
      >
        {sponsors.map((s, i) => (
          <img src={s.img} alt="" className="h-6 sm:ml-28 opacity-20" />
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Slider;
