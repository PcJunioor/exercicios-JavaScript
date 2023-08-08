// quando chamar o método then, tem que vir o conteúdo do arquivo dados.txt
const fs = require('fs')
const caminho = __dirname + '/dados.txt'

function exibirConteudo(caminho){ 
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (_, conteudo) => {
            resolve(conteudo)                   
        })
    })   
}

exibirConteudo(caminho)
    .then(console.log)
    