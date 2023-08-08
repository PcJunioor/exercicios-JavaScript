const sequence = {
    _id: 1,
    get id(){
        return this._id++
    }
}
const produtos = {

}
// MÉTODO POST
function salvarProduto(produto){
    if(!produto.id){
        produto.id = sequence.id
    }
    produtos[produto.id] = produto
    return produto
}
// MÉTODO GET POR ID
function getProduto(id){
    return produtos[id] || {}
}
// MÉTODO GET
function getProdutos(){
    return Object.values(produtos)
}
// MÉTODO DELETE
function excluirProduto(id){
    // retorna o objeto que foi excluído
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}