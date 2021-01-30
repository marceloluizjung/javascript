function teste () {
    const array = [{at1: "at1", at2: "at2"}, {at1: "at1", at2: "at2"}, {at1: "at1", at2: "at2"}];

    let out = {};
    array.forEach(elementArray =>{
        Object.entries(elementArray).forEach(([chave, valor]) => {
            let created = factory(chave, valor);
            Object.assign(out, created);
        });
    });
    debugger;
}

function factory(chave, valor) { 
    return JSON.parse(`{"${chave}" : "${valor}"}`);
}