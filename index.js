
// GET ELLEMENTS FROM HTML
const display = document.querySelector(".js-display-content")
const digits = document.getElementsByClassName("digits_item")
const operators = document.getElementsByClassName("operators_item")
const equals_button = document.querySelector(".equals_item")
const clear_button = document.querySelector(".clear_item")



let firstNum = "";
let secondNum = "";
let result = 0;
let operator = null

// DISPLAY INITIIAL VALUE  WITH BLINK ANIMATION
display.innerHTML = "|"
display.id = "Blink"




// ADDING CLICK HANDLERS TO NUMBER BUTTONS

for (let i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", (event) => {
        // IF USER PRESSED THE OPERATOR THEN WE ADD VALUE TO THE secondNum
        if (operator === null) {
            firstNum += event.target.innerHTML
            display.innerHTML = firstNum
            display.id = ""
        } else {
            secondNum += event.target.innerHTML
            display.innerHTML = secondNum
        }

    })
}

// ADDING CLICK HANDLERS TO OPERATORS BUTTONS

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", (event) => {
        // PUT INNER HTML INTO OPERATOR VARIABLE
        operator = event.target.innerHTML
        display.innerHTML = secondNum
    })
}

// ADDING EQUALS BUTTON CLLICK HANDLER 
equals_button.addEventListener("click", () => {

    if (operator === "+") {
        result = String(Number(firstNum) + Number(secondNum))
        display.innerHTML = result
        firstNum = "";
        secondNum = "";
    }
    if (operator === "-") {
        result = String(Number(firstNum) - Number(secondNum))
        display.innerHTML = result
        firstNum = "";
        secondNum = "";
    }
    if (operator === "*") {
        result = String(Number(firstNum) * Number(secondNum))
        display.innerHTML = result
        firstNum = "";
        secondNum = "";
    }
    if (operator === "/") {
        // IF SOME ARGUMNEWAS DIVIDED BY ZERO
        if (firstNum || secondNum === "0") {
            result = "ERROR : Can`t divide by 0"
            display.innerHTML = result
            firstNum = "";
            secondNum = "";
        } else {
            result = String(Number(firstNum) / Number(secondNum))
            display.innerHTML = result
            firstNum = "";
            secondNum = "";
        }

    }


})


// ADDING CLEAR BUTTON CLICK HANDLER
clear_button.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    result = 0;
    operator = null
    // after resetting the results, we return the string value of the display
    display.id = "Blink"
    display.innerHTML = "|"

})


