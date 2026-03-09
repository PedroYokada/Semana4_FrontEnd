const prompt = require("prompt-sync")();

let num = parseInt(prompt("Insira um numero para a tabuada: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} X ${i} = ${num * i}`);
}