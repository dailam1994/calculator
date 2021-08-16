//console.log('Whoohoo!');

// Declaring global variables
let num1 = 0;
let num2 = 0;
let opSymbol = '';
let makeDeci = 0;

// Declaring a function to handle input numbers
function addNum(btnPress) {
    //console.log(btnPress);
    
    // Delcaring an If Statement to handle if the Decimal Point was pressed
    if (makeDeci == 0) {
        // Updating a variable to store mutiple input numbers
        num1 = num1 * 10 + btnPress;
    } else {
        num1 = num1 + (btnPress / makeDeci);
    }

    // Displaying input numbers to screen
    document.getElementById('screen').innerHTML = num1;
}

// Declaring a function to handle input operators
function operator(operand) {
    opSymbol = operand;
    num2 = num1;
    num1 = 0;
    makeDeci = 0;
}

// Declaring a function to handle calculations
function calculate() {
    let outputNum = 0;

    if ( opSymbol == '*') {
        outputNum = num2 * num1;
    }
    if ( opSymbol == '/') {
        outputNum = num2 / num1;
    }
    if ( opSymbol == '+') {
        outputNum = num2 + num1;
    }
    if ( opSymbol == '-') {
        outputNum = num2 - num1;
    }

    document.getElementById('screen').innerHTML = outputNum;
    num2 = outputNum;
    num1 = 0;
}

// Declaring a function to handle decimal point values
function decimal() {
    if (makeDeci == 0) {
        makeDeci = 10;
    } else {
        makeDeci = makeDeci * 10;
    }
}