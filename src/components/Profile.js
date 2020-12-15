import React from "react";
import { motion } from "framer-motion";
import ProfileTag from "./svg_library/ProfileTag";

const Profile = () => {
  return (
    <div className="profile-container">
      <div id="profile_pic-container">
        <motion.img
          initial={{ opacity: 0, x: 250, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          src="/images/51563575.jpg"
        />
      </div>
      <motion.section
        initial={{ opacity: 0, x: -150, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >
        <p>Hello.</p>
        <div>
          <h1>I am a </h1>
          <div id="profile_block--bg">
            <ProfileTag />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Profile;
