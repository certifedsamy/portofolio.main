import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Passion = () => {
  //text changind effect

  const [index, setIndex] = useState(0);
  const phrases = [
    "Web develloper",
    "User interface designer",
    "Social media manager",
  ];
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFade(true); // Start fade in
      }, 500); // Match this duration with your CSS transition
    }, 2000);

    return () => clearInterval(interval);
  }, [phrases.length]);

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
    <div className="flex flex-col sm:gap-5 gap-2 sm:pt-60 py-80 sm:ml-48 px-16 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }} // Initial state before animation
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} // Animate based on visibility
        transition={{ duration: 1.2, delay: 0.9 }} // Duration of the animation
        className="sm:flex items-center text-center gap-5 font-poppins font-semibold "
      >
        <h1 className=" text-4xl sm:text-5xl text-[#9d9d9d]">
          I’m a passionate
        </h1>
        <h1
          className={`text-2xl sm:text-5xl text-[#d3aa85] transition-opacity duration-500 ease-in-out ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {phrases[index]}
        </h1>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }} // Initial state before animation
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} // Animate based on visibility
        transition={{ duration: 1.2, delay: 1.2 }} // Duration of the animation
        className="font-poppins font-medium text-center"
      >
        <h1 className=" text-lg sm:text-5xl text-[#9d9d9d] italic">
          Looking for collaboration
        </h1>
      </motion.div>
    </div>
  );
};

export default Passion;
