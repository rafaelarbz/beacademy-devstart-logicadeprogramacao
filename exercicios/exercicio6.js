/* Exercicio6 : Criar um programa que permite ao usuário escolher entre depósito ou saque, 
informar o valor da operação, em seguida atualize seu saldo
*/
var saldo = 1500;

var operacao = prompt('Digite DEP para Depositar ou SAQ para Sacar: ').toUpperCase();

var valoroperacao = parseFloat(prompt('Digite o valor: '));

console.log(`O seu saldo atual é de R$ ${saldo}.`);

switch (operacao) {
  case 'DEP':
    saldo += valoroperacao; 
    console.log(`Depósito realizado com sucesso! Seu saldo atualizado é de R$ ${saldo}.`);
    break;
  case 'SAQ':
    saldo -= valoroperacao;
    console.log(`Saque realizado com sucesso! Seu saldo atualizado é de R$ ${saldo}.`);
    break;
  default:
    console.log('Operação inválida!');
    break;
}