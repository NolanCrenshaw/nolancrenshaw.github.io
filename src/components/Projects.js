import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const history = useHistory();
  const { ref, inView, entry } = useInView();

  useEffect(() => {
    if (inView) {
      history.replace("#projects");
    }
  }, [inView]);

  return (
    <div className="projects-container" id="projects">
      <h4 ref={ref}>My Work.</h4>
      <ul>
        <li>
          <div className="title-box">
            <h1>New Wing Order</h1>
            <div className="title-shape_A" />
          </div>
          <div className="img-box">
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
          </div>
        </li>
        <li>
          <div className="title-box">
            <h1>Emergency Relief Catering</h1>
            <div className="title-shape_A" />
          </div>
          <div className="img-box">
            <img
              alt="ercc_landing"
              src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/ercc_page/ercc_screencap.jpg"
            />
            <div className="reveal-box">
              <div>
                <p>
                  A Single Page app for a catering company that specializes in
                  disaster relief and large volume. Deployed on Netlify
                </p>
                <div>
                  <a href="https://eloquent-hermann-270b39.netlify.app">
                    Live Site
                  </a>
                  <h3>|</h3>
                  <a href="https://github.com/NolanCrenshaw/emergency-relief-catering-company">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="title-box">
            <h1>Welp</h1>
            <div className="title-shape_A" />
          </div>
          <div className="img-box">
            <img
              alt="welp_landing"
              src="https://nwobucky.s3.us-east-2.amazonaws.com/welp_capture.jpg"
            />
            <div className="reveal-box">
              <div>
                <p>
                  A clone of the popular review site "Yelp," Welp was the
                  product of a group seven-day sprint. It was built using Pug
                  files with an ExpressJS backend.
                </p>
                <div>
                  <a href="https://welpeat.herokuapp.com/">Live Site</a>
                  <h3>|</h3>
                  <a href="https://github.com/sambrady0652/yelp-clone">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
        {/* <li>
          <h1>Go Boating!</h1>
          <div className="reveal-box">
            <div>
              <p>
                A passion project of mine built with React, Redux, and Flask. Go
                Boating! is a social site that allows users to organize river
                trips.
              </p>
              <div>
                <a href="">Live Site</a>
                <h3>|</h3>
                <a href="">GitHub</a>
              </div>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Projects;
