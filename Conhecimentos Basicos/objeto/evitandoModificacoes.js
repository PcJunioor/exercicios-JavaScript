// Object.preventExtensions - Impede criação de novos atributos, apenas permite excluir
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})
// VERIFICA SE PODE INCLUIR NOVOS ATRIBUTOS
console.log('Extensível? ', Object.isExtensible(produto))
produto.nome = 'Livro'
produto.descricao = 'Não vai deixar incluir, apenas remover e alterar'
delete produto.tag
console.log(produto)

// Object.seal - Não adiciona nem exclui atributos, apenas os modifica
Object.seal(produto)
produto.nome = 'Caneta' // permite apenas alterar valores dos atributos
produto.info = 'Não inclui novo atributo'
delete produto.preco // não exclui atributo
console.log(produto)
console.log('Está selado? ', Object.isSealed(produto))

// Object.freeze = selado + valores constantes (Não altera os valores)