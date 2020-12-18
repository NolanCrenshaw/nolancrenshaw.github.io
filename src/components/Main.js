import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";
import Profile from "./Profile";
import Transition from "./Bulk";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Router>
          <Navbar />
          <Profile />
          <Transition />
        </Router>
        <div className="test_space"></div>
      </div>
    </>
  );
};

export default Main;
