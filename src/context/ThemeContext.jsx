import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
const ThemeContext = createContext();
function ThemeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "darkMode",
    window.matchMedia("(prefers-color-scheme:dark)").matches
  );
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useThemeContext() {
  const context = useContext(ThemeContext);
  return context;
}
export default ThemeContextProvider;
