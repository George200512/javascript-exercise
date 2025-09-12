// Define the functions to handle the mathematical operations.
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => {
    if (b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
let multiply = (a, b) => a * b;

// Get the number for the operation
function getOperand(text){
    proceed = true;
    while (proceed){
    let input = prompt(text);
        if (input !== null){
    input = Number(input);
    if (isNaN(input)){
        console.log('Wrong input. Please try again.');
    }else{
        return input;
    }
        }else{
            return 0;
        }
    }
}

// Build the calculator function
function calculator(){
    let firstOperand = getOperand('Enter your fist number: ');
    let operator = prompt('Enter an operator (+, -, *, /): ');
    let result, secondOperand;
    try {
    switch (operator){
        case "+":
        secondOperand = getOperand('Enter second number: ');
        result = add(firstOperand, secondOperand);
        console.log(`${firstOperand} + ${secondOperand} = ${result}`);
        break;
        case "-":
        secondOperator = getOperand('Enter second number: ');
        result = subtract(firstOperand, secondOperand);
        console.log(`${firstOperand} - ${secondOperand} = ${result}`);
        break;
        case "*":
        secondOperand = getOperand('Enter second number: ');
        result = multiply(firstOperand, secondOperand);
        console.log(`${firstOperand} * ${secondOperand} = ${result}`);
        break;
        case "/":
        secondOperand = getOperand('Enter second number: ');
        result = divide(firstOperand, secondOperand);
        console.log(`${firstOperand} / ${secondOperand} = ${result}`);
        break;
        default:
        console.log('Wrong Input.');
    }
    }catch(e){
        console.log(e.message);
    }
}

function main(){
    let $confirm;
    do{
        calculator();
        $confirm = confirm('Do you want to continue?: ');
    }while($confirm);
}

main();