/*
Exercicio 18: Sistema de login que permite ao usuario tentar realizar o login repetidamente
ATÉ que o nome e senha correspondam aos valores armazenados
Finaliza a repetição quando o usuario desejar
*/

do {
    var nome = prompt('Informe o seu nome de usuário: ');
    var senha = parseInt(prompt('Informe a sua senha: '));
  
    var sair = parseInt(prompt('Para sair digite -1!'));
  
} while (!(nome == 'Marcos' && senha == 1234) || !(sair != -1));
  
if (nome == 'Marcos' && senha == 1234) {
console.log('Login realizado com sucesso!');
} 