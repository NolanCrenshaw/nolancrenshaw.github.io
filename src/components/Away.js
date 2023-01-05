import React from "react";

const Away = () => {
  const awayContainerStyle = {
    height: "100vh",
    width: "auto",
    overflow: "hidden",
    position: "relative",
  };

  const awayIMGStyle = {
    height: "auto",
    width: "100vw",
    bottom: "-200px",
    overflow: "scroll",
    position: "absolute",
  };

  return (
    <div className="away-container" id="away" style={awayContainerStyle}>
      <img
        style={awayIMGStyle}
        alt="serenity now"
        src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/karsten-wurth-jS0zC2PJ17A-unsplash.jpg"
      />
    </div>
  );
};

export default Away;
