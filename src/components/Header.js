import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>calc</h1>
      <div className="header-toggle">
        <span className="theme-label">THEME</span>
        <div className="tri-state-toggle">
          <label>1</label>
          <input type="radio" name="toggle" id="one" />
          <label>2</label>
          <input type="radio" name="toggle" id="two" />
          <label>3</label>
          <input type="radio" name="toggle" id="three" />
        </div>
      </div>
    </div>
  );
};

export default Header;
