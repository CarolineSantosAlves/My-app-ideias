const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
app.use(express.json()) // habilitando o body parser
//app.use(express.urlencoded({extended: true}))
const routes = require('./router');


app.use(express.static(__dirname + '/public'));

app.use(routes);
app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
})