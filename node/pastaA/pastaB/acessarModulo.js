const moduloA = require("../../moduloA")
console.log(moduloA.ola)


const saudacao = require("../../../node_modules/saudacao")
console.log(saudacao.ola)

const c = require("./pastaC")
console.log(c.ola2)

// MÓDULOS NO CORE DO NODE NÃO PRECISAM COLOCAR O CAMINHO RELATIVO
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia no Browser')
    res.end()
}).listen(8080)