import React, { useEffect, useRef } from "react";

const CursorFollower = () => {
  const followerRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const smoothing = 0.1; // Adjust this for smoother motion

  useEffect(() => {
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.pageX, y: e.pageY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    const updatePosition = () => {
      const { x: targetX, y: targetY } = positionRef.current;
      const { x: currentX, y: currentY } = currentRef.current;

      currentRef.current.x += (targetX - currentX) * smoothing;
      currentRef.current.y += (targetY - currentY) * smoothing;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${
          currentRef.current.x - 17
        }px, ${currentRef.current.y - 17}px)`;
      }

      requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className=" sm:absolute sm:w-10 sm:h-10 bg-transparent rounded-full pointer-events-none sm:border"
      style={{ transition: "transform 0.1s ease" }}
    />
  );
};

export default CursorFollower;
