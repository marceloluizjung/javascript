//Ajax (XMLHttpRequest) Assinchronous JavaScript and XML

let btn = document.querySelector('#btn');
let input = document.querySelector('input[name=github_user]');
let div = document.querySelector('#app');

btn.onclick = function() { 
    //Limpar o conteúdo da div
    div.innerHTML = '';
    
    //Objeto Ajax
    let ajax = new XMLHttpRequest();

    //Abrir uma conexão (GET, POST, PUT, DELETE)
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    //Enviar a requisição
    ajax.send(null);

    //Pegar o resultado
    ajax.onreadystatechange = function() { 
        let spanNone = document.createElement('span');
        let txtNome = '';

        if(ajax.readyState === 4) {
            if(ajax.status === 200) {
                //Text > JSON 
                debugger;
                usuario = JSON.parse(ajax.responseText);
                
                if(usuario['name'] !== null) {
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url']);
                    img.setAttribute('alt', usuario['avatar_url']);
                    img.setAttribute('width', usuario['45px']);
                    img.setAttribute('height', usuario['45px']);
                    
                    div.appendChild(img);
                }
                else txtNome = document.createTextNode(`Não encontrei o usuário ${input.value}`);
                spanNone.appendChild(txtNome);
                div.appendChild(spanNone);
            }
        }
    }
}