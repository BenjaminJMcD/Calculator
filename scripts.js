
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

// --------- Display/Button functions ---------

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

const currentDisplay = document.getElementById("current");
const previous = document.getElementById("prev");

let buildNumber = '';

one.addEventListener('click', function pressOne() {
    clearForNew();
    newNumber = 1;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

two.addEventListener('click', function pressTwo() {
    clearForNew();
    newNumber = 2;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

three.addEventListener('click', function pressThree() {
    clearForNew();
    newNumber = 3;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

four.addEventListener('click', function pressFour() {
    clearForNew();
    newNumber = 4;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

five.addEventListener('click', function pressFive() {
    clearForNew();
    newNumber = 5;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

six.addEventListener('click', function pressSix() {
    clearForNew();
    newNumber = 6;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

seven.addEventListener('click', function pressSeven() {
    clearForNew();
    newNumber = 7;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

eight.addEventListener('click', function pressEight() {
    clearForNew();
    newNumber = 8;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    saveOldScreen = previous.textContent;
    saveOldNumber = oldNumber;
    C();
});

nine.addEventListener('click', function pressNine() {
    clearForNew();
    newNumber = 9;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

zero.addEventListener('click', function pressZero() {
    clearForNew();
    newNumber = 0;
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

decimal.addEventListener('click', function pressDecimal() {
    clearForNew();
    newNumber = ".";
    currentDisplay.textContent = `${buildNumber}${newNumber}`
    buildNumber = currentDisplay.textContent;
    C();
});

// --------- OPERATOR FUNCTIONS ---------

const divBtn = document.getElementById("divide");
const multBtn = document.getElementById("multiply");
const subBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");

divBtn.addEventListener('click', function div() {
    if (buildNumber == '') {
        startWithNumber();
    }
    else {
        oldNumber = currentDisplay.textContent;
        saveOldNumber = oldNumber;
        previous.textContent = currentDisplay.textContent.concat(" ÷");
        saveOldScreen = previous.textContent;
        currentDisplay.textContent = '';
        buildNumber = '';
        operator = "divide";
        AC();
    }
});

multBtn.addEventListener('click', function mult() {
    if (buildNumber == '') {
        startWithNumber();
    }
    else {
        oldNumber = currentDisplay.textContent;
        saveOldNumber = oldNumber;
        previous.textContent = currentDisplay.textContent.concat(" x");
        saveOldScreen = previous.textContent;
        currentDisplay.textContent = '';
        buildNumber = '';
        operator = "multiply";
        AC();
    }
});

subBtn.addEventListener('click', function sub() {
    if (buildNumber == '') {
        startWithNumber();
    }
    else {
        oldNumber = currentDisplay.textContent;
        saveOldNumber = oldNumber;
        previous.textContent = currentDisplay.textContent.concat(" -");
        saveOldScreen = previous.textContent;
        currentDisplay.textContent = '';
        buildNumber = '';
        operator = "subtract";
        AC();
    }
});

addBtn.addEventListener('click', function add() {
    if (buildNumber == '') {
        startWithNumber();
    }
    else {
        oldNumber = currentDisplay.textContent;
        saveOldNumber = oldNumber;
        previous.textContent = currentDisplay.textContent.concat(" +");
        saveOldScreen = previous.textContent;
        currentDisplay.textContent = '';
        buildNumber = '';
        operator = "add";
        AC();
    }
});

function startWithNumber() {
        previous.textContent = saveOldScreen;
        oldNumber = saveOldNumber;
        buildNumber = '';
}

// --------- EQUALS FUNCTION --------

const equals = document.getElementById("equals");

equals.addEventListener('click', function operation() {
    previous.textContent = previous.textContent.concat(` ${currentDisplay.textContent} =`);
    buildNumber = '';
    num1 = parseFloat(oldNumber);
    num2 = parseFloat(currentDisplay.textContent);
    operate(num1, num2, operator);
    currentDisplay.textContent = total;
    buildNumber = currentDisplay.textContent;
    AC();
});

// --------- CLEAR (AC / C) FUNCTIONS ---------

const clear = document.getElementById("clear");

function clearForNew() {
    if (previous.textContent.includes("=")) {
        previous.textContent = '';
    }
}

function AC() {
    clear.textContent = "AC";
    clear.addEventListener('click', function clearAll() {
        previous.textContent = '';
        currentDisplay.textContent = '';
        buildNumber = '';
        oldNumber = '';
    });
}

function C() {
    clear.textContent = "C";
    clear.addEventListener('click', function clearCurrent() {
        previous.textContent = saveOldScreen;
        oldNumber = saveOldNumber
        buildNumber = '';
        currentDisplay.textContent = buildNumber;
    });
}

AC();

// ---------- TOGGLE NEG ---------

const toggleNeg = document.getElementById("toggleNeg");

function negate() {
    if (currentDisplay.textContent.includes("-")) {
        currentDisplay.textContent = buildNumber.substring(1);
        buildNumber = currentDisplay.textContent;
    }
    else {
        currentDisplay.textContent = `-${buildNumber}`;
        buildNumber = currentDisplay.textContent;
    }
}

toggleNeg.addEventListener('click', negate);

// ---------- PERCENT BUTTON ---------

const percentBtn = document.getElementById("percent");

function percent() {
    if (buildNumber == null) {
        currentDisplay.textContent = '';
        buildNumber = '';
        
    }
    else {
        percentage = parseFloat(buildNumber) / 100;
        currentDisplay.textContent = percentage;
        buildNumber = currentDisplay.textContent;
    }
}

percentBtn.addEventListener('click', percent);