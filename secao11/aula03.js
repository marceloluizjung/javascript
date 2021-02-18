/**
 * - Conjuntos não aceitam repetição de valores;
 * - Conjuntos não são indexados;
 */

 //Declarando um conjunto
let cursos = new Set();

//Adicionando valores
cursos.add('Programação para leigos');
cursos.add('Algoritmos e lógica de programação');

//Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python');

console.log(cursos.size);

cursos.add('Programação em C');

console.log(cursos.size);

let ret = cursos.delete('Programação em C');

console.log(ret);
console.log(cursos.size);

let frutas = ['uva', 'uva', 'morango', 'abacaxi']

let frutasSet = new Set(frutas);
console.log(frutasSet);