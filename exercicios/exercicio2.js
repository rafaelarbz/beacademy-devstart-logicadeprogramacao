//Exercicio 2: receber nome e idade e realizar analises

//recebe nome e idade
let nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');

//exibe nome e idade informados
console.log(`Nome informado: ${nome} -- Idade informada: ${idade}`);

//verificações de nome e idade
nome = nome.toLowerCase();

if (idade < 18) {
  console.log('VERDADEIRO 1');//verdadeiro se for menor de idade
} else if (idade != 25) {
  console.log('FALSO 5');//falso se idade for diferente de 25
} else if (idade != 25 && nome == 'marcos') {
  console.log('FALSO 6');//falso se idade for diferente de 25 E nome for igual a marcos
} else if (idade != 25 || nome == 'marcos') {
  console.log('VERDADEIRO 7');//falso se idade for diferente de 25 OU nome for igual a marcos
} else if (idade % 2 == 0) {
  console.log('VERDADEIRO 8');//verdadeiro se o resto da divisão for igual a ZERO
}