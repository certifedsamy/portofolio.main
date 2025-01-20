import React, { useState, useEffect, useRef } from "react";
import NumberCounter from "./NumberCounter";
import myself from "../assets/images/me.jpg";
import { motion } from "framer-motion";

const About = () => {
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
      { threshold: 0 } // Trigger when 50% of the element is visible
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
    <div className="sm:px-48 px-16 sm:flex justify-between mt-80 sm:mt-[500px] items-center ">
      <motion.div className="flex flex-col gap-10 w-full ">
        <motion.span
          ref={ref}
          initial={{ opacity: 0, y: 40 }} // Initial state before animation
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} // Animate based on visibility
          transition={{ duration: 0.9 }} // Duration of the animation
          className="text-3xl font-poppins font-semibold text-[#d3aa85] w-[20%] italic w-full"
        >
          About-me
        </motion.span>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: -10 }} // Initial state before animation
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }} // Animate based on visibility
          transition={{ duration: 0.9 }} // Duration of the animation
          className="sm:text-xl font-poppins font-normal italic text-white/50"
        >
          Hi! I’m Samy, a passionate frontend mentor with a year of experience
          in web development. I specialize in HTML, CSS, JavaScript, and
          React.js, and I love using Tailwind CSS to create beautiful,
          responsive designs
        </motion.p>
      </motion.div>
      <img
        src={myself}
        alt=""
        className="sm:w-[40%] w-[50%] mt-10 rounded-[60px]"
      />
      <NumberCounter />
      <motion.span
        ref={ref}
        initial={{ opacity: 0, x: 200 }} // Initial state before animation
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }} // Animate based on visibility
        transition={{ duration: 0.9 }} // Duration of the animation
        className="absolute flex gap-16 text-white sm:text-xl font-poppins sm:mt-[690px] sm:ml-[1100px] ml-60 -mt-20 italic items-center"
      >
        <p></p>year of <br /> experience
      </motion.span>
    </div>
  );
};

export default About;
