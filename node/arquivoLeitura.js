const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// síncrono... se for pesado trava o event loop, primeiro lê todo o arquivo e depois libera
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono - vai liberando o que está disponível
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    if(err != 0){
        console.log('Erro!!!')
    }
    conteudo = conteudo.substring(1) // por algum motivo estava lendo com um caractere não identificado no primeiro índice
    const obj = JSON.parse(conteudo)
    console.log(`${obj.db.host}:${obj.db.port}`)
})
// LER ARQUIVO JSON
const config = require('./arquivo.json')
// ESSE RODOU ANTES DO READFILE, POIS É SÍNCRONO
// GEROU UM OBJETO INSTANCIADO DE DB 
console.log(config.db)
// LER PASTA
fs.readdir(__dirname, (err, conteudo) =>{
    console.log(conteudo)
})
