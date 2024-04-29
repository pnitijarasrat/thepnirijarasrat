import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import AboutParagraph from "./AboutParagraph";
import AboutBio from "./AboutBio";
import AboutContact from "./AboutContact";
import HR from "../Util/HR";

// TODO: responsive

export default function About() {
  return (
    <motion.div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        About Me
      </motion.h1>
      <br />
      <div className="about-content">
        <motion.div
          className="about-content-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <AboutBio />
          <br />
          <br />
          <AboutContact />
          <HR />
        </motion.div>
        <motion.div
          className="about-content-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <AboutParagraph />
          <HR />
        </motion.div>
      </div>
    </motion.div>
  );
}
