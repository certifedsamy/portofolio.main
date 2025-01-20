import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const NumberCounter = () => {
  const numberRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Fade in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.2 } // Trigger when 50% of the element is visible
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

  // GSAP rolling effect starts after fade-in
  useEffect(() => {
    if (isVisible) {
      const targetNumber = 1;
      const duration = 1.9; // Duration in seconds

      // Create a rolling effect with GSAP
      gsap.to(numberRef.current, {
        innerText: targetNumber,
        duration: duration,
        roundProps: "innerText", // Rounds the innerText value
        ease: "power1.inOut",
        onUpdate: () => {
          const currentValue = Math.ceil(numberRef.current.innerText);
          numberRef.current.innerText = currentValue;
          // Calculate the rolling effect
          const rollValue = Math.floor(Math.random() * 10); // Random value for rolling effect
          numberRef.current.innerText = rollValue;
        },
        onComplete: () => {
          numberRef.current.innerText = targetNumber; // Ensure it ends at the target number
        },
      });
    }
  }, [isVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state before animation
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }} // Animate based on visibility
      transition={{ duration: 0.9, delay: 0.2 }} // Duration of the animation
      className="sm:text-[350px] text-9xl font-bold text-center overflow-hidden text-[#d3aa85] absolute sm:ml-[900px] sm:mt-[450px] mt-36"
    >
      <div ref={numberRef} className="">
        0
      </div>
    </motion.div>
  );
};

export default NumberCounter;
