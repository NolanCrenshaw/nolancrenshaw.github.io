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
        transition={{ delay: 4, duration: 4 }}
      >
        <nav>
          <div className="nav-linkbox scrim">
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
            <a href="https://github.com/NolanCrenshaw">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                  },
                }}
                alt="github"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
            </a>
            <a href="https://www.linkedin.com/in/nolan-crenshaw-a10b381a0/">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                  },
                }}
                alt="linkedin"
                src="https://img.icons8.com/color/48/000000/linkedin.png"
              />
            </a>
            <a href="https://angel.co/u/nolan-crenshaw">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                  },
                }}
                alt="angelist"
                src="https://img.icons8.com/color/50/000000/angelist.png"
              />
            </a>
          </div>
          <motion.li
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.2,
              },
            }}
            className="call_to_action"
          >
            Let's Talk
          </motion.li>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
