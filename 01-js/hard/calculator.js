/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number == 0)  throw new Error("Division by zero is not allowed");
    else this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    // cleaning the expression
    var res = "";
    for (let i = 0; i < expression.length; i++) {
        let check = expression.charAt(i);
        if (check == '0' || check == '1' || check == '2' ||
        check == '3' || check == '4' || check == '5' ||
        check == '6' || check == '7' || check == '8' ||
        check == '9' || check == '+' || check == '-' ||
        check == '*' || check == '/' || check == '(' ||
        check == ')' || check == '.') res += check;
    }
    
    // edge case: division by zero
    for(let i = 0; i < res.length-1; i++) {
      if (res.charAt(i) == '/' && res.charAt(i+1) == '0') {
        throw new Error("Division by zero is not allowed");
      }
    }

    // evaluating the mathematical function
    var ans = eval(res);
    this.result = ans;
    return ans;

  }
}

module.exports = Calculator;
