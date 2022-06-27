import React from "react";
import Big from "big.js";

const Display = ({ result }) => {
  if(result.length > 10){
    result = (new Big(result)).toPrecision(10)
  }
  return <div className="display">{result}</div>;
};

export default Display;
