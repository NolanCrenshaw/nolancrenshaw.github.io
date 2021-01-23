import React from "react";
import ReactDOM from "react-dom";
import TagManager from "react-gtm-module";

import "./styles/index.css";
import App from "./App";

// ~~ Google Tag Manager Init
const tagManagerArgs = {
  gtmId: "GTM-TSTQJ4X",
};
TagManager.initialize(tagManagerArgs);

// ~~ Core Render ~~
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById("root")
);
