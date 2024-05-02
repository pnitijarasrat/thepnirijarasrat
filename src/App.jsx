import { useState, useEffect, useContext } from "react";
import "./dark-theme.css";
import "./light-theme.css";
import "./App.css";
import "./component/Home/Home.css";
import Home from "./component/Home/Home";
import Nav from "./component/Home/Nav";
import NavButton from "./component/Home/NavButton";
import { motion } from "framer-motion";
import Welcome from "./component/Welcome/Welcome";
import About from "./component/About/About";
import Education from "./component/Education/Education";
import Skill from "./component/Skill/Skill";
import Project from "./component/Project/Project";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeContext } from "./ThemeProvider";

const divStyle = {
  width: "min(700px, 90vw)",
  margin: "auto",
  marginBottom: "64px",
};

function App() {
  const { darkTheme } = useContext(ThemeContext);
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkTheme) {
      body.style.backgroundColor = "#282828";
    } else {
      body.style.backgroundColor = "#fbf1c7";
    }
  }, [darkTheme]);
  return (
    <BrowserRouter>
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <ScrollToTop />
        <Home />
        <Nav />
        <br />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div style={divStyle}>
                <Welcome />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div style={divStyle}>
                <About />
              </motion.div>
            }
          />
          <Route
            path="/education"
            element={
              <motion.div style={divStyle}>
                <Education />
              </motion.div>
            }
          />
          <Route
            path="/skill"
            element={
              <motion.div style={divStyle}>
                <Skill />
              </motion.div>
            }
          />
          <Route
            path="/project"
            element={
              <motion.div style={divStyle}>
                <Project />
              </motion.div>
            }
          />
        </Routes>
        <NavButton />
        <div className="footer">
          © 2024 Puriwat Nitijarasrat. All Rights Reserved.
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
