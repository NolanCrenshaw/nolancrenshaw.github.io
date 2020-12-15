import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Loading from "./components/Loading";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return <>{loaded ? <Main /> : <Loading />}</>;
};
export default App;
