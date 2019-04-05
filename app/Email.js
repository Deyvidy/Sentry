const dados = require('./data/data.json');
const sgMail = require('@sendgrid/mail');

exports.email = function ( err ) {
    const contentString = JSON.stringify(err)
   
    sgMail.setApiKey(dados.apiKey);
    
    const msg = {
        to: "deyvidyluan@gmail.com",
        from: dados.fromEmail,
        subject: 'O servidor parou',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>'+ contentString + '</strong>',
    };

    sgMail.send(msg);
}
