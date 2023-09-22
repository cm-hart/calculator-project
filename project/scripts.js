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
answer.addEventListener("click", getValuesFromArray);

// In the event listeners for the math operators, can you update the text for the screen element to show the user what is being typed into the top section? And then have the doMath function update with the answer?

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
  //reset the array to empty
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


//Calculate the answer
function doMath(value1Param, value2Param, operator) {
  if (operator === "+") {
    return Number(value1Param) + Number(value2Param);
  } else if (operator === "-") {
    answer = value1Param - value2Param;
    screen.textContent = answer;
  } else if (operator === "x") {
    return value1Param * value2Param;
  } else {
    return value1Param / value2Param;
  }
}
