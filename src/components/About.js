import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div id="about_me">
        <h1>About Me</h1>
        <div></div>
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
          <li className="call_to_action">Let's Talk</li>
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
