//Exercicio 1: receber 3 variáveis para calcular IMC
var nome = prompt('Escreva seu nome: ');
var peso = prompt('Digite o seu peso em kg: ');
var altura = prompt('Digite a sua altura em metros: ');

/*
calcular IMC ultilizando a fórmula abaixo
IMC = PESO/ALTURA²
*/
var imc = peso / (altura * altura);
imc = imc.toFixed(2);

console.log(`${nome} seu IMC é: ${imc}`);