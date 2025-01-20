import React, { useState, useEffect, useRef } from "react";
import { skills } from "../constants/data";
import { motion } from "framer-motion";
const Skills = () => {
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
      { threshold: 0.4 } // Trigger when 50% of the element is visible
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
    <div className="sm:flex justify-between sm:px-48 sm:pb-72 mt-[210px] sm:mt-[250px] px-16 pb-40 ">
      <motion.span
        ref={ref}
        initial={{ opacity: 0, y: -140 }} // Initial state before animation
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -140 }} // Animate based on visibility
        transition={{ duration: 1.4 }} // Duration of the animation
        className="sm:text-3xl text-3xl font-poppins font-semibold text-[#d3aa85] w-[20%] italic"
      >
        Offers
      </motion.span>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 140 }} // Initial state before animation
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 140 }} // Animate based on visibility
        transition={{ duration: 1.4 }} // Duration of the animation
        className="sm:w-[80%] flex flex-wrap gap-10"
      >
        {skills.map((s, i) => (
          <div className="mt-10 h-auto flex flex-col gap-5 sm:w-[30%] w-[40%] items-start">
            <img src={s.img} alt="" className="h-10" />
            <span className="sm:text-2xl text-xl font-poppins font-semibold text-white">
              {s.title}
            </span>
            <p className="sm:text-xl font-poppins font-normal italic text-white opacity-50">
              {s.text}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
