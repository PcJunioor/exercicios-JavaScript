const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Ana', nota: 8, bolsista: false},
    {nome: 'Aline', nota: 2.3, bolsista: true},
    {nome: 'paulo', nota: 9.3, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) //define um valor inicial, quando não coloca ele parte do primeiro elemento.

console.log(resultado)