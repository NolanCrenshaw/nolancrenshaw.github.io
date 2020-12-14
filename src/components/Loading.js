import React from "react";
import { motion } from "framer-motion";

const Loading = ({ type, color }) => {
  return (
    <div className="loading-container">
      <motion.div
        initial={{ opacity: 1, scale: 5 }}
        animate={{ opacity: 0, scale: 0, rotate: 360 }}
        transition={{
          ease: "linear",
          duration: 1.2,
          // repeat: 1,
          // repeatType: "reverse",
        }}
      >
        <div></div>
        {/* <ReactLoading type={type} color={color} height={"20%"} width={"20%"} /> */}
      </motion.div>
    </div>
  );
};

export default Loading;
