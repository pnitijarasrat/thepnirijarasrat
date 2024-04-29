import React from "react";
import "./Project.css";
import { motion } from "framer-motion";

export default function ProjectList({
  projectName,
  projectDetail,
  projectLink,
  projectStack,
}) {
  return (
    <div className="project-list">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        <h3>{projectName}</h3>
        <br />
        <h4>Tech Stack</h4>
        <ul>
          <li>Frontend: {projectStack.front}</li>
          <li>Backend: {projectStack.back}</li>
          <li>Database: {projectStack.db}</li>
        </ul>
        <br />
        <button>
          <a href={projectLink} target="_blank" rel="noreferrer">
            Visit
          </a>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        {projectDetail.map((p, index) => (
          <p key={index}>- {p}</p>
        ))}
      </motion.div>
    </div>
  );
}
