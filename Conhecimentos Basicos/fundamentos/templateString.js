
// 2 FORMAS DE FAZER A MESMA COISA
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

// MELHOR PARA TRABALHAR COM MUITAS STRINGS, CONSIDERA AS QUEBRAS DE LINHA.
const template = `
    olá
    ${nome}!`

console.log(concatenacao, template)

// EXPRESSÕES...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`ei...  ${nome + up(', cuidado')} !`)