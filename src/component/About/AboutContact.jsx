import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const ContactList = ({ type, value, link }) => {
  return (
    <div className="about-bio-list">
      <span className="year">{type}</span>
      {link ? (
        <a href={link} target="_blank" rel="noreferrer">
          <button>{value}</button>
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

const contactList = [
  {
    type: "Tel",
    value: "080-429-2884",
  },
  {
    type: "E-Mail",
    value: "puriwatds@gmail.com",
  },
  {
    type: "LinkedIn",
    value: "Click",
    link: "https://www.linkedin.com/in/p-nitijarasrat/",
  },
];

export default function AboutContact() {
  return (
    <motion.div>
      <motion.h2>Contact</motion.h2>
      <motion.div className="about-bio-container">
        {contactList.map((ct, key) => (
          <ContactList
            key={key}
            type={ct.type}
            value={ct.value}
            link={ct.link || null}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
