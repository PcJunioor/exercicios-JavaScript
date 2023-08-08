// PESSOA APONTA PARA UM ENDEREÇO DE MEMÓRIA E O ENDEREÇO APONTA PARA O OBJETO
const pessoa = {
    nome: 'Joao'
}
pessoa.nome = 'Pedro'
console.log(pessoa)

// PESSOA APONTA PARA UM NOVO ENDEREÇO QUE APONTA PARA UM NOVO OBJETO
// pessoa = {nome: 'Ana'}

// NÃO MEXE MAIS NO OBJETO
Object.freeze(pessoa)
pessoa.nome = 'mARIA'
console.log(pessoa)