import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Typist from "react-typist";

const About = () => {
  const [pic, inView, entry] = useInView();
  const picControl = useAnimation();
  const [viewed, setViewed] = useState(false);

  const sequence = async () => {
    await picControl.start({ opacity: 1, x: 0 });
  };

  useEffect(() => {
    if (inView) {
      sequence();
      setViewed(true);
    }
  }, [inView]);

  return (
    <div className="about-container" id="about_me">
      <div id="about_me--head">
        <h1>About Me</h1>
        <div></div>
      </div>
      <div className="introduction-box">
        <div ref={pic} id="profile_picture-container">
          <motion.div
            initial={{ opacity: 0, x: 250 }}
            animate={picControl}
            transition={{ delay: 0.5, duration: 2 }}
          >
            <motion.img
              initial={{ opacity: 0, x: 250 }}
              animate={picControl}
              transition={{ delay: 1, duration: 2 }}
              src="/images/51563575.jpg"
            />
          </motion.div>
        </div>
        <div id="vita-container">
          <div className="typing-box">
            {viewed ? (
              <span>
                <div className="mock_bash">
                  <pre id="mock_id">nolan@Terminal:</pre>
                  <pre id="mock_location">~/mysite</pre>
                  <pre id="mock_start">$ </pre>
                </div>

                <Typist avgTypingDelay={85} cursor={{ show: false }}>
                  <Typist.Delay ms={2000} />
                  <pre>{"                         cat >about_me.txt"}</pre>
                  <Typist.Delay ms={500} />
                  <pre>Hello World.</pre>
                  <Typist.Delay ms={500} />
                  <pre>
                    I am a Full-Stack Developer based in Chattanooga TN.
                  </pre>
                  <Typist.Delay ms={500} />
                  <pre>
                    I Graduated from University of Tennessee with BA in
                    Philosophy.
                  </pre>
                </Typist>
              </span>
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </div>
      <div className="skill-box">
        <li id="javascript_icon">
          <img
            alt="JavaScript"
            src="https://img.icons8.com/color/96/000000/javascript.png"
          />
        </li>
        <li id="python_icon">
          <img
            alt="Python"
            src="https://img.icons8.com/color/96/000000/python.png"
          />
        </li>
        <li id="nodejs_icon">
          <img
            alt=" Node JS"
            src="https://img.icons8.com/color/96/000000/nodejs.png"
          />
        </li>
        <li id="html5_icon">
          <img
            alt="HTML5"
            src="https://img.icons8.com/color/96/000000/html-5.png"
          />
        </li>
        <li id="css3_icon">
          <img
            alt="CSS"
            src="https://img.icons8.com/color/96/000000/css3.png"
          />
        </li>
        <li id="sass_icon">
          <img
            alt="Sass"
            src="https://img.icons8.com/color/96/000000/sass.png"
          />
        </li>
        <li id="git_icon">
          <img alt="Git" src="https://img.icons8.com/color/96/000000/git.png" />
        </li>
        <li id="docker_icon">
          <img
            alt="Docker"
            src="https://img.icons8.com/color/96/000000/docker.png"
          />
        </li>
        <li id="linux_icon">
          <img
            alt="Linux"
            src="https://img.icons8.com/color/96/000000/linux.png"
          />
        </li>
        <li id="postgresql_icon">
          <img
            alt="PostgreSQL"
            src="https://img.icons8.com/color/96/000000/postgreesql.png"
          />
        </li>
        <li id="react_icon">
          <img
            alt="React"
            src="https://img.icons8.com/color/96/000000/react-native.png"
          />
        </li>
        <li id="redux_icon">
          <img
            alt="Redux"
            src="https://img.icons8.com/color/96/000000/redux.png"
          />
        </li>
      </div>
      <div className="pitch-box">
        <div className="text-block">
          <h3>Hello World</h3>
          <p>
            My name is Nolan Crenshaw, and I am a Full-Stack Developer based out
            of Chattanooga, TN. I have a passion for building everything from
            creative animations and intuitive layouts, to the docker containers
            I use to develop and deploy them.
          </p>
          {/* Figure out Call to Action Route */}
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.3,
              },
            }}
            className="call_to_action"
          >
            Hire Me!
          </motion.li>
        </div>
        <div className="trait-box">
          <li>
            <div>
              <img
                alt="Fast Loading"
                src="https://img.icons8.com/cotton/64/000000/fast-browsing.png"
              />
            </div>
            <h3>Fast</h3>
            <p>
              Everything I build is designed to render quickly and run smoothly.
            </p>
          </li>
          <li>
            <div>
              <img
                alt="Security"
                src="https://img.icons8.com/cotton/64/000000/fingerprint-recognition.png"
              />
            </div>
            <h3>Secure</h3>
            <p>
              My work employs safe, best-practices to protect against the
              dangers that lurk.
            </p>
          </li>
          <li>
            <div>
              <img
                alt="Dynamic Rendering"
                src="https://img.icons8.com/cotton/64/000000/rocket-take-off.png"
              />
            </div>
            <h3>Dynamic</h3>
            <p>
              I create fun, animated, modern webpages that interact with users.
            </p>
          </li>
        </div>
      </div>
    </div>
  );
};

export default About;
