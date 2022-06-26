import React from "react";

const Button = ({ buttonName, className }) => {
  return (
    <button className={`button ${className ? className : ""}`}>
      {buttonName}
    </button>
  );
};

export default Button;
