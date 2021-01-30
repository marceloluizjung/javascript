function somar(a, b) {
    return a + b;
}

function outra(z) {
    return z;
}

const ret = outra(somar);
console.log(ret(2, 3));