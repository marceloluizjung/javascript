class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this.sobrenome = sobrenome;
    }

    get nome() { 
        return this._nome;
    }

    set nome(nome) { 
        this._nome = nome;
    }

    falar(msg) { 
        console.log(`${this._nome} está falando`);
    }
}

class Carro {
    constructor(modelo) { 
        this.marca = 'Honda';
        this.modelo = modelo;
    }

    imprimir() { 
        console.log(`${this.marca}`);
    }
}

const teste = new Pessoa("Teste", "Teste");
teste.nome