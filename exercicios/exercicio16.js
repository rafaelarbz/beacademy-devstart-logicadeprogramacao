/*
Exercicio 16: Permite realizar as 4 operações matemáticas usando dois números digitados pelo usuário
Imprime os valores na tela e em seguida pergunte se ele quer realizar novo cálculo
Repete as operações enquanto o usuário desejar continuar
*/
function operacoes() {

  var n1 = parseInt(prompt('Digite o primeiro número: '));
  var n2 = parseInt(prompt('Digite o segundo número: '));
  
  var soma = n1 + n2;
  var subtracao = n1 - n2;
  var multiplicacao = n1 * n2;
  var divisao = n1 / n2;
  
  console.log(`O valor da soma entre os números ${n1} e ${n2} é: ${soma}, o valor da subtração é: ${subtracao}, o valor da multiplicação é: ${multiplicacao} e o valor da divisão é: ${divisao}.`)
  
}

operacoes();

var continuacao = prompt('Deseja repetir a operação? S para SIM ou N para NAO: ').toUpperCase();

while (continuacao == 'S') {
  
  operacoes();

  continuacao = prompt('Deseja repetir a operação? S para SIM ou N para NAO: ').toUpperCase();
}

console.log('Calculo finalizado!');