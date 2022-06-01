/*
Calcular área e perímetro de uma figura geometrica
*/

var getfigura = prompt('Escolha a figura que deseja calcular, digite Q para QUADRADO ou T para TRIANGULO EQUILATERO: ').toUpperCase();

var base = parseInt(prompt('Digite o valor da base: '));

switch (getfigura) {
  case 'Q':
    var areaQ = base * base;
    var perimetroQ = base * 4;
    console.log(`A área do QUADRADO é igual a ${areaQ}m2 e o perímetro é igual a ${perimetroQ}m.`)
    break;
  case 'T':
    var altura = parseInt(prompt('Digite o valor da altura do triângulo: '));
    var areaT = base * altura / 2;
    var perimetroT = base * 3;
    console.log(`A área do TRIANGULO EQUILATERO é igual a ${areaT}m2 e seu perímetro é igual a ${perimetroT}m.`);
  default:
    console.log('Figura inválida!');
    break;
}