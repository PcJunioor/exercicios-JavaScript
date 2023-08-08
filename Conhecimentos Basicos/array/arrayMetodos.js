const pilotos = ['Hamilton', 'Vettel', 'Alonso','Massa', 'Leclerc', 'Sainz']
pilotos.pop() //remove o último elemento
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift() //remove o primeiro elemento
console.log(pilotos)
pilotos.unshift('Hamilton') //adiciona no primeiro índice
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // gera um novo array a partir do íncidce 2
console.log(algunsPilotos)
const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array a partir do índice 1 até índice 3
console.log(algunsPilotos2)