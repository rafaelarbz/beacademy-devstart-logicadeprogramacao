/*
Exercicio 24: Cadastro de clientes 
DADOS: NOME, RG, CPF, CEP, CONTATO;
Armazena dados em um vetor e os exibe ao final
*/

var clientes = [];
var rgs = [];
var cpfs = [];
var ceps = [];
var contatos = [];

for (var i = 0; i < 3; i++) {

  var cliente = prompt('Informe o nome do cliente: ');
  clientes.push(cliente); 

  var rg = prompt('Informe o RG do cliente: ');
  rgs.push(rg);

  var cpf = prompt('Informe o CPF do cliente: ');
  cpfs.push(cpf);

  var cep = prompt('Informe o CEP do cliente: ');
  ceps.push(cep);

  var telefone = prompt('Informe o telefone do cliente: ');
  contatos.push(telefone);

}

for (var j = 0; j < 5; j++) {

  console.log(`O cliente ${clientes[j]}, portador do RG: ${cpfs[j]} e CPF: ${rgs[j]}, residente no CEP: ${ceps[j]}, possui o telefone de número ${contatos[j]}.`);

}