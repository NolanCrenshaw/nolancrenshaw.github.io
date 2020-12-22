import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Profile from "./Splash";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Footer from "./Footer";

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
          {/* <Navbar /> */}
          <Profile />
          <About />
          <Portfolio />
          <Resume />
          <Footer />
        </Router>
      </motion.div>
    </>
  );
};

export default Main;
