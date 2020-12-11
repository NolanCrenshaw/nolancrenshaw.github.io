import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="profile-container">
      <motion.div
        initial={{ opacity: 0, y: -500, scale: 0.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100, duration: 3 }}
      >
        <img />
      </motion.div>
      <h2>Nolan Crenshaw</h2>
    </div>
  );
};

export default Profile;
