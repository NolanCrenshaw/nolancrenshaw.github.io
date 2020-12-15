import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProfileSVG from "./ProfileSVG";

const Profile = () => {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        id="profile_pic-container"
        initial={{ opacity: 0, x: 250, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0, duration: 2 }}
      >
        <motion.img
          initial={{ opacity: 0, x: 250, scale: 1 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
          src="/images/51563575.jpg"
        />
      </motion.div>
      <motion.section
        initial={{ opacity: 0, x: -150, scale: 1 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0, duration: 1.5 }}
      >
        <p>Hello.</p>
        <div>
          <h1>I am a </h1>
          <div id="profile_block--bg">
            <ProfileSVG />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Profile;
