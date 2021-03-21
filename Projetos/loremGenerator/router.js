const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json())
app.use(router);

let lorem = require('./lorem');


router.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
})

router.post('/', (req, res) =>{
    let loremGerado;
    let valueInput = parseInt(req.body.numpa);
    let tipo = req.body.tipo;
    if(tipo == 'palavras'){
       loremGerado = lorem.generateWords(valueInput);
    }else{
        if(tipo == 'frases'){
          loremGerado = lorem.generateSentences(valueInput);
        }else{
            
            loremGerado = lorem.generateParagraphs(valueInput);
        }
    }
    return res.json(loremGerado) 
    
})

module.exports = router;