import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerValues = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.6, duration: 1, ype: "spring", stiffness: 140 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Order = ({ pizza }) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerValues}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thanks for your order bro</h2>

      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  );
};

export default Order;
