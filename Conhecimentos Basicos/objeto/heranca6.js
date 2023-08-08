function Aula(nome, videoID){
    this.nome = nome,
    this.videoID = videoID
}
const aula1 = new Aula('Matemática', 123)
const aula2 = new Aula('Inf', 456)
console.log(aula1, aula2)

// SIMULANDO O 'NEW'
function novo(funcao, ...params){
    const obj = {}
    obj.__proto__ = funcao.prototype
    funcao.apply(obj, params)
    return obj
}
const aula3 = novo(Aula, 'ingles', 789)
const aula4 = novo(Aula, 'Esp', 444)
console.log(aula3, aula4)