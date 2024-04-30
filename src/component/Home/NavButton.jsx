import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { liList } from "./LinkList.js";
import { useLocation, Link } from "react-router-dom";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const DisplayButton = ({ position }) => {
  const location = useLocation().pathname;

  for (let i = 0; i < liList.length; i++) {
    if (location === liList[i].key) {
      if (position === "left" && i === 0)
        return <motion.button style={{ visibility: "hidden" }}></motion.button>;
      if (position === "right" && i === liList.length - 1)
        return <motion.button style={{ visibility: "hidden" }}></motion.button>;
      if (position === "left")
        return (
          <Link to={liList[i - 1].key}>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              whileTap={{ scale: 0.97 }}
            >
              <MdOutlineKeyboardArrowLeft size={25} />
              {liList[i - 1].name}
            </motion.button>
          </Link>
        );
      if (position === "right")
        return (
          <Link to={liList[i + 1].key}>
            <motion.button
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              whileTap={{ scale: 0.97 }}
            >
              {liList[i + 1].name}
              <MdOutlineKeyboardArrowRight size={25} />
            </motion.button>
          </Link>
        );
    }
  }
};

export default function NavButton() {
  return (
    <motion.div className="nav-button-container">
      <DisplayButton position="left" />
      <DisplayButton position="right" />
    </motion.div>
  );
}
