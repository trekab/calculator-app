import React, { useEffect, useState } from "react";

const Header = () => {
  const [themeValue, setThemeValue] = useState(0);
  const themes = ["theme-one", "theme-two", "theme-three"];

  const handleThemeChange = (e) => {
    setThemeValue(e.target.value);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", themes[themeValue]);
  });

  return (
    <div className="header">
      <h1>calc</h1>
      <div className="header-toggle">
        <span className="theme-label">THEME</span>
        <div className="slidecontainer">
          <div className="slider-labels">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <input
            type="range"
            min="0"
            max="2"
            value={themeValue}
            className="slider"
            onChange={handleThemeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
