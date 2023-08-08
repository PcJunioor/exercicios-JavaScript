let valor // NÃO INICIALIZADA
console.log(valor) 

valor = null // AUSÊNCIA DE VALOR

console.log(valor)
// console.log(valor.toString()) GERA ERRO!!

const produto = {}
console.log(produto.preco)

console.log(produto)

produto.preco = 10
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)