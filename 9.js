const prompt = require("prompt-sync")();

let texto = prompt("Insira uma palavra: ");

// O regex /\s+/g identifica todos os espaços e substitui por nada
let totalLetras = texto.replace(/\s+/g, '').length;

console.log(`QUANTIDADE DE LETRAS = ${totalLetras}`);

