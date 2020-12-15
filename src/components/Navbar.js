import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="navbar-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 3 }}
      >
        <nav>
          <div className="nav-linkbox">
            <li id="about_me">About me</li>
            <li id="portfolio">Portfolio</li>
            <li id="resume">Resume</li>
          </div>
          <li id="call_to_action">Let's Talk</li>
          {/* <div id="social_box"></div> */}
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
