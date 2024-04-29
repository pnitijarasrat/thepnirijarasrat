import React from "react";
import "./Project.css";
import { motion } from "framer-motion";
import ProjectList from "./ProjectList";

const project = [
  {
    name: "IBM&CO Website",
    link: "https://ibm-official.onrender.com/",
    stack: {
      front: "Vite React",
      back: "Google Firebase",
      db: "Firebase Realtime Database",
    },
    p: [
      "This website was created to facilitate Industrial Engineering students in Industrial Business Management class.",
      "Members can apply to join the projects during course. There were Admins who can accept or decline the application.",
      "There were around 90 users who had their own account.",
      "This website also has authentication using React Context.",
    ],
  },
  {
    name: "Payroll Service Prototype",
    link: "https://payroll-a8av.onrender.com",
    stack: { front: "Vite React", back: "NodeJS", db: "MongoDB" },
    p: [
      "This prototype was developed for usability testing.",
      "Main features are registering new employee, updating employees' attendance.",
    ],
  },
];

export default function Project() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
      >
        Project
      </motion.h1>
      <motion.div className="project-container">
        {project.map((p, key) => (
          <ProjectList
            key={key}
            projectName={p.name}
            projectDetail={p.p}
            projectLink={p.link}
            projectStack={p.stack}
          />
        ))}
      </motion.div>
    </div>
  );
}
