import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Plot = ({ ele }) => {
  const [renderOpacity, setRenderOpacity] = useState("20%");
  const [renderFill, setRenderFill] = useState("transparent");
  const [status, setStatus] = useState("available");

  const handleMouseInto = () => {
    setRenderOpacity("50%");
  };
  const handleMouseOut = () => {
    setRenderOpacity("20%");
  };
  const handleClick = () => {
    if (status === "available") {
      setStatus("sold");
    } else {
      setStatus("available");
    }
  };

  useEffect(() => {
    if (status === "available") {
      setRenderFill("green");
    } else if (status === "sold") {
      setRenderFill("red");
    }
  }, [status]);

  useEffect(() => {
    setStatus(ele.status);
  }, [ele]);

  return (
    <motion.svg
      whileHover={{ scale: 1.05 }}
      className="map-element"
      onMouseEnter={handleMouseInto}
      onMouseLeave={handleMouseOut}
      opacity={renderOpacity}
      onClick={handleClick}
    >
      <path d={ele.line} stroke="black" fill={renderFill} />
    </motion.svg>
  );
};

export default Plot;
