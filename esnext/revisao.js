// OPERADOR REST '...' ( EM CONTEXTO DE OBJET E ARRAY É CHAMADO DE SPREAD)
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(5, 8 , 10, 100))

// Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.entries(obj))
console.log(Object.values(obj))

// MELHORIAS NA NOTAÇÃO LITERAL
const  nome = 'Carla'
const pessoa = {
    nome,
    idade: 30,
    ola(){
        return `Olá ${nome}`
    }
}
console.log(pessoa)
console.log(pessoa.ola())

// CLASS (é convertida para função no js)
class Animal{
    falar(){
        return `Para criar um objeto a partir da classe usar o operador (new)`
    }
}
// HERANÇA
class Cachorro extends Animal{}

console.log(new Cachorro().falar())