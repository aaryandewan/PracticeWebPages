import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 140 },
  },
};

const containerValues = {
  hidden: {
    // opacity: 0,
    x: "100vw",
  },
  visible: {
    // opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 1 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerValues}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              transition={{ type: "spring" }}
              whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariants}
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button>Next</motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
