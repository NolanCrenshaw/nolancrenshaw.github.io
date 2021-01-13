import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Landing from "./components/Landing";
import Loading from "./components/Loading";

const App = () => {
  /*
  Manages Loading Splash
  */
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);

  return <>{loaded ? <Landing /> : <Loading />}</>;
};
export default App;
