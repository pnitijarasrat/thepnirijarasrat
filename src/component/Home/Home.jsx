import React from "react";
import "./Home.css";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home({ currentView, handleChangeView }) {
  const socialHoverAnimate = {
    y: -10,
    color: "#f6c177",
  };

  const ppHoverAnimate = {
    scale: 1.2,
  };

  return (
    <div className="home-section">
      <div className="home-social">
        <motion.div
          className="home-social-list"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
        >
          <motion.a
            whileHover={socialHoverAnimate}
            href="https://www.instagram.com/qwertyadgsfhzxcvb/"
            target="_blank"
            rel="noreferrer"
          >
            <SiInstagram />
          </motion.a>
          <motion.a
            whileHover={socialHoverAnimate}
            href="https://www.linkedin.com/in/p-nitijarasrat/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          className="home-social-github"
          whileHover={socialHoverAnimate}
        >
          <a
            href="https://github.com/pnitijarasrat"
            target="_blank"
            rel="noreferrer"
          >
            Github{"  "} <SiGithub />
          </a>
        </motion.div>
      </div>
      {/* <motion.div */}
      {/*   initial={{ opacity: 0, y: 10 }} */}
      {/*   whileHover={ppHoverAnimate} */}
      {/*   animate={{ opacity: 1, y: 0 }} */}
      {/*   className="home-profile-picture" */}
      {/* > */}
      {/*   Profile Picture */}
      {/* </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="home-header"
      >
        Hi, my name is Puriwat. A frontend dev.
      </motion.div>
    </div>
  );
}
