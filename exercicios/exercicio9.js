/* Exercicio 9
Programa que permite ao usuário escolher entre DEPOSITO, SAQUE, TRANSFERENCIA
Para isso, o usuario deve informar a operacao, o nome do banco, agencia,conta
Então exiba o sado inicial, operacao realizada e saldo final
Em caso de transferencia exiba também os dados bancarios de destino
*/

var operacao = prompt('Escolha a operação que deseja realizar, use D para DEPOSITO, S para SAQUE ou T para TRANSFERENCIA: ').toUpperCase();

var banco = prompt('Digite o nome do banco: ');

var agencia = prompt('Informe a agência: ');

var conta = prompt('Informe o número da conta: ');

var valor = parseFloat(prompt('Digite o valor da operação: '));

var saldo = 1500;

switch (operacao) {
  case 'D':
    console.log(`Seu saldo inicial é de R$ ${saldo}.`);
    saldo += valor;
    console.log(`O valor de R$${valor} foi DEPOSITADO na Conta ${conta}, Agência ${agencia}, Banco ${banco} com SUCESSO! Saldo atualizado: R$ ${saldo}.`);
    break;
  case 'S':
    console.log(`Seu saldo inicial é de R$${saldo}.`);
    if (saldo < valor) {
      console.log('Saldo insuficiente!');
      break;
    } else {
      saldo -= valor;
      console.log(`O valor de R$ ${valor} foi SACADO da Conta ${conta}, Agência ${agencia}, Banco ${banco} com SUCESSO! Saldo atualizado: R$ ${saldo}.`);
      break;
    }
  case 'T':
    console.log(`Seu saldo inicial é de R$ ${saldo}.`);
    var destino = prompt('Digite o Nº da Conta de destino: ');
    if (saldo < valor) {
      console.log('Saldo insuficiente!');
      break;
    } else {
      saldo -= valor;
      console.log(`O valor de R$ ${valor} foi TRANSFERIDO de sua Conta Nº ${conta}, Agência ${agencia}, Banco ${banco} com SUCESSO! Saldo atual: R$ ${saldo}. Conta de destino: ${destino}.`);
      break;
    }
  default:
    console.log('Operação inválida!');
    break;
}