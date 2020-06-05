//função converter numero
function bin2dec(){
    let bin = document.getElementById('bin').value;
    let res = document.getElementById('res');
    let lista = document.querySelector('p#flista')

    let dec = 0;
    let converteu = [];

    function valida(){
        let binar = Number(bin);
        let regx = /^[0-1]{1,8}$/.test(binar);
        if(regx == true){
            return true;
        }else{
            return false;
        }
    }
    
   
   
  
    if(valida() == true){

         for (let c = 0; c < bin.length; c++) {
            dec += Math.pow(2, c) * bin[bin.length - c - 1]; //pega do último ao primeiro  
                                    
        }
        
        converteu.push(Number(dec));
        let item = document.createElement('option');
        item.text = `${bin} convertido para (${dec}) base 10`;
        lista.appendChild(item);
        res.innerHTML = '';
        
            
    
    } else{
        window.alert('valor inválido, digite até 8 numeros usando apenas 0 e 1')
    };

    bin.value = '';
    bin.focus();
     
       
    
    

    
    
    
}