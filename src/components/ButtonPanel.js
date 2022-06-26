import React from "react";
import Button from "./Button";

const ButtonPanel = () => {
  return (
    <div className="buttons">
      <Button buttonName={7} />
      <Button buttonName={8} />
      <Button buttonName={9} />
      <Button buttonName={"DEL"} className="del-btn" />
      <Button buttonName={4} />
      <Button buttonName={5} />
      <Button buttonName={6} />
      <Button buttonName={"+"} />
      <Button buttonName={1} />
      <Button buttonName={2} />
      <Button buttonName={3} />
      <Button buttonName={"-"} />
      <Button buttonName={"."} />
      <Button buttonName={0} />
      <Button buttonName={"/"} />
      <Button buttonName={"x"} />
      <Button buttonName={"RESET"} className="reset-btn" />
      <Button buttonName={"="} className="equals-btn" />
    </div>
  );
};

export default ButtonPanel;
