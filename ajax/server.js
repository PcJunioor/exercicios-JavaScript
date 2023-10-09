//  SERVE PARA INTERPRETAR AS REQUISIÇÕES 
//  PARA OS DADOS FICAREM PRONTOS PARA SEREM MANIPULADOS
const bodyParser = require('body-parser')
const express = require('express')
// interpretar o formulário que veio o arquivo do upload
const multer = require('multer')
// configurar a pasta de destino e o nome do arquivo
const storage = multer.diskStorage({
    destination: function(req, file, callback){
        // seleciona a pasta upload(./ mesma raiz) para salvar
        callback(null, './upload')
    },
    filename: function(req, file, callback){
        // nomeia o arquivo com a data em ms_nome original, para evitar duplicações
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const app = express()
// PROVÊ TODOS OS ARQUIVOS ESTÁTICOS DENTRO DA PASTA('.')
app.use(express.static('.'))

// FORMATO A PARTIR DO SUBMIT DO FORMULÁRIO, VAI LER OS DADOS E TRANSFORMAR PARA OBJETO
app.use(bodyParser.urlencoded({extended: true}))

// PARA TRANSFORMAR JSON EM OBJETO
app.use(bodyParser.json())

// QUANDO VIER UMA FUNÇÃO DO TIPO 'GET' NA URL /TESTE ENVIA A RESPOTA 'OK'
app.get('/teste', (req, res) => res.send(new Date))

// PASSA O OBJETO STORAGE E RECEBE UM 'ARQUIVO' VINDO DA REQUISIÇÃO
// INTERPRETAR A REQUISIÇÃO VINDA DO SERVIDOR, VIA AJAX
const upload = multer({storage}).single('arquivo') //o nome 'arquivo' tem que ser igual no input file

// criar uma rota
// 'upload' mesmo nome no frontEnd
app.post('/upload', (req, res) =>{
    upload(req, res, err =>{
        if(err){
            return res.end('Ocorreu um erro')
        }
        res.end('Upload concluído')
    })
})


// cria um objeto 
app.post('/formulario', (req, res) =>{
    res.send({
        // bodyParser tem que estar configurado
        ...req.body, //tudo que veio na resposta joga no objeto criado e adciona o id
        id: 1
    })
})
// receber dados do frontend via express
// req.body
// req.query - app.get('/parOuImpar/:numero') | navegador - localhost:8080/parOuImpar?numero=3
// req.params - app.get('/parOuImpar/:numero') | navegador - localhost:8080/parOuImpar/2
app.get('/parOuImpar', (req, res) =>{
    const par = parseInt(req.query.numero) % 2 === 0 // verifica se é par ou impar e retorna T ou F
    res.send({
        resultado: par ? 'par' : 'ímpar' // retorna um objeto com resultado par ou ímpar
    })
})


// START NO SERVIDOR E SETANDO A PORTA
app.listen(8080, () => console.log('Executando na porta 8080...'))


