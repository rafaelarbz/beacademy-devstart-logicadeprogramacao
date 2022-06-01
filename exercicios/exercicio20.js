//Exercicio 20: Realizar a soma de cem primeiros números naturais

var soma = 0;
var proximo = 0;

do {

  soma += proximo;

  proximo++;

} while (proximo < 100);

console.log(`O resultado da soma dos 100 primeiros números naturais é ${soma}!`);