import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";

import "./styles/index.css";
import App from "./App";

// ~~ Google Tag Manager Init
if (process.env.REACT_APP_ENVIRONMENT !== "development") {
  const tagManagerArgs = {
    gtmId: "GTM-TSTQJ4X",
  };
  TagManager.initialize(tagManagerArgs);
}

// ~~ Core Render ~~
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
