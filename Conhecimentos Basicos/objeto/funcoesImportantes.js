const pessoa = {
    nome: 'Paulo',
    idade: 30,
    peso: 74
}
// MOSTRAR AS CHAVES DO OBJETO
console.log(Object.keys(pessoa))
// MOSTRAR O VALOR DOS OBJETOS
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// FORMA DE PERCORRER UM OBJETO COM CHAVE E VALOR
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// OUTRA FORMA USANDO DESTRUCTING
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
// DEFINIR PROPRIEDADE
Object.defineProperty(pessoa, 'dataNascimento',{
    writable: false,
    enumerable: false, // SERVER PARA OCULTAR ATRIBUTO
    value: '13/01/1988'
})

pessoa.dataNascimento = '05/01/1988'
console.log(pessoa)
console.log(Object.keys(pessoa))

// ASSIGN -> COLOCA OS ATRIBUTOS DENTRO DE OUTRO OBJETO
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

Object.assign(dest, o1, o2)
console.log(dest)