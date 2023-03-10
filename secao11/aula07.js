// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {})); // Aqui ele executa a function, e passa cor null ou cor instanciada

function teste(a=1, b=2) { 
    return `a:${a}, b:${b}`
}

// Eu posso mandar apenas um parâmetro
teste(0);

