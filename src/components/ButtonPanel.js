import React from "react";
import Button from "./Button";

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = (buttonName) => clickHandler(buttonName);

  return (
    <div className="buttons">
      <Button clickHandler={handleClick} buttonName={"7"} />
      <Button clickHandler={handleClick} buttonName={"8"} />
      <Button clickHandler={handleClick} buttonName={"9"} />
      <Button clickHandler={handleClick} buttonName={"DEL"} className="del-btn" />
      <Button clickHandler={handleClick} buttonName={"4"} />
      <Button clickHandler={handleClick} buttonName={"5"} />
      <Button clickHandler={handleClick} buttonName={"6"} />
      <Button clickHandler={handleClick} buttonName={"+"} />
      <Button clickHandler={handleClick} buttonName={"1"} />
      <Button clickHandler={handleClick} buttonName={"2"} />
      <Button clickHandler={handleClick} buttonName={"3"} />
      <Button clickHandler={handleClick} buttonName={"-"} />
      <Button clickHandler={handleClick} buttonName={"."} />
      <Button clickHandler={handleClick} buttonName={"0"} />
      <Button clickHandler={handleClick} buttonName={"/"} />
      <Button clickHandler={handleClick} buttonName={"x"} />
      <Button clickHandler={handleClick} buttonName={"RESET"} className="reset-btn" />
      <Button clickHandler={handleClick} buttonName={"="} className="equals-btn" />
    </div>
  );
};

export default ButtonPanel;
