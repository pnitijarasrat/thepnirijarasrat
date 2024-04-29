import React from "react";
import { motion } from "framer-motion";
import { liList } from "./LinkList.js";
import "./Home.css";
import useViewport from "../function/useViewport";
import { Link, useLocation } from "react-router-dom";

// TODO: make mobile nav version

export default function Nav() {
  const location = useLocation();

  const { width } = useViewport();

  const liHoverAnimate = {
    color: "white",
    scale: 1.2,
    cursor: "pointer",
  };

  return (
    <>
      {width < 400 ? null : (
        <motion.nav>
          <motion.ul>
            {liList.map((li) => (
              <Link
                key={li.key}
                style={{ textDecoration: "none" }}
                className={location.pathname === li.key ? "selected" : ""}
                to={li.key}
              >
                <motion.li whileHover={liHoverAnimate}>{li.name}</motion.li>
              </Link>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </>
  );
}
