/*
Exercicio 23: Recebe os nome de alunos e suas respectivas notas
Calcula a media do aluno
Armazena os dados em um vetor 
Ao final exibe os dados e se o aluno foi aprovado ou não
*/

var alunosNomes = [];
var nota1 = [];
var nota2 = [];

for (var i = 0; i < 3; i++) {

  var aluno = prompt('Informe o nome do aluno: ');
  alunosNomes.push(aluno);
  
  var primeiraNota = parseFloat(prompt('Informe a primeira nota: '));
  nota1.push(primeiraNota);
  
  var segundaNota = parseFloat(prompt('Informe a segunda nota: '));
  nota2.push(segundaNota);

}

var media = [];

for (var j = 0; j < alunosNomes.length; j++) {

  media = (nota1[j] + nota2[j]) / 2;

  if (media >= 6) {
    console.log(`O aluno ${alunosNomes[j]} foi aprovado! Com  a primera nota = ${nota1[j]} e segunda nota = ${nota2[j]}.`);
  } else {
    console.log(`O aluno ${alunosNomes[j]} foi reprovado! Com a primera nota =  ${nota1[j]} e segunda nota = ${nota2[j]}.`);
  }

}