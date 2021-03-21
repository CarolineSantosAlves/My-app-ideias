let converteu = document.getElementById('converteu');
let type = '';
let buttonsave = document.getElementById('salva');


function json2csv(){
    let csv;
    let conteudo = document.getElementById('conteudo').value;
    if(conteudo == ''){
        alert('insira um texto para ser convertido')
    }
    if(!validaJson(conteudo)) return; // verificar se posso trocar a validação para ternário
    //console.log(conteudo)

    let jsonobj = JSON.parse(conteudo); // TRANSFORMA EM OBJECT
    let jsonarray = Array.isArray(jsonobj) ? jsonobj : [jsonobj]; // necessário?

    let titulo = Object.keys(jsonarray[0]).toString();
    csv = `${titulo} \n`;

    for(let i = 0; i < jsonarray.length; i++){ 
        
        let obj = Object.keys(jsonarray[i]).length;// pega o length de chaves que o object tem
        for(let o in jsonarray[i]){ // para cada objeto dentro do array/ na posição i
            obj--;
            if(obj == 0){
                csv += `${jsonarray[i][o]} \n`;
            }else{
                csv += `${jsonarray[i][o]},`; // falta virgula e formatar 
                
            }
        }
       csv += `\n`;
    }

    converteu.innerText = csv;
    buttonsave.removeAttribute('disabled');
    type = 'text/csv';

  
}


function validaJson(str) {
    try {
        JSON.parse(str);
        
    } catch(e) {
        console.log(e)
        return false;
    }
    return true;
}


function csvToJson(){
    let conteudo = document.getElementById('conteudo').value;
        

    const regex = /(,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^,\r\n]*))/gi;
    const lines = conteudo.split('\n'); 
    
    
    let headers = lines.splice(0, 1)[0].match(regex);    
    
    let json = [];
    
     for (const line of lines) { // para item no array
        let item = {}; // criar um objeto
        for(let [p,v] of [...line.matchAll(regex)].entries()){
            item[headers[p]] = v[3]; // chave entre colchetes ver meu caderno
        

        }
          json.push(item);
    }
    json = JSON.stringify(json)
    let str = json.replace(/(")(,)(\w)/gi,'"$3'); 
    console.log(str)
    converteu.innerHTML = str;
    buttonsave.removeAttribute('disabled');
    type = 'application/json'
      
}

   function saveData(){

       let blob = new Blob([converteu.value], {type:type}); // primeiro parametro é um array e o segnudo parametro é options
       
       let extension = type.split('/')[1] // split vai retornar um array e pegar a posição 1 que vai ser json ou csv
       let fileName = `JSON2CSV.${extension}`;
       let a = document.createElement('a');
       let url = URL.createObjectURL(blob);

       a.href = url;
       a.download = fileName;
       document.body.appendChild(a);
       a.click();

       setTimeout(() =>{
           document.body.removeChild(a);
           window.URL.revokeObjectURL(url);
       }, 0)
   }