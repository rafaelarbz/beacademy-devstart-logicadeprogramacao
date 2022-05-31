// Exercicio 3: Recebe valor de um depósito informado e atualiza o saldo final 

var saldo = 50;

console.log(`Seu saldo inicial: ${saldo}`);

var deposito = parseFloat(prompt('Insira o valor de depósito: '));

saldo += deposito;

console.log(`Depósito realizado no valor de: R$${deposito} -- Saldo final atualizado: R$${saldo}`);