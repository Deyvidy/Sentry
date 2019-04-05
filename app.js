const request = require('request');
const email = require('./app/Email');
const address = require('./app/data/ports.json');

setInterval(function(){

    address.forEach(function(dados){
        request(dados.address, function (error, response, body) {
            if (error) {
                if(!dados.send) {
                    dados.send = true;
                    console.log('Endereço: ', dados.address ,'Error: ' ,  error);  // imprime o error
                    email.email(error); // envia a mensagem com o erro 
                }
            } else{
                dados.send = false;
                console.log('Endereço: ', dados.address ,'StatusCode: ' ,  response && response.statusCode); 
            }
        });
    });
    
},10000);
