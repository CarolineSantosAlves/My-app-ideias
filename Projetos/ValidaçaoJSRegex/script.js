var formulario = document.querySelector('form');

formulario.onsubmit = function (){
    let senha = document.getElementById('senha').value;
    let user = document.getElementById('user').value;
    let email = document.getElementById('email').value;
    

    let resultsenha = /[A-Z]{5}--/.test(senha);
    let resultuser = /[a-z]{1,}/.test(user);
    let resultmail = /\w+@gmail.com/.test(email);


if(resultsenha && resultuser && resultmail == true){
    alert('Dados enviados com sucesso');
}else{
    alert('preencha as informações corretamente');
}



}