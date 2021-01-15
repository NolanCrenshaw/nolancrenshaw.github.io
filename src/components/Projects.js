import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h4>What I Have Done.</h4>
      <ul>
        <li>
          <h1>New Wing Order</h1>
          <img
            alt="nwo_landing"
            src="https://nwobucky.s3.us-east-2.amazonaws.com/landing_capture.jpg"
          />
          <div className="reveal-box">
            <div>
              <p>
                Built in React with a Flask backend, New Wing Order is food
                truck website with Admin controls that allow for Location and
                Menu updates.
              </p>
              <div>
                <a href="https://newwingorder.herokuapp.com/">Live Site</a>
                <h3>|</h3>
                <a href="https://github.com/NolanCrenshaw/new-wing-order">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <h1>Chatter</h1>
          <div className="reveal-box">
            <div>
              <p>
                A clone of the social media giant, Twitter, Chatter was the
                result of a group seven-day sprint. It served as an advanced
                lesson in pair-programming and teamwork.
              </p>
              <div>
                <a href="">Live Site</a>
                <h3>|</h3>
                <a href="">GitHub</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <h1>Go Boating!</h1>
          <div className="reveal-box">
            <div>
              <a href="">GitHub</a>
              <h3>|</h3>
              <a href="">Live Site</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
