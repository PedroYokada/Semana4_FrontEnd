const prompt = require("prompt-sync")();

let num = Number(prompt("Insira um numero: "));

if (num % 2 === 0) {
  console.log("Par");
} else {
  console.log("Impar");
}
