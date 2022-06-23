var operator = prompt("Enter Operator (either -, +, * or / ):");
var number1 = parseFloat(prompt("Enter First Number"));
var number2 = parseFloat(prompt("Enter Second Number"));
let result;
if (operator === "-") {
  result = number1 - number2;
} else if (operator === "+") {
  result = number1 + number2;
} else if (operator === "*") {
  result = number1 * number2;
} else
{
  result = number1 / number2;
}
alert(result);
