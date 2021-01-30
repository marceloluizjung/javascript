let teste = (num1, num2) => { 
    return num1 + num2;
}

console.log(teste(2, 4));

/*
Função com mais de um parâmetro não precisa de parênteses na arrow function
Uma linha de execução não precisa de return
*/
let dobrar = valor => valor *= 2;
console.log(dobrar(2));