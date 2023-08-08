// RECOMENDADO
let aprovados = ['Bia', 'Ana', 'Paulo']

aprovados.push('João')
console.log(aprovados)
aprovados[8] = 'Bruna'
console.log(aprovados)
// EXCLUI O VALOR, MAS MANTÉM O ÍNDICE DO ARRAY. VALOR FICA UNDEFINED
delete aprovados[8]
console.log(aprovados)
// ORDENAR ARRAY
aprovados.sort()
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // a partir do índice 1, exclui 0 elementos e adiciona 2 elementos no índice 1
console.log(aprovados)