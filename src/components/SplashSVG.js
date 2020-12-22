import React, { useEffect, useState } from "react";

import WebDevSVG from "./svg_library/WebDevSVG";
import ProgrammerSVG from "./svg_library/ProgrammerSVG";
import DesignerSVG from "./svg_library/DesignerSVG";
import SeoSVG from "./svg_library/SeoSVG";

const SplashSVG = () => {
  const [splashSVG, setSplashSVG] = useState("loading");
  const [loadTime, setLoadTime] = useState(3500);

  const rotateSvg = () => {
    if (splashSVG === "loading") {
      setLoadTime(8500);
      setSplashSVG("webdev");
    } else if (splashSVG === "webdev") {
      setSplashSVG("programmer");
    } else if (splashSVG === "programmer") {
      setSplashSVG("designer");
    } else if (splashSVG === "designer") {
      setSplashSVG("seo");
    } else if (splashSVG === "seo") {
      setSplashSVG("webdev");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      rotateSvg();
    }, loadTime);
  }, [splashSVG]);

  if (splashSVG === "loading") {
    return <div></div>;
  } else if (splashSVG === "webdev") {
    return <WebDevSVG />;
  } else if (splashSVG === "programmer") {
    return <ProgrammerSVG />;
  } else if (splashSVG === "designer") {
    return <DesignerSVG />;
  } else if (splashSVG === "seo") {
    return <SeoSVG />;
  }
};

export default SplashSVG;
