let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)
// DUPLA NEGAÇÃO VERIFICA SE O VALOR É V OU F
console.log(!! isAtivo)

// SEMPRE SÃO V
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
// VALOR É ATRIBUÍDO
console.log(!!(isAtivo = 0))
console.log(!!(isAtivo = true))


// SEMPRE SÃO F
console.log(!!0)
console.log(!!'')
console.log(!!null)
// NOT A NUMBER
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// EXPRESSÃO LÓGICA PARA VERIFICAR VERDADEIRO
console.log(!!('' || null || ' '))

let nome = ''
console.log(nome || 'Desconhecido')

let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido')