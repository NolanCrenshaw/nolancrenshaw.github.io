import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Splash from "./Splash";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
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
          <Landing />
          <About />
          <Skills />
          <Contact />
          <Footer />
        </Router>
      </motion.div>
    </>
  );
};

export default Main;
