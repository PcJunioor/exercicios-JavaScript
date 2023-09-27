const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// interpretar do Browser e criar um objeto já preenchido.
app.use(bodyParser.urlencoded({extended: true}))  


// função middleware
app.post('/usuarios', (req, res) =>{
    console.log(req.body)
    res.send('<h1>Usuário Incluído!</h1>')
})

app.post('/usuarios/:id', (req, res) =>{
    //console.log(req.params.id)
    console.log(req.body)
    res.send(`<h1>Usuário  ${req.body.id} Alterado!</h1>`)
})

app.listen(3003)