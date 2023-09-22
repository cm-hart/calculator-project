//Variables
let add = document.getElementById("add");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let subtract = document.getElementById("subtract");

let goBack = document.getElementById("go-back");
let answer = document.getElementById("answer");
let clear = document.querySelector(".double");

let screen = document.querySelector(".screen");

let numberBox = document.getElementsByClassName("number-button");

let value1 = "";
let value2 = "";
let mathOperator = "";

//Event Listeners
answer.addEventListener("click", calculate);

add.addEventListener("click", function () {
  let content = add.textContent;
  mathOperator = content;
});

subtract.addEventListener("click", function () {
  let content = subtract.textContent;
  mathOperator = content;
});

divide.addEventListener("click", function () {
  let content = divide.textContent;
  mathOperator = content;
});

multiply.addEventListener("click", function () {
  let content = multiply.textContent;
  mathOperator = content;
});

clear.addEventListener("click", function () {
  // reset all our values
  mathOperator = "";
  value1 = 0;
  value2 = 0;
  screen.textContent = "0";
});

goBack.addEventListener("click", function () {
  // we go back through the possible scenarios, dealing with each one

  // if the second value is multiple digits, then lop the last digit off
  if (value2.length > 1) {
    value2 = value2.slice(0, -1);
    sceen.textContent = value2;
    // if the value is single digit, make it no value and set the screen to 0
  } else if (value2.length === 1) {
    value2 = "";
    screen.textContent = "0";
    // if neither of those were true, then there is no second value, so we move on to the operator
    // if the operator is set, then set it to no value (going back to the first number)
  } else if (mathOperator !== "") {
    mathOperator = "";
    // if the operator was already no value, then we move on to the first number
    // if the first number is multiple digits, then lop the last digit off (and set the screen to the new value)
  } else if (value1.length > 1) {
    value1 = value1.slice(0, -1);
    screen.textContent = value1;
    // if the first number is single digit, make it no value and set the screen to 0
  } else if (value1.length === 1) {
    value1 = "";
    screen.textContent = "0";
  }
});

//Add event listeners to number buttons
for (let i = 0; i < numberBox.length; i++) {
  numberBox[i].addEventListener("click", function () {
    let content = numberBox[i].textContent;
    // if there was no operator yet, then add the number to the first value
    if (mathOperator === "") {
      value1 += content;
      screen.textContent = value1;
      // if there was an operator, then add the number to the second value
    } else {
      value2 += content;
      screen.textContent = value2;
    }
  });
}

// this function does the math, serving as a "helper function" for the calculate function

function doMath(value1Param, value2Param, operator) {
  if (operator === "+") {
    return value1Param + value2Param;
  } else if (operator === "-") {
    return value1Param - value2Param;
  } else if (operator === "×") {
    return value1Param * value2Param;
  } else {
    // avoid long decimals by rounding
    // stretch goal would be to make decimals work!
    return Math.round(value1Param / value2Param);
  }
}

function calculate() {
  // if there is no operator or no second value, then there is nothing to calculate
  if (mathOperator === "" || value2 === '') {
    // return with no value just ends the function, skipping the rest of the code
    return;
  }

  // if we didn't return, there must be an operator and a second value, so we do the math
  let answer = doMath(Number(value1), Number(value2), mathOperator);

  // we set the screen to the answer
  screen.textContent = answer;

  // reset all our values
  value1 = '';
  value2 = "";
  mathOperator = "";
}
