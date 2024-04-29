import React from "react";
import "./Welcome.css";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      className="welcome-section"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <h1>Welcome</h1>
      <br />
      <p>
        Hi, I'm Puriwat, a frontend development enthusiast currently studying
        Industrial Engineering at Chulalongkorn University. I'm passionate about
        crafting engaging and user-friendly web experiences through code. Let's
        connect to discuss how I can contribute to your team!
      </p>
    </motion.div>
  );
}
