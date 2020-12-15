import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Transition from "./Transition";

/*
initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
*/

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Profile />
        <Transition />
      </div>
    </>
  );
};

export default Main;
