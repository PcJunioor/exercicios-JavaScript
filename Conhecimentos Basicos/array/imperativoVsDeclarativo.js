const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 8}
]

// IMPERATIVO - DEIXA MAIS EXPLÍCITO O QUE DEVE SER FEITO
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// DECLARATIVO - RESOLVIDO INTERNAMENTE - UTILIZAR MAIS ESSE
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)