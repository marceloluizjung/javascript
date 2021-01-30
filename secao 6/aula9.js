//Criando função construtora

function Pessoa(n, s) {
    //Atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    //Atributo público pode ser acessado fora da função construtora
    this.raca = 'Humano';

    //Método privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function() { 
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${pesom}, Altura: ${altura}, Sexo: ${sexo}`);
    }

    //Método publico conseguimos acessar fora da função contrutora
    this.fazer_aniversario = function() { 
        idade += 1;
        imprimir_dados();
    }
    this.getIdade = function() { 
        return idade;
    }
}

const angelina = new Pessoa("Angelina", "F");
console.log(angelina);

//Factory function
const pessoa = (nome, sobrenome) => {
    return {
        andar: () => console.log(nome + sobrenome)
    }
}

const p1 = pessoa("Nome", "Sobrenome");
p1.andar();