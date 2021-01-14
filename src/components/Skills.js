import React from "react";

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
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
          </ul>
        </div>
        <div className="glass_panel"></div>
      </section>
      <section>
        <div id="shape_two" />
        <div className="glass_panel"></div>
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
          </ul>
        </div>
        <div className="glass_panel"></div>
      </section>
    </div>
  );
};

export default Skills;
