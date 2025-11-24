let firstNumber = prompt("Introduce el primer número: ");
let secondNumber = prompt("Introduce el segundo número: ");
let thirdNumber = prompt("Introduce el tercer número: ");

if (firstNumber <= secondNumber && firstNumber <= thirdNumber) {
    if (secondNumber <= thirdNumber) {
        console.log(firstNumber, secondNumber, thirdNumber);
    }
    else {
        console.log(firstNumber, thirdNumber, secondNumber);
    }
}
else if (secondNumber <= firstNumber && secondNumber <= thirdNumber) {
    if (firstNumber <= thirdNumber) {
        console.log(secondNumber, firstNumber, thirdNumber);
    }
    else {
        console, log(secondNumber, thirdNumber, firstNumber);
    }
}
else if (thirdNumber <= firstNumber && thirdNumber <= secondNumber) {
    if (firstNumber <= secondNumber) {
        console.log(thirdNumber, firstNumber, secondNumber);
    }
    else {
        console.log(thirdNumber, secondNumber, firstNumber);
    }
}