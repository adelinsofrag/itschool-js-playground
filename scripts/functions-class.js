function displayAmount(ingredientAmount, ingredientText) {
  let response;

  if (ingredientAmount) {
    response =
      "Grame de " + ingredientText + ": " + ingredientAmount + " grame";
  }
  return console.log(response);
}

function cookPasta(
  pastaAmount,
  oilAmount,
  garlicAmount,
  pepperAmount,
  saltAmount
) {
  displayAmount(pastaAmount, "pasta");
  displayAmount(oilAmount, "oil");
  displayAmount(garlicAmount, "garlic");
  displayAmount(pepperAmount, "pepper");
  displayAmount(saltAmount, "salt");
  return;
}

cookPasta(450, 20, 10, 5, 1);

console.log("----------------------------------------");

const num1 = Number(prompt("Your first number"));
const num2 = Number(prompt("Your second number"));
const type = prompt("Type a choice: +, -, / or *");
let result = "";

const sum = function (sum1, sum2) {
  return sum1 + sum2;
};

const substract = function (sub1, sub2) {
  return sub1 - sub2;
};

const divide = function (div1, div2) {
  return div1 / div2;
};

const multiply = function (mul1, mul2) {
  return mul1 * mul2;
};

function calcOperation(num1, num2, type) {
  switch (type) {
    case "+":
      result = sum(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "":
      result = "Type a choice: +, -, / or *";
      break;
    default:
      result = "Type a choice: +, -, / or *";
  }

  return console.log(result);
}

calcOperation(num1, num2, type);

console.log("----------------------------------------");