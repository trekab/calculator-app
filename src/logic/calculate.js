import operate from "./operate";

const calculate = (data, btnName) => {
  const { total, next, operation, tempOp } = data;

  switch (btnName) {
    case "DEL":
      let result = total;
      if (total.toString().length > 1) {
        let strArr = total.toString().split("");
        strArr.pop();
        result = parseInt(strArr.join(""));
      } else {
        result = 0;
      }
      return {
        total: result,
        next: null,
        operation: null,
        tempOp: false,
      };
    case "RESET":
      return {
        total: 0,
        next: null,
        operation: null,
        tempOp: false,
      };
    case "+":
    case "-":
    case "/":
    case "x":
      if (next && operation) {
        return {
          total: operate(total, next, operation),
          next: null,
          operation: btnName,
          tempOp: false,
        };
      }
      return { total, next: null, operation: btnName, tempOp: false };
    case "=":
      if (operation)
        return {
          total: operate(total, next, operation),
          next: null,
          operation: null,
          tempOp: true,
        };
      return { total, next: null, operation: null, tempOp: true };
    case ".":
      if (next) {
        return { total, next: `${next}.`, operation, tempOp: false };
      }
      if (total) {
        return { total: `${total}.`, next, operation, tempOp: false };
      }
      return { total: "0.", next, operation };
    default:
      if (operation)
        return { total, next: next ? next + btnName : btnName, operation };
      if (tempOp) return { total: btnName, next, operation, tempOp: false };
      return { total: total ? total + btnName : btnName, next, operation };
  }
};

export default calculate;
