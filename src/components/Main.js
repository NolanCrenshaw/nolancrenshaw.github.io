import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./Landing";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
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
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </Router>
      </motion.div>
    </>
  );
};

export default Main;
