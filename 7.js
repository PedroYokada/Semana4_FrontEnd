const prompt = require("prompt-sync")();

soma = parseInt(0);

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log(`SOMA = ${soma}`)