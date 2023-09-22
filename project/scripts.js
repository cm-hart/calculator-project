//Variables
let add = document.getElementById("add");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("multiply");
let subtract = document.getElementById("subtract");

let goBack = document.getElementById("go-back")
let answer = document.getElementById("answer");
let clear = document.querySelector(".double");

let numberBox = document.getElementsByClassName('number-button');

let value1 = 0;
let value2 = 0;
let mathOperator;

let userInputArray = [];

//Event Listeners
answer.addEventListener("click", getValuesFromArray)

add.addEventListener("click", function(){
    let content = add.textContent
    userInputArray.push(content)
});

subtract.addEventListener("click", function(){
    let content = subtract.textContent
    userInputArray.push(content)
});

divide.addEventListener("click", function(){
    let content = divide.textContent
    userInputArray.push(content)
});

multiply.addEventListener("click", function(){
    let content = multiply.textContent
    userInputArray.push(content)
});

clear.addEventListener("click", function(){
    //reset the array to empty
    userInputArray = []
});

goBack.addEventListener("click", function(){
    userInputArray.pop();
    console.log(userInputArray)
})

//Add event listeners to number buttons
for (let i = 0; i < numberBox.length; i++) {
    numberBox[i].addEventListener('click', function(){
        userInputArray.push(numberBox[i].textContent)
        console.log(userInputArray)
    });
}

//Use the array to get the first number, operator and second number
function getValuesFromArray(){
    value1 = userInputArray[0];
    mathOperator = userInputArray[1];
    value2 = userInputArray[2];
    console.log(doMath(value1, value2, mathOperator));
}

//Calculate the answer
function doMath(value1Param, value2Param, operator){
    if(operator === '+'){
        return Number(value1Param) + Number(value2Param)     
    } else if(operator === '-'){
        return value1Param - value2Param
    } else if(operator === '×'){
        return value1Param * value2Param
    } else {
        return value1Param / value2Param
    }
}


