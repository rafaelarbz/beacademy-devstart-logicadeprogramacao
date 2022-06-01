/*
Exercicio 19: Recebe vários valores de idades digitadas pelo usuário
Exibe  o total de pessoas com menos de 18 anos e mais de 60 anos
O programa encerra quando a idade for =-99.
*/
var menoresDe18 = 0;
var maioresDe60 = 0;

do {

  var idade = parseInt(prompt('Informe a sua idade: '));

  if (idade < 18) menoresDe18++;
  else if (idade > 60) maioresDe60++;

} while (idade != -99);

console.log(`A quantidade de pessoas com menos de 18 anos é ${menoresDe18} e a quantidade de pessoas com mais de 60 anos é ${maioresDe60}!`);