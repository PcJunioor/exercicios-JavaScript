const a = 1
const b = 2
const c = 3
// FORMA ANTIGA
const obj1 = {
    a: a,
    b: b,
    c: c
}
// FORMA ATUAL
const obj2 = {a, b, c}
console.log(obj1, obj2)
// ASSOCIAR UMA VARIÁVEL COMO UMA CHAVE DE UM ATRIBUTO
const nomeAttr = 'nota'
const valorAttr = 7.7
const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)
// UMA FUNÇÃO COMO ATRIBUTO
const obj5 = {
    nome: 'Função',
    funcao(){
    }
}
console.log(obj5)