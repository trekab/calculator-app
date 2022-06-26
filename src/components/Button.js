import React from "react";

const Button = ({ buttonName, className, clickHandler }) => {
  return (
    <button
      className={`button ${className ? className : ""}`}
      onClick={() => {
        clickHandler(buttonName);
      }}
    >
      {buttonName}
    </button>
  );
};

export default Button;
