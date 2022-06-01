// Exercicio 10 : Fazer a Tabuada do numero recebido.

var numero = parseInt(prompt('Digite um número: '));

for (var i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}