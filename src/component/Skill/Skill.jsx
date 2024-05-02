import React, { useEffect, useRef } from "react";
import "./Skill.css";
import { motion, useInView } from "framer-motion";
import HR from "../Util/HR";

export default function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        Skill
      </motion.h1>
      <br />
      <div className="skill-container">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          exit={{ opacity: 0, y: 100 }}
        >
          <motion.h3>Frontend Development</motion.h3>
          <motion.ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          exit={{ opacity: 0, y: 100 }}
        >
          <motion.h3>Backend Development</motion.h3>
          <motion.ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Google Firebase</li>
            <li>SQL</li>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, y: 100 }}
        >
          <motion.h3>React Library</motion.h3>
          <motion.ul>
            <li>antd</li>
            <li>react-router-dom</li>
            <li>framer-motion</li>
            <li>locomotive-scroll</li>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          exit={{ opacity: 0, y: 100 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, y: 100 }}
          >
            <motion.h3>Designing Tools</motion.h3>
            <motion.ul>
              <li>Figma</li>
              <li>Customer Journey Map</li>
              <li>Service Blueprint</li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
      <HR />
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
      >
        Learning Plan
      </motion.h1>
      <br />
      {isInView && (
        <div className="skill-container">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            exit={{ opacity: 0, y: 100 }}
          >
            <motion.h3>Web Development</motion.h3>
            <motion.ul>
              <li>NextJS</li>
              <li>GraphQL</li>
              <li>Testing (Probably JEST)</li>
              <li>GO</li>
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            exit={{ opacity: 0, y: 100 }}
          >
            <motion.h3>Language</motion.h3>
            <motion.ul>
              <li>Japanese</li>
            </motion.ul>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
