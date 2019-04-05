# Sentry

Diretorio teste contem os arquivos para testar 
  inicia os servidores de teste em portas diferentes

Diretorio sentry\app\data contem os arquivos .json

o data.json deve ter a seguinte estrutura 


```
{
    "apiKey" : "seu token aqui",
    "fromEmail" : "exemple@exemple.com",
    "toEmails" : "exemple@exemple.com"
}
```
Acesse https://sendgrid.com/ crie a conta para gerar um token

Será necessario adicionar o endereço que deve ser testado ao ports.json

Basicamente ele vai fazer uma requisição a todos os endereços registrado no arquivo 
se de erro é porque não conseguiu se conectar e irá enviar uma mensgame de erro para email registrado
