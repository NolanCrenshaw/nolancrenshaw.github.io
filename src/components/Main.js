import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Landing from "./Landing";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Viget from "./uniques/Viget";
import HarvestGrove from "./uniques/harvest_grove/HarvestGrove";

const Main = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="main-container"
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <Landing />
                <Skills />
                <Projects />
                <About />
                <Contact />
                <Footer />
              </>
            </Route>
            <Route exact path="/viget">
              <Viget />
            </Route>
            <Route path="/harvest_grove">
              <HarvestGrove />
            </Route>
          </Switch>
        </Router>
      </motion.div>
    </>
  );
};

export default Main;
