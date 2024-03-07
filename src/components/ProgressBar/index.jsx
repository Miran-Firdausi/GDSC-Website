import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import "./progress-bar.css";

function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX, transformOrigin: "left" }}
    ></motion.div>
  );
}

export default ProgressBar;
