//Exercicio 15: Receber e validar senha e nome de usuario informados

var nome = prompt('Digite seu nome de usuário: ');
var senha = prompt('Digite sua senha: ');

if (nome == 'Marcos' && senha == 'paylivre') {
  console.log(`Seja bem vindo, ${nome} !`);
}

while (!(nome == 'Marcos' && senha == 'paylivre')) {
  console.log('Usuário e/ou senha incorreto(s)!');
  nome = prompt('Digite o nome de usuário: ');
  senha = prompt('Digite sua senha: ');

  if (nome == 'Marcos' && senha == 'paylivre') {
    console.log(`Seja bem vindo, ${nome} !`);
    break;
  }
}