const teste = {
    nome: "Marcelo",
    idade: "25",
    sexo: "Masculino"
}

console.log(Object.keys(teste));
console.log(Object.values(teste));
console.log(Object.entries(teste));

Object.entries(teste).forEach(([chave, valor]) => {
    console.log(chave);
    console.log(valor);
});

Object.freeze(teste);
teste.nome = "Teste";
console.log(teste);