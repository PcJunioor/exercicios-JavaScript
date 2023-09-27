//  SERVE PARA INTERPRETAR AS REQUISIÇÕES 
//  PARA OS DADOS FICAREM PRONTOS PARA SEREM MANIPULADOS
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
// PROVÊ TODOS OS ARQUIVOS ESTÁTICOS DENTRO DA PASTA('.')
app.use(express.static('.'))

// FORMATO A PARTIR DO SUBMIT DO FORMULÁRIO, VAI LER OS DADOS E TRANSFORMAR PARA OBJETO
app.use(bodyParser.urlencoded({extended: true}))

// PARA TRANSFORMAR JSON EM OBJETO
app.use(bodyParser.json())

// QUANDO VIER UMA FUNÇÃO DO TIPO 'GET' NA URL /TESTE ENVIA A RESPOTA 'OK'
app.get('/teste', (req, res) => res.send('Ok'))

// START NO SERVIDOR E SETANDO A PORTA
app.listen(8080, () => console.log('Executando na porta 8080...'))


