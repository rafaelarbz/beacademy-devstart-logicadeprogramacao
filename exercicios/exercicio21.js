/* 
Exercicio 21: Permite saques consecutivos no valor de R$150
EQUANTO houver saldo suficiente
Interromper a operação quando o saldo for negativo e informar ao usuário
*/ 

var saldo = 1000;

do {

  var saque = prompt('Digite SAQ para realizar o SAQUE: ').toUpperCase();

  saldo -= 150;

  console.log(saldo);

  if (saldo < 150) {
    console.log('Saldo insuficiente!');
  }

} while (saque == 'SAQ' && saldo > 150);