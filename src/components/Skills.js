import React from "react";

import DesignSVG from "./svg_library/DesignSVG";
import FolderSVG from "./svg_library/FolderSVG";
import ProgrammingSVG from "./svg_library/ProgrammingSVG";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h4>What I Do.</h4>
      <section>
        <div id="shape_one" />
        <div className="text-box">
          <h1>Front End</h1>
          <ul>
            <li id="javascript_icon">
              <img
                alt="JavaScript"
                src="https://img.icons8.com/color/96/000000/javascript.png"
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
            <li id="vscode_icon">
              <img
                alt="VSCode"
                src="https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png"
              />
            </li>
          </ul>
          <h3>Modern Web-Development.</h3>
          <p>
            Responsive websites, progressive web apps, and single-page
            applications built with React are my forte.
          </p>
          <h3>Stylish Design.</h3>
          <p>
            I use Figma and Affinity Photo/Designer to create attractive and
            intuitive layouts.
          </p>
          <h3>Eye-Catching Elements.</h3>
          <p>
            From subtle to explosive, I create animations using a toolbox of
            CSS/JavaScript techniques and in demand packages like Framer-Motion.
          </p>
        </div>
        <div className="glass_panel">
          <DesignSVG />
        </div>
      </section>
      <section>
        <div id="shape_two" />
        <div className="glass_panel">
          <FolderSVG />
        </div>
        <div className="text-box">
          <h1>Back End</h1>
          <ul>
            <li id="python_icon">
              <img
                alt="Python"
                src="https://img.icons8.com/color/96/000000/python.png"
              />
            </li>
            <li id="postgresql_icon">
              <img
                alt="PostgreSQL"
                src="https://img.icons8.com/color/96/000000/postgreesql.png"
              />
            </li>
            <li id="api_icon">
              <img
                alt="API"
                src="https://img.icons8.com/bubbles/50/000000/api.png"
              />
            </li>
            <li id="postman_icon">
              <img
                alt="Postman"
                src="https://img.icons8.com/dusk/64/000000/postman-api.png"
              />
            </li>
            <li id="nodejs_icon" className="icon_scrim">
              <img
                alt=" Node JS"
                src="https://img.icons8.com/color/96/000000/nodejs.png"
              />
            </li>
            <li id="aws_icon" className="icon_scrim">
              <img
                alt="AWS"
                src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
              />
            </li>
          </ul>
          <h3>Database Management.</h3>
          <p>
            Complex relational databases or simple content manangement, I query
            with the best of them.
          </p>
          <h3>Buckets and Beanstalks.</h3>
          <p>
            Want to host your image content from an S3, or your database from an
            EC2? Let me help you navigate the AWS world.
          </p>
          <h3>RESTful API.</h3>
          <p>
            The web is all about request and response. I build clean and
            efficient APIs that power dynamic applications.
          </p>
        </div>
      </section>
      <section>
        <div id="shape_three" />
        <div className="text-box">
          <h1>Deploy</h1>
          <ul>
            <li id="git_icon">
              <img
                alt="Git"
                src="https://img.icons8.com/color/96/000000/git.png"
              />
            </li>
            <li id="docker_icon">
              <img
                alt="Docker"
                src="https://img.icons8.com/color/96/000000/docker.png"
              />
            </li>
            <li id="webpack_icon">
              <img
                alt="Webpack"
                src="https://img.icons8.com/dusk/48/000000/webpack.png"
              />
            </li>
            <li id="linux_icon">
              <img
                alt="Linux"
                src="https://img.icons8.com/color/96/000000/linux.png"
              />
            </li>
            <li id="nginx_icon">
              <img
                alt="Nginx"
                src="https://img.icons8.com/color/48/000000/nginx.png"
              />
            </li>
            <li id="heroku_icon">
              <img
                alt="Heroku"
                src="https://img.icons8.com/color/48/000000/heroku.png"
              />
            </li>
            <li id="aws_icon" className="icon_scrim">
              <img
                alt="AWS"
                src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
              />
            </li>
          </ul>
          <h3>Put it Out There.</h3>
          <p>
            Unravel the mysteries of webhosting and deployment. Let me divine
            the right path for you. Burning some sage is optional.
          </p>
          <h3>Containerization.</h3>
          <p>
            In the future all sites will be container-based. I can show you how
            to walk like a .yaml.
          </p>
          <h3>The Whole Spectrum.</h3>
          <p>
            Whether you need a straight-foward static site for your business, or
            your team prioritizes server-side rendering and dynamic scalability,
            I can help you find the right fit.
          </p>
        </div>
        <div className="glass_panel">
          <ProgrammingSVG />
        </div>
      </section>
    </div>
  );
};

export default Skills;
