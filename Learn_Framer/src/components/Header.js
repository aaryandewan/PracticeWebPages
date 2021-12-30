import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  // initial: {
  //   rotate: -180,
  // },
  // final: {
  //   rotate: 0,
  //   transition: { duration: 1 },
  // },
};

const internalSvgVariant = {
  initial: {
    pathLength: 0,
  },

  final: {
    pathLength: 1,
    transition: { ease: "linear", duration: 1 },
  },
};

const Header = () => {
  return (
    <header>
      <div className="logo">
        <motion.svg
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={svgVariants}
          initial="initial"
          animate="final"
        >
          <motion.path
            variants={internalSvgVariant}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={internalSvgVariant}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </div>
      <div className="title">
        <motion.h1 drag>Pizza Joint</motion.h1>
      </div>
    </header>
  );
};

export default Header;
