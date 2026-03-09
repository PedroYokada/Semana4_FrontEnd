const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Insira o primeiro numero: "));

let num2 = parseFloat(prompt("Insira o segundo numero: "));

let op = prompt("Insira a operação +,-,*,/: ");

if (op === "+") {
  num3 = num1 + num2;
  console.log(`SOMA = ${num3}`);
} else if (op === "-") {
  num3 = num1 - num2;
  console.log(`SUBTRAÇÃO = ${num3}`);
} else if (op === "*") {
  num3 = num1 * num2;
  console.log(`MULTIPLICAÇÃO = ${num3}`);
} else if (op === "/") {
  if (num2 === 0) {
    console.log("NÃO PODE TER DENOMINADOR IGUAL A ZERO");
  } else {
    num3 = num1 / num2;
    console.log(`DIVISÃO = ${num3}`);
  }
} else {
  console.log("OPERAÇÃO INVÁLIDA");
}
