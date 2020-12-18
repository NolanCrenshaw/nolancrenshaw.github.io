import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transition from "./Transition";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Profile />
        <Transition />
        <div className="test_space"></div>
      </div>
    </>
  );
};

export default Main;
