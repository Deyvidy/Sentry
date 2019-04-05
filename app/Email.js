const dados = require('./data/data.json');
const sgMail = require('@sendgrid/mail');

exports.email = function ( err ) {
    
    sgMail.setApiKey(dados.apiKey);
    
    const msg = {
        to: dados.toEmails,
        from: dados.fromEmail,
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>'+ err + '</strong>',
    };

    sgMail.send(msg);
}