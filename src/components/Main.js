import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Profile from "./Profile";
import About from "./About";

const Main = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="main-container"
      >
        <Router>
          <Navbar />
          <Profile />
          <About />
        </Router>
        <div className="test_space"></div>
      </motion.div>
    </>
  );
};

export default Main;
