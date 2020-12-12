import React from "react";
import { motion } from "framer-motion";

const Loading = ({ type, color }) => {
  return (
    <div className="loading-container">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 5, rotate: 360 }}
        transition={{ ease: "linear", duration: 2, loop: Infinity }}
      >
        <div></div>
        {/* <ReactLoading type={type} color={color} height={"20%"} width={"20%"} /> */}
      </motion.div>
    </div>
  );
};

export default Loading;
