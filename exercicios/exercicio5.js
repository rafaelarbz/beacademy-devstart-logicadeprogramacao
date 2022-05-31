// Exercicio 5: Receber a idade e classificar
//  < 18 -> menor de idade 
// de 18 a 60 -> adulto 
// > 60 -> Idoso 

let idade = prompt('Digite a sua idade: ');

console.log(`Você tem ${idade} anos, portanto...`);

if (idade < 18) {
  console.log('Você é menor de idade!');
} else if (idade >= 18 && idade < 60) {
  console.log('Você é adulto!');
} else {
  console.log('Você é idoso!');
}