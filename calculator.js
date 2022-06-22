
const operator = prompt("Enter operation to perform(+ , _ , * , /): ");
const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result;
if (operator ==("+") ){result = number1 + number2;}
else if (operator == ("-")){result = number1 - number2;}
else if (operator == ("*")){ result = number1 * number2;}
else {result = number1/number2}

alert( "The result is" +" "+ result);


