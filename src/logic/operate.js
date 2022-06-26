import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {
  let firstNumber;
  let secondNumber;

  try {
    firstNumber = new Big(numberOne);
    secondNumber = new Big(numberTwo);
  } catch {
    return 0;
  }

  switch (operation) {
    case "+":
      return firstNumber.plus(secondNumber).toString();
    case "-":
      return firstNumber.minus(secondNumber).toString();
    case "x":
      return firstNumber.times(secondNumber).toString();
    case "/":
      if (numberTwo === "0") {
        return "0";
      } else {
        return firstNumber.div(secondNumber).toString();
      }
    default:
      return 0;
  }
};

export default operate;
