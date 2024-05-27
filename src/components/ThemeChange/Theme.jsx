import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./style.css";

function Theme() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleToggleThem = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(theme);
  return (
    <div className={theme === "dark" && "darkTheme"}>
      <h1 style={{ color: theme === "dark" && "white" }}>Hello World!</h1>
      <button
        className={theme === "dark" ? "darkBtn" : "ligthBtn"}
        onClick={handleToggleThem}
      >
        {theme === "dark" ? "Light Mode" : "dark Mode"}
      </button>
    </div>
  );
}

export default Theme;
