//Exercicio 14: Tabuada de um número informado pelo usuario

var numero = parseInt(prompt('Digite um número: '));

var i = 1;

while (i <= 10) {

  console.log(`${numero} x ${i} = ${numero * i}`);

  i++;

}