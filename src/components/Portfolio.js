import React from "react";

const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <div id="portfolio--head">
        <h1>Portfolio</h1>
        <div></div>
      </div>
      <div className="project-box">
        <div className="project">
          <div className="project_slides"></div>
          <div className="project_description">
            <h2>Go Boating</h2>
            <h3>React | Redux | Flask </h3>
            <p>
              Organize your next trip down river with Go Boating! Create a new
              adventure. Invite your friends. Add your boats and your vehicles.
              Send messages. Meet up. Go boating!
            </p>
          </div>
        </div>
        <div className="project">
          <div className="project_slides"></div>
          <div className="project_description">
            <h2>New Wing Order</h2>
            <h3>React | Flask </h3>
            <p>Eat the best wings in Memphis from NWO!</p>
            <p>Best Food Truck - 2020 Memphis Flyer</p>
            <p>1st Place 2019 Bluff City WingFest </p>
            <p>2nd Place 2019 Southern Hot Wing Festival</p>
          </div>
        </div>
        <div className="project">
          <div className="project_slides"></div>
          <div className="project_description">
            <h2>Chatter</h2>
            <h3>React | Flask </h3>
            <p>A Twitter Clone built as a group project during App Academy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
