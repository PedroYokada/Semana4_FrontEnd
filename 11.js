const prompt = require("prompt-sync")();

let num = parseFloat(prompt("Insira um numero: "));

if (num > 0) {
  console.log(`Numero ${num} é positivo`);
} else if (num < 0) {
  console.log(`Numero ${num} é negativo`);
} else {
  console.log(`Numero ${num} é ZERO`);
}
