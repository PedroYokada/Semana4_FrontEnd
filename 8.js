const prompt = require("prompt-sync")();

let idade = parseInt(prompt("Insira a sua idade: "));

if (idade >= 18) {
  console.log(`MAIOR DE IDADE, IDADE = ${idade}`);
} else {
  console.log(`MENOR DE IDADE, IDADE = ${idade}`);
}
