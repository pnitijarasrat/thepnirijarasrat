import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

export default function Education() {
  return (
    <>
      <motion.div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          Education
        </motion.h1>
        <br />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
          exit={{ opacity: 0, x: 100 }}
        >
          <h3>High School</h3>
          <br />
          <div className="edu-list">
            <span>Debsirin School (DSA134)</span>
            <span>GPAX: 3.99</span>
          </div>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          exit={{ opacity: 0, x: 100 }}
        >
          <h3>University</h3>
          <br />
          <div className="edu-list">
            <span>Industrial Engineering Chulalongkorn University</span>
            <span>Ungraduted (May 2024)</span>
          </div>
        </motion.div>
        <br />
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, x: 100 }}
        >
          <h3>Related Coursework</h3>
          <br />
          <div className="edu-list">
            <span>
              <b>The Web Development Bootcamp </b>- Learn HTML, CSS, and
              JavaScript
            </span>
            <span>Udemy</span>
          </div>
          <br />
          <div className="edu-list">
            <span>
              <b>React The Complete Guide</b> - Learn React Library
            </span>
            <span>Udemy</span>
          </div>
          <br />
          <div className="edu-list">
            <span>
              <b>Mastering TypeScript</b> - Learn TypeScript and implementation
              with React App
            </span>
            <span>Udemy</span>
          </div>
          <br />
          <div className="edu-list">
            <span>
              <b>JavaScript Algorithms and Data Structures Masterclass</b> -
              Learn Big O and Algorithms
            </span>
            <span>Udemy</span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
