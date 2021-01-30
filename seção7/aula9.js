//Factory function
const pessoa = (nome, sobrenome) => {
    return {
        andar: () => console.log(nome + sobrenome)
    }
}

const p1 = pessoa("Nome", "Sobrenome");
p1.andar();

console.log(p1);