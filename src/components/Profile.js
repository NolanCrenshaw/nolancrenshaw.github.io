import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import ProfileSVG from "./ProfileSVG";
import DownArrowSVG from "./svg_library/DownArrowSVG";

import Navbar from "./Navbar";

const Profile = () => {
  return (
    <motion.div
      className="profile-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        id="profile_background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        alt="profile background"
        src="./images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"
      />
      <Navbar />
      {/* <motion.div
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
      </motion.div> */}
      <motion.section
        initial={{ opacity: 0, y: -450, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 4 }}
      >
        <div className="scrim">
          <p>Hello. My name is </p>
          <h1>Nolan Crenshaw</h1>
        </div>
        <div>
          <h2>and I am a </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            id="profile_svg"
          >
            <ProfileSVG />
          </motion.div>
        </div>
      </motion.section>
      <div className="next_arrow-container">
        <motion.div whileHover={{ scale: 1.5 }} className="next_arrow">
          <HashLink smooth to="/#about_me">
            <DownArrowSVG />
          </HashLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
