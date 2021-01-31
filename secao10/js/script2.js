let btnP = document.querySelector('#promise');

let promise = function() { 
    return new Promise(function(resolve, reject){
        let github_user = document.querySelector('input[name=github_user]').value;
        let ajax = new XMLHttpRequest();
        ajax.open('GET', `https://api.github.com/users/${github_user}`);
        ajax.send(null);
        ajax.onreadystatechange = function() {
            //Status dos dados 
            if (ajax.readyState === 4) {
                //Status da requisição 
                if (ajax.status === 200) { 
                    resolve(JSON.parse(ajax.responseText));
                }
                else {
                    reject('Não foi encontrado o usuário');
                }
            }
        }
    });
}

btnP.onclick = function() { 
    //Limpar o conteúdo da div
    div.innerHTML = '';
    let spanNone = document.createElement('span');
    let txtNome = '';
    promise()
    //Resolve
    .then(function(response){
        if(response['name'] !== null) {
            txtNome = document.createTextNode(response['name']);

            let img = document.createElement('img');
            img.setAttribute('src', response['avatar_url']);
            img.setAttribute('alt', response['avatar_url']);
            img.setAttribute('width', response['45px']);
            img.setAttribute('height', response['45px']);
            
            div.appendChild(img);
        }
        else txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
        spanNone.appendChild(txtNome);
        div.appendChild(spanNone);
    }).catch(function(error) {
        txtNome = document.createTextNode(`Não encontrei o usuário ${error}`);
        spanNone.appendChild(txtNome);
        div.appendChild(spanNone);
    });
}