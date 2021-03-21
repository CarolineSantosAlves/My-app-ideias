const myform = document.getElementById('formNum');
const loremText = document.getElementById('loremText');
const btnCopiar = document.getElementById('copiar');
myform.addEventListener('submit', function(e){
    e.preventDefault();
    let numParag = document.getElementById('numParagrafo').value;
    let tipo = document.querySelector('input[name="tipo"]:checked').value;

   
  
    fetch('/',{
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
            //'Content-Type': 'application/x-www-form-urlencoded' },
        //body: formData
        body: JSON.stringify({
            numpa : numParag,
            tipo : tipo

        })
        
    }).then(function(response){
        return response.text(); // se colocar response.json não vai aparecer os \r\n
    }).then(function(loremGerado){
        let str = loremGerado.replace(/\\r\\n/gi, '\n');
      
        loremText.innerText = str
    }).catch(function(error){
        console.log(error)
    })
});

 
  function copyText() {
    let elementText = loremText.textContent;
    navigator.clipboard.writeText(elementText)// retorna um promisse
    .then(alert('Copiado com sucesso'));  // piscar texto, criar alerta?
  }

  btnCopiar.addEventListener('click', copyText);
  
