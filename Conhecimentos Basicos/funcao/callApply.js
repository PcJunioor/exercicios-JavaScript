function getPreco(moeda = 'R$', imposto = 0){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

// NÃO ENXERGA OS ATRIBUTOS COM "THIS"
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 40900,
    desconto: 0.05,
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, '$'))
console.log(getPreco.apply(carro, ['$', 0.1]))