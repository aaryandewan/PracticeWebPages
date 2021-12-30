import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerValues = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.6, duration: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerValues}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;
