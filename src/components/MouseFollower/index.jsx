import "./mouse-follower.css";

import React, { useEffect, useRef, useState } from "react";

function MouseFollower() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [trailingX, setTrailingX] = useState(0);
  const [trailingY, setTrailingY] = useState(0);

  const cursorRef = useRef(null);
  const cursorTrailingRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (evt) => {
      const { clientX, clientY } = evt;
      setMouseX(clientX);
      setMouseY(clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []); // Empty dependency array, useEffect runs once after mounting

  useEffect(() => {
    const moveCursor = () => {
      const diffX = mouseX - trailingX;
      const diffY = mouseY - trailingY;

      // Adjust these values to control the responsiveness of the trailing cursor
      const responsivenessFactor = 0.4; // Higher values make the trailing cursor more responsive
      const trailingStepX = diffX * responsivenessFactor;
      const trailingStepY = diffY * responsivenessFactor;

      setTrailingX(trailingX + trailingStepX);
      setTrailingY(trailingY + trailingStepY);

      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorTrailingRef.current.style.transform = `translate3d(${
        trailingX - 16
      }px, ${trailingY - 14}px, 0)`;
    };

    moveCursor();
  }, [mouseX, mouseY]); // Only update when mouseX or mouseY changes

  return (
    <div>
      <div className="cursors">
        <div className="cursor" ref={cursorRef}></div>
        <div className="cursor" ref={cursorTrailingRef}></div>
      </div>
    </div>
  );
}

export default MouseFollower;
