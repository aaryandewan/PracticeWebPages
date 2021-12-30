import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={containerValues}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <li key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
        // className="toppings container"
        // variants={variants}
        // intial="hidden"
        // animate="visible"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
