// Aqui vamos subir alguns servidores em portas diferentes para testar se sermos notificados 
const express = require('express');
var app = express();
var app1 = express();
var app2 = express();
var app3 = express();

app.listen(2000,function(){
    console.log('ok na porta 2000')
});

app1.listen(4000,function(){
    console.log('ok na porta 4000')
});

app2.listen(5000,function(){
    console.log('ok na porta 5000')
});

app.get('/', function(req, res){
    res.send('ok 2000');
});

app1.get('/', function(req, res){
    res.send('ok 4000');
});

app2.get('/', function(req, res){
    res.send('ok 5000');
});