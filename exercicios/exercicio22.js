/*
Execicio 22: Receber nome e preço de 10 produtos e armazena-los em um vetor
Ao final exibir nome e preço de cada produto
*/

var produtos = [];
var precos = [];

for (var i = 0; i < 10; i++) {

  var nomeProduto = prompt('Informe o nome do produto: ');
  produtos.push(nomeProduto);

  var valorProduto = parseFloat(prompt('Informe o preço do produto: '));
  precos.push(valorProduto);

}

for (var j = 0; j < produtos.length; j++) {
  
  console.log(`O produto ${produtos[j]} custa R$${precos[j]}.`);

}