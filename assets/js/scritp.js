let nome = window.document.getElementById('nome')
let email = window.document.querySelector('#email')
let mensagem = window.document.querySelect('mensagem')


function validaNome() {
    let txt = document.querySelector('#textName')
    if(nome.value.length < 3){
        txt.innerHTML = 'nome invalido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'nome valido'
        txt.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
        txtEmail.innerHTML = 'valor invalido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = ""
    }
}