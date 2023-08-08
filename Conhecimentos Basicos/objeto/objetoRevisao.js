const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)

const carro = {
    nome: 'A4',
    valor: 700000,
    proprietario:{
        nome: 'Ana',
        idade: 42
    },
    calcularValorSeguro: function(){
        // ....
    }

}
carro.proprietario.idade = 50
console.log(carro)