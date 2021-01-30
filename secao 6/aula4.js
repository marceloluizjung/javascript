function somar() {
    let soma = 0;
    for(let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar());
console.log(somar(5));
console.log(somar(10,5));