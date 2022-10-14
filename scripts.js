
// -------- Basic Operator Functions -------

function division(num1, num2) {
    total = num1 / num2;
    return total;
}

function multiplication(num1, num2) {
    total = num1 * num2;
    return total;
}

function addition(num1, num2) {
    total = num1 + num2;
    return total;
}

function subtraction(num1, num2) {
    total = num1 - num2;
    return total;
}

// num1 = 12;
// num2 = 2;
// operator = "multiply";
// operate(num1, num2, operator);
// console.log(total);

function operate(num1, num2, operator) {
    if (operator == "divide") {
        division(num1, num2);
    }
    else if (operator == "multiply") {
        multiplication(num1, num2);
    }
    else if (operator == "add") {
        addition(num1, num2);
    }
    else if (operator == "subtract") {
        subtraction(num1, num2);
    }
}


// --------- Display functions ---------

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero")

const divBtn = document.getElementById("divide");
const multBtn = document.getElementById("multiply");
const subBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");

const equals = document.getElementById("equals");

const clear = document.getElementById("clear");

const currentDisplay = document.getElementById("current");
const previous = document.getElementById("prev");


let buildNumber = '';


one.addEventListener('click', function pressOne() {
    clearForNew();
    newNumber = 1;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

two.addEventListener('click', function pressTwo() {
    clearForNew();
    newNumber = 2;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

three.addEventListener('click', function pressThree() {
    clearForNew();
    newNumber = 3;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

four.addEventListener('click', function pressFour() {
    clearForNew();
    newNumber = 4;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

five.addEventListener('click', function pressFive() {
    clearForNew();
    newNumber = 5;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

six.addEventListener('click', function pressSix() {
    clearForNew();
    newNumber = 6;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

seven.addEventListener('click', function pressSeven() {
    clearForNew();
    newNumber = 7;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

eight.addEventListener('click', function pressEight() {
    clearForNew();
    newNumber = 8;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

nine.addEventListener('click', function pressNine() {
    clearForNew();
    newNumber = 9;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

zero.addEventListener('click', function pressZero() {
    clearForNew();
    newNumber = 0;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

decimal.addEventListener('click', function pressDecimal() {
    clearForNew();
    newNumber = ".";
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
});

divBtn.addEventListener('click', function div() {
    oldNumber = currentDisplay.textContent;
    previous.textContent = currentDisplay.textContent.concat(" ÷");
    currentDisplay.textContent = '';
    buildNumber = '';
    operator = "divide";
});
multBtn.addEventListener('click', function mult() {
    oldNumber = currentDisplay.textContent;
    previous.textContent = currentDisplay.textContent.concat(" x");
    currentDisplay.textContent = '';
    buildNumber = '';
    operator = "multiply";
});
subBtn.addEventListener('click', function sub() {
    oldNumber = currentDisplay.textContent;
    previous.textContent = currentDisplay.textContent.concat(" -");
    currentDisplay.textContent = '';
    buildNumber = '';
    operator = "subtract";
});
addBtn.addEventListener('click', function add() {
    oldNumber = currentDisplay.textContent;
    previous.textContent = currentDisplay.textContent.concat(" +");
    currentDisplay.textContent = '';
    buildNumber = '';
    operator = "add";
});

equals.addEventListener('click', function operation() {
    previous.textContent = previous.textContent.concat(` ${currentDisplay.textContent} =`);
    buildNumber = '';
    num1 = parseFloat(oldNumber);
    num2 = parseFloat(currentDisplay.textContent);
    operate(num1, num2, operator);
    currentDisplay.textContent = total;
});

// --------- Ambitious Clear (AC / C) functions ---------

function clearForNew() {
    if (previous.textContent.includes("=")) {
        previous.textContent = '';
    }
}

function clearScreen() {
    currentDisplay.textContent = '';
    previous.textContent = '';
    buildNumber = '';
};

clear.addEventListener('click', clearScreen);

// function clearCurrent() {
//     save = previous.textContent;
//     currentDisplay.textContent = '';
//     buildNumber = '';
//     clear.textContent = "AC";
// }

// function ACButton() {
//         clear.textContent = "AC";
//         clear.addEventListener('click', clearScreen)
// }

// function CButton() {
//         clear.textContent = "C";
//         clear.addEventListener('click', clearCurrent)
// }
