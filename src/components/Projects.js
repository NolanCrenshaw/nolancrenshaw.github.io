import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h4>What I have Done.</h4>
      <ul>
        <li>
          <h1>New Wing Order</h1>
          <motion.div whileHover={{ scale: 1.1 }} className="link-box">
            <a href="">GitHub</a>
            <h3>|</h3>
            <a href="">Live Site</a>
          </motion.div>
        </li>
        <li>
          <h1>Chatter</h1>
          <motion.div whileHover={{ scale: 1.1 }} className="link-box">
            <a href="">GitHub</a>
            <h3>|</h3>
            <a href="">Live Site</a>
          </motion.div>
        </li>
        <li>
          <h1>Go Boating!</h1>
          <motion.div whileHover={{ scale: 1.1 }} className="link-box">
            <a href="">GitHub</a>
            <h3>|</h3>
            <a href="">Live Site</a>
          </motion.div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
