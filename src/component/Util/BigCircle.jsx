import React from "react";
import { motion } from "framer-motion";
import "./BigCircle.css";
import { TiStarFullOutline } from "react-icons/ti";
import { IoRocketSharp } from "react-icons/io5";

export default function BigCircle() {
  return (
    <motion.div
      className="red"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
}

export function PurpleCircle() {
  return (
    <motion.div
      className="purple"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { delay: 0.6 } }}
      exit={{ opacity: 0, scale: 0 }}
    />
  );
}

export function Sky() {
  return (
    <motion.div
      className="sky"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, y: -100 }}
    >
      <motion.div className="star">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6 },
            rotate: 180,
          }}
          exit={{ opacity: 0, y: -100 }}
        >
          <TiStarFullOutline size={100} />
        </motion.div>
        <motion.div
          className="rocket"
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0, transition: { delay: 0.7 } }}
          exit={{ opacity: 0, y: 100, x: 0 }}
        >
          <IoRocketSharp size={150} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
