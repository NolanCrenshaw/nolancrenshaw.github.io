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
            <li>
              <HashLink smooth to="/#about_me">
                About me
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#portfolio">
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#resume">
                Resume
              </HashLink>
            </li>
          </div>
          <li className="call_to_action">Let's Talk</li>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
