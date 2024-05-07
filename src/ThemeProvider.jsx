import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const handleGetLocalStorage = (text) => {
  if (text === "true") return true;
  else return false;
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    handleGetLocalStorage(localStorage.getItem("darkTheme")),
  );

  useEffect(() => {
    if (!localStorage.getItem("darkTheme")) {
      localStorage.setItem("darkTheme", true);
    }
    console.log(typeof localStorage.getItem("darkTheme"));
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
