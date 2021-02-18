const myform = document.getElementById('formNum');
let lista = document.getElementById('result');



myform.addEventListener('submit', function(e){
    e.preventDefault();
    
    let bin = document.getElementById('bin').value; 
    
    let dec = 0;
    let converteu = [];
    
    function valida(){
        
        let regx = /^[0-1]{1,8}$/.test(bin);
        if(regx == true){
            return true;
        }else{
            return false;
        }
    }
    
    
    
    
    if(valida() == true){
        for (let c = 0; c < bin.length; c++) {
            dec += Math.pow(2, c) * bin[bin.length - c - 1]; 
        }
        converteu.push(dec);
        let item = document.createElement('p');
        item.innerText = `${bin} convertido para ${dec}`;
        lista.appendChild(item);
        
         
        
    } else{
        window.alert('valor inválido, digite até 8 numeros usando apenas 0 e 1')
    };
    
    document.getElementById('bin').value = ''
    document.getElementById('bin').focus();
     
       

})
