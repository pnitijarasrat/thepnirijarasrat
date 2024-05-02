import { useEffect, useContext } from "react";
import { motion, animate } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import "./Home.css";
import { ThemeContext } from "../../ThemeProvider";

export default function ThemeButton({ theme, onClick }) {
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    const moon = document.querySelector(".moon");
    const sun = document.querySelector(".sun");

    if (moon && sun) {
      animate(moon, { opacity: darkTheme ? 1 : 0, x: darkTheme ? 0 : -100 });
      animate(sun, { opacity: !darkTheme ? 1 : 0, x: !darkTheme ? 0 : -100 });
    }
  }, [darkTheme]);

  return (
    <motion.div onClick={onClick} className="theme-button">
      <motion.div>
        <motion.div
          className="moon"
          style={{
            translateX: darkTheme ? "0" : "1000px",
            opacity: darkTheme ? "1" : "0",
            position: "absolute",
            left: "4px",
          }}
        >
          <FiMoon size={25} />
        </motion.div>
        <motion.div
          className="sun"
          style={{
            translateY: !darkTheme ? "0" : "1000px",
            opacity: !darkTheme ? "1" : "0",
            position: "absolute",
            left: "4px",
          }}
        >
          <FiSun size={25} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
