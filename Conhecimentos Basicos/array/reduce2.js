const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 8, bolsista: false},
    {nome: 'Aline', nota: 2.3, bolsista: true},
    {nome: 'paulo', nota: 9.3, bolsista: false}
]

// desafio 1: todos os alunos são bolsistas? criar função reduce
// desafio 2: Algum aluno é bolsista?

const pegarBolsista = a => a.bolsista
// DESAFIO 1 
console.log(alunos.map(pegarBolsista).reduce((resultado, bolsista) => resultado && bolsista))
// DESAFIO 2
console.log(alunos.map(pegarBolsista).reduce((resultado, bolsista) => resultado || bolsista))
