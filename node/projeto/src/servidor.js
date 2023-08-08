const porta = 3003

const express = require('express')
const bodyParser = require('body-parser')
const bancoDeDados = require("./bancoDeDados")
const app = express()

// utilizando 'use' ele roda em qualquer url que for passada
app.use(bodyParser.urlencoded({extended: true}))
// app.use((req, res, next) =>{
//     console.log('Middleware 2...')
//     next()
// })


// MÉTODO GET
app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos()) // vai converter para JSON
})
// MÉTODO GET POR ID
app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))
})
// MÉTODO POST
app.post('/produtos', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})
// MÉTODO PUT (PARA ALTERAR)
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // vai gerar um JSON
})
// MÉTODO DELETE
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // vai gerar um JSON
})

app.listen(porta, () =>{
    console.log(`Servidor atualizado na porta ${porta}`)
})