import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="profile-container">
      <motion.div
        initial={{ opacity: 0, x: 250, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <img src="/images/51563575.jpg" />
        {/* <h1>Nolan Crenshaw</h1>
        <p>Web Developer</p> */}
      </motion.div>
      <motion.section
        initial={{ opacity: 0, x: -150, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <p>Hi.</p>
        <h1>I'm a Web Developer</h1>
        <p>About me</p>
      </motion.section>
    </div>
  );
};

export default Profile;
