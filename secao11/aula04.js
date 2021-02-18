let nome = 'Geek University';

for(let letra of nome) { 
    console.log(letra);
}

console.log('---------------------------------');

for(let index in nome) { 
    console.log(`Índice: ${index}, Valor: ${nome[index]}`);
}