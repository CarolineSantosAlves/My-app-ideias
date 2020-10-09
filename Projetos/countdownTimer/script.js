let contador = document.getElementById('contador');
function agendar(){
    let nomeEvento = document.getElementById('nomeEvento').value;
    if(!nomeEvento){
        document.getElementById('contador').innerText = 'Insira um nome para agendar seu evento'
    }else{
        let data = document.getElementById('date').value.split('-');
        let hour = document.getElementById('time').value.split(':');
          
        let dataEvent = new Date(...data, ...hour);
        dataEvent.setMonth(dataEvent.getMonth() -1);
        
            
        let timer = setInterval(function(){
            
            let contagem = dataEvent.getTime();
            let atual = new Date().getTime();
            let distance = contagem - atual;
            
            let dias = Math.floor(distance / 86400000);
            let horas = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((distance % (1000 * 60)) / 1000);
    
                
            let formata = `{${nomeEvento}} começa em \n ${dias} dias \n ${horas < 10 ? '0' + horas : horas}h : ${minutos < 10 ? '0' + minutos : minutos}m : ${segundos < 10 ? '0' + segundos : segundos}s`;
            contador.innerText = formata;
    
            if(dias == 0 & horas == 0 & minutos == 0 & segundos == 0){
                clearInterval(timer)
                contador.innerText = `o ${nomeEvento} começou`;
            }
            if(dias < 0){
                contador.innerText = 'Data ou hora inválida(s)';
                clearInterval(timer)
            }
            
        }, 1000)
    }

 
}