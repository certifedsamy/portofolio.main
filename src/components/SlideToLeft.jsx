import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const SlideToLeft = () => {
  const slideLeft = useRef(null);

  useEffect(() => {
    gsap.set(slideLeft.current, { x: "1600px", autoAlpha: 1 });

    const timeoutId = setTimeout(() => {
      gsap.to(slideLeft.current, {
        x: "-1550px",
        autoAlpha: 1,
        duration: 1,
        ease: "power1.inOut",
      });
    });

    return () => clearTimeout(timeoutId); // Clean up the timeout
  }, []);
  return (
    <div
      className="h-screen w-full bg-[#111111] z-20 absolute"
      ref={slideLeft}
    ></div>
  );
};

export default SlideToLeft;
