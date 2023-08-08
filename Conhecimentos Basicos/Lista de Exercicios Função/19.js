const produto1 = {
    codigo: '100',
    nome: 'Cachorro Quente',
    preco: 3
}
const produto2 = {
    codigo: '200',
    nome: 'Hambúrguer',
    preco: 4
}
const produto3 = {
    codigo: '300',
    nome: 'Cheese Burguer',
    preco: 5.5
}
const produto4 = {
    codigo: '400',
    nome: 'Bauru',
    preco: 7.5
}
const produto5 = {
    codigo: '500',
    nome: 'Refrigerante',
    preco: 3.5
}
const produto6 = {
    codigo: '600',
    nome: 'Suco',
    preco: 2.8
}

function calcularPedido(qtde, produto){
    switch(produto.codigo){
        case '100': 
        case '200': 
        case '300':
        case '400':
        case '500':           
        case '600': return produto.preco * qtde
    }
}

console.log(calcularPedido(2, produto1))
console.log(calcularPedido(2, produto2))
console.log(calcularPedido(2, produto3))
console.log(calcularPedido(2, produto4))
console.log(calcularPedido(2, produto5))
console.log(calcularPedido(2, produto6))