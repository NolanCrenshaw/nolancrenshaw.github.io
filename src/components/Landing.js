import React from "react";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="personal_image" />
      <div className="landing_icon"></div>
      <div className="name-box">
        <h1>Nolan</h1>
        <h1>Crenshaw.</h1>
        <div />
      </div>
      <nav>
        <ul>
          <li>
            <span>Skills</span>
            <div />
          </li>
          <li>
            <span>Works</span>
            <div />
          </li>
          <li>
            <span>Blog</span>
            <div />
          </li>
        </ul>
      </nav>
      <div className="intro-box">
        <h3>- Introduction</h3>
        <h2>Web Developer based in Chattanooga, TN.</h2>
        <span>Lorem</span>
      </div>
      <div className="social-links">
        <ul>
          <li>D</li>
          <li>I</li>
          <li>L</li>
        </ul>
      </div>
      <div className="about-me">
        <span>My Story</span>
      </div>
      <div className="landing_bottom"></div>
    </div>
  );
};

export default Landing;
