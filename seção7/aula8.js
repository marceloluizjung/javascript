class Animal { 
    constructor(especie) { 
        this._especie = especie;
    }

    get especie() { 
        return this._especie;
    }

    set especie(especie) { 
        this._especie = especie;
    }
}

class Passaro extends Animal { 
    constructor(especie) { 
        super(especie);
    }
}