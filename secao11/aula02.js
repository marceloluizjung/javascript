//Rest/Spread (juntar/espalhar) - (...)


function total(...precos) {
    let total = 0;
    precos.forEach(preco => {total += preco;});
    return total;
}

console.log(total(10,20,30,40,50,60))


let primeiro = ['1', '2', '3'];
let segundo = ['4', '5', '6'];

console.log([...primeiro, ...segundo]);
console.log(primeiro);