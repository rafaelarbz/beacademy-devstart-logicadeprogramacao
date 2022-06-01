//Exercicio 17: Criar um programa que permita ao usuário escolher entre as operações a seguir
/* 
1 Depósito;
2 Saque;
3 Transferência;
4 Empréstimo;
*/
// Em seguida solicite os dados bancarios para realizar a operação 
// Imprima a operação realizada e os dados referentes a ela
// O programa deverá permitir ao usuário realizar quantas operações ele desejar, utilize a estrutura WHILE

var operacao = parseInt(prompt('Digite a operação que deseja realizar, use 1 para DEPOSITO, 2 para SAQUE, 3 para TRANSFERENCIA ou 4 para EMPRESTIMO: '));

var saldo = 1000;

function transacoes() {
  
  var banco = prompt('Informe o nome do banco: ');
  var agencia = parseInt(prompt('Informe a Agência: '));
  var conta = parseInt(prompt('Informe o número da Conta: '));
  var cliente = prompt('Informe o nome do cliente: ');
  var valor = parseFloat(prompt('Informe o valor da operação: '));

  switch (operacao) {
    case 1:
      console.log(`Saldo inicial: R$${saldo},00`);
      saldo += valor;
      console.log(`Depósito realizado no banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Depósito: ${valor},00 | Saldo final: R$${saldo},00`);
      break;
    case 2:
      console.log(`Saldo inicial: R$${saldo},00`);
      if (valor > saldo) {
        console.log('Saldo insuficiente!');
        break;
      } else {
        saldo -= valor;
        console.log(`Saque no realizado banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Saque: R$${valor},00 | Saldo final: R$${saldo},00`);
        break;
      }
    case 3:
      console.log(`Saldo inicial: R$${saldo},00`);
      if (valor > saldo) {
        console.log('Saldo insuficiente!');
        break;
      } else {
        var destino = prompt('Informe a conta destino: ');
        saldo -= valor;
        console.log(`Transferência realizada no banco ${banco} | agência ${agencia} | conta ${conta} | de ${cliente} | para a conta de destino ${destino} | Transferência no valor: R$${valor},00 | Saldo final: R$${saldo},00`);
        break;
      }
    case 4:
      console.log(`Saldo inicial: R$${saldo},00`);
      saldo += valor;
      console.log(`Empréstimo realizado no banco ${banco} | agência ${agencia} | conta ${conta} | para ${cliente} | Empréstimo no valor: R$${valor},00 | Saldo final: R$${saldo},00`);
    default:
      break;
  }

}

transacoes();

var encerrar = prompt('Deseja realizar outra operação? Digite S para SIM ou N para NAO: ').toUpperCase();

while (encerrar != 'N') {

  transacoes();

  encerrar = prompt('Deseja realizar outra operação? Digite S para SIM ou N para NAO: ').toUpperCase();

}