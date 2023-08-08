// DESESTRUTURAÇÃO
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua do Jokey',
        numero: 320
    }
}
const {nome, idade} = pessoa
console.log(nome, idade)
// OU
const {nome: n, idade:i} = pessoa
console.log(n, i)
// OU PODE COLOCAR UM VALOR PADRÃO SE O ATRIBUTO NÃO EXISTIR.
const {sobrenome, isAtivo = true} = pessoa
console.log(sobrenome, isAtivo)
// OU
const {endereco:{logradouro, numero, cep = '00000-000'}} = pessoa
console.log(logradouro, numero, cep)



