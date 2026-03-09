const prompt = require("prompt-sync")();

let num1 = parseFloat(prompt("Insira o primeiro numero: "));
let num2 = parseFloat(prompt("Insira o segundo numero: "));
let num4 = parseFloat(prompt("Insira o terceiro numero: "));

media = parseFloat((num1 + num2 + num3) / 3);

if (media >= 7) {
  console.log("Aprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
