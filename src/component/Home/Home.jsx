import { useEffect, useState, useContext } from "react";
import "./Home.css";
import ThemeButton from "./ThemeButton";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeProvider";

export default function Home() {
  const socialHoverAnimate = {
    y: -10,
    color: "#f6c177",
  };

  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`home-section ${darkTheme ? "dark-theme" : "light-theme"}`}>
      <div className="home-social">
        <motion.div
          className="home-social-list"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
        >
          <motion.div whileHover={socialHoverAnimate}>
            <a
              href="https://www.instagram.com/qwertyadgsfhzxcvb/"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram />
            </a>
          </motion.div>
          <motion.div whileHover={socialHoverAnimate}>
            <a
              href="https://www.linkedin.com/in/p-nitijarasrat/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </motion.div>
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
        <ThemeButton onClick={toggleTheme}>theme</ThemeButton>
      </div>
      <Header />
    </div>
  );
}

const Header = () => {
  const location = useLocation().pathname;
  const [headerText, setHeaderText] = useState(
    "Hi, my name is Puriwat. A frontend dev.",
  );

  useEffect(() => {
    switch (location) {
      case "/about":
        setHeaderText("Let me talk about myself.");
        break;
      case "/education":
        setHeaderText("I'm a Learner!");
        break;
      case "/skill":
        setHeaderText("Let see what I'm capable of.");
        break;
      case "/project":
        setHeaderText("The best way to learn is to do !");
        break;
      default:
        setHeaderText("Hi, my name is Puriwat. A frontend dev.");
    }
  }, [location]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`home-header`}
    >
      {headerText}
    </motion.div>
  );
};
