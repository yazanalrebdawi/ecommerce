import React, { useState, useEffect } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  useEffect(() => {
    const element = document.documentElement;
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
      element.classList.remove("light");
    }
  });

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        className={`w-12 cursor-pointer  transition-all duration-300 absolute ${
          theme === "dark" ? "opacity-0 w-0" : "opacity-100"
        }`}
        alt="Light"
      />
      <img
        src={DarkButton}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer transition-all duration-300   ${
          theme === "light" ? "opacity-0 w-0" : "opacity-100"
        }`}
        alt="Light"
      />
    </div>
  );
};

export default DarkMode;
