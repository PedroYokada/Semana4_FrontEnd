const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Insira num1: "));
let num2 = parseInt(prompt("Insira num2: "));

if (num1 > num2) {
  console.log("Maior numero = ${num1}");
} else if (num2 > num1) {
  console.log("Maior numero = ${num2}");
} else {
  console.log("Numeros iguais");
}
