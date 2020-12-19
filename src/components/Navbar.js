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
          <div className="nav-socialbox">
            <a href="https://www.linkedin.com/in/nolan-crenshaw-a10b381a0/">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5, repeat: Infinity },
                }}
                src="https://img.icons8.com/color/48/000000/linkedin.png"
              />
            </a>
            <a href="https://angel.co/u/nolan-crenshaw">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5, repeat: Infinity },
                }}
                src="https://img.icons8.com/color/50/000000/angelist.png"
              />
            </a>
          </div>
          <li className="call_to_action">Let's Talk</li>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
