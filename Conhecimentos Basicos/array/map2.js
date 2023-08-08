

// array com conteúdo JSON
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 12.90 }',
    '{ "nome": "kit de lápis", "preco": 42.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
// retornar um array com apenas os preços
let paraObjeto =  json => JSON.parse(json)
let soPreco = obj => obj.preco

console.log(carrinho.map(paraObjeto).map(soPreco))