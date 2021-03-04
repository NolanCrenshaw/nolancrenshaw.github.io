import React, { useEffect, useState } from "react";

import Plot from "./Plot";
import { plot_map_lines } from "./harvest_grove_plots";

const HarvestGrove = () => {
  const [plotTracker, setPlotTracker] = useState([]);

  const updateTracker = (id, status) => {
    const index = id - 1;
    const newTracker = plotTracker;
    newTracker[index] = status;
    setPlotTracker(newTracker);
  };

  useEffect(() => {
    const plots = [];
    let count = 36;
    while (count > 0) {
      plots[count - 1] = "available";
      count--;
    }
    setPlotTracker(plots);
  }, []);

  return (
    <div className="harvest_grove_container">
      <div className="logo_container">
        <div id="harvest_grove--logo">
          <img
            alt="Harvest Grove"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/harvest-grove/HarvestGroveFINAL.jpg"
          />
        </div>
        <div id="river_stone--logo">
          <img
            alt="River Stone"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/harvest-grove/RiverStone.jpg"
          />
        </div>
      </div>
      <body>
        <div className="map_container">
          <img
            id="body_background"
            alt="body background"
            src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/harvest-grove/harvest-grove_plots_web_01.jpg"
          />
          <svg
            className="plot-map"
            viewBox="0 0 1920 1166"
            fill="red"
            xmlns="http://www.w3.org/2000/svg"
          >
            {plot_map_lines ? (
              plot_map_lines.map((ele, key) => (
                <Plot key={key} ele={ele} updateTracker={updateTracker} />
              ))
            ) : (
              <></>
            )}
          </svg>
        </div>
        <img
          id="map_key"
          alt="map key"
          src="https://ghubpagebucky.s3.us-east-2.amazonaws.com/harvest-grove/harvest_grove_mapkey.jpg"
        />
      </body>
    </div>
  );
};

export default HarvestGrove;
