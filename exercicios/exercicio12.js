// Exercicio 12: Exibir múltiplos de 3 entre dois números digitados pelo usuário

var n1 = parseInt(prompt('Digite o primeiro número: '));
var n2 = parseInt(prompt('Digite o segundo número: '));

var multiplos = [];

if (n1 > n2) {
  for (var i = n2; i <= n1; i++) {
    if (i % 3 == 0) multiplos.push(i);
  }
} else {
  for (var i = n1; i <= n2; i++) {
    if (i % 3 == 0) multiplos.push(i);
  }
}

console.log(multiplos);