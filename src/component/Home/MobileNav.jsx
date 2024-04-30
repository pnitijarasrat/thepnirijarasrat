import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { liList } from "./LinkList.js";
import { IoMdArrowDropdown } from "react-icons/io";

import "./Home.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation().pathname;
  const navigate = useNavigate();

  const displayLocation = () => {
    for (let i = 0; i < liList.length; i++) {
      if (location === liList[i].key) return liList[i].name;
    }
    return "404 Not Found";
  };
  const clickNav = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
  }, [isOpen]);

  return (
    <motion.div>
      {" "}
      <motion.div
        className="mobile-nav-container"
        onClick={clickNav}
        whileTap={{ scale: 0.97 }}
      >
        <div className="location">{displayLocation()}</div>
        <div className="arrow">
          <IoMdArrowDropdown size={30} />
        </div>
      </motion.div>
      {isOpen && (
        <motion.div className="mobile-nav-tabpane">
          <ul>
            {liList.map((li) => (
              <motion.li
                key={li.key}
                onClick={() => {
                  handleNavigation(li.key);
                }}
                whileTap={{ scale: 0.97 }}
              >
                {li.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
}
