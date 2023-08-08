const escola = [{
    nome: 'Turma m1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9
    }]

}, {
    nome:'Turma m2',
    alunos: [{
        nome: 'Luana',
        nota: 4
    }, {
        nome: 'Liz',
        nota: 5
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotasDaturma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasDaturma)
console.log(notas1)
// FLAT MAP
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaturma)
console.log(notas2)