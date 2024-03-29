const novaPromise = () => new Promise((resolve, reject) => {
    let valor = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if(valor % 2 == 0) {
            resolve(`O valor ${valor} é impar...`);
        } else {
            reject(`O valor ${valor} é impar...`);
        }
    }, 2000);
});

async function executarPromise() {
    try {
        const response = await novaPromise();
        console.log(response);
    } catch(erro) {
        console.log(erro);
    }
}

console.log("Antes");
executarPromise();
console.log("Depois");
