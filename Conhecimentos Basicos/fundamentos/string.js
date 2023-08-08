const escola = "cod3r"

console.log(escola.charAt(4))

// pega o numero na tabela ASCI
console.log(escola.charCodeAt(3))
//pega o índice que a letra designada está
console.log(escola.indexOf('d'))
// imprimir a partir do indice designado
console.log(escola.substring(1))

console.log(escola.substring(0,3))

console.log('Escola: '.concat(escola).concat('!'))

console.log(escola.replace(3, 'E'))
// *REGEX* TROCA TODOS OS DIGITOS POR E
console.log(escola.replace(/\d/ , 'e'))

// TRASFORMA A STRING EM ARRAY
console.log('ana, Maria, Pedro'.split(','))