import React from "react";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing_top">
        <div className="personal_image" />
        <div className="landing_icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-layers-intersect"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#efa649"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="8" y="4" width="12" height="12" rx="2" />
            <rect x="4" y="8" width="12" height="12" rx="2" />
          </svg>
        </div>
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
          <h3>- Who I Am.</h3>
          <h2>A Full-Stack Developer based in Chattanooga, TN.</h2>
          <p></p>
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
      </div>
      <div className="landing_bottom"></div>
    </div>
  );
};

export default Landing;
