// OBJETO É DIFERENTE DE JSON
// JSON É FORMATO TEXTUAL

const prod1 = {}
prod1.nome = "Celular"
prod1.preco = 2344.89

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preco: 79.90
}
console.log(prod2)

// OUTRA FORMA DE ACESSAR OBJETO
const obj1 = {}
obj1.nome = 'Bola'
// PASSANDO UM ATRIBUTO JÁ CRIADO
obj1['nome'] = 'BOLA'
console.log(obj1)