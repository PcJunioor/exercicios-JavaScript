const fs = require('fs')
const produto = {
    nome: 'celular',
    preco: 1249.99,
    desconto: 0.15
}
// CRIA UM ARQUIVO CONVERTENDO O OBJETO EM JSON
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo Salvo!')
})