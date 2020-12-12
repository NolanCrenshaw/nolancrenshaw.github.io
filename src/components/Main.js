import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transition from "./Transition";

const Main = () => {
  return (
    <>
      <motion.div
        className="main-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Navbar />
        <Profile />
        <Transition />
      </motion.div>
    </>
  );
};

export default Main;
