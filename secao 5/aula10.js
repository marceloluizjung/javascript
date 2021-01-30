//Destructuring array
const numeros = [1, 2, 3, 4];

// const [num1, num2, num3, num4] = numeros;

const [num1, num2, num3, num4, num5 = 10] = numeros;

//Destructuring com objetos
const produto = {
    nome: "Play 4",
    preco: 10
};

const {nome, preco} = produto;
console.log(nome);
console.log(preco);