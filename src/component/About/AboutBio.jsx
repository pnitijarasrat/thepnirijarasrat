import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const BioList = ({ year, event }) => {
  return (
    <div className="about-bio-list">
      <span className="year">{year}</span>
      <span>{event}</span>
    </div>
  );
};

const bioList = [
  {
    year: "2001",
    event: "Born in Bangkok",
  },
  {
    year: "2020",
    event: "Enrolled Industrial Engineering @ Chulalongkorn University",
  },
  {
    year: "2023",
    event: "Interned as Frontend Developer @ Donuts Bangkok",
  },
  {
    year: "2024",
    event: "Graduated from Chulalongkorn University",
  },
];

export default function AboutBio() {
  return (
    <motion.div>
      <motion.h3>Bio</motion.h3>
      <motion.div className="about-bio-container">
        {bioList.map((bio, key) => (
          <BioList key={key} year={bio.year} event={bio.event} />
        ))}
      </motion.div>
    </motion.div>
  );
}
