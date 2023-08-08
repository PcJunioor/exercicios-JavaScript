const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, typeof peso2, peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.542
const avaliacao2 = 7.242

const total = (avaliacao1 + avaliacao2) / 2
console.log(total)

console.log(total.toFixed(2))

//  CONVERTE PARA BINÁRIO
console.log(total.toString(2))

// NÃO MUDOU O TIPO POR SER CONSTANTE
console.log(typeof total)

