import React from "react";
import { HashLink } from "react-router-hash-link";
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
            <HashLink smooth to="/#about_me">
              <li>About me</li>
            </HashLink>
            <HashLink smooth to="/#portfolio">
              <li>Portfolio</li>
            </HashLink>
            <HashLink smooth to="/#resume">
              <li>Resume</li>
            </HashLink>
          </div>
          <li className="call_to_action">Let's Talk</li>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
