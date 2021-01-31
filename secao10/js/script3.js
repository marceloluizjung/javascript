//Axios
let btnA = document.querySelector('#axios');

btnA.onclick = function () {
    //Limpar o conteúdo da div
    div.innerHTML = '';
    let spanNone = document.createElement('span');
    let txtNome = '';
    let github_user = document.querySelector('input[name=github_user]').value;
    axios.get(`https://api.github.com/users/${github_user}`)
        .then(function(response){
            if(response.data['name'] !== null) {
                txtNome = document.createTextNode(response.data['name']);
    
                let img = document.createElement('img');
                img.setAttribute('src', response.data['avatar_url']);
                img.setAttribute('alt', response.data['avatar_url']);
                img.setAttribute('width', response.data['45px']);
                img.setAttribute('height', response.data['45px']);
                
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