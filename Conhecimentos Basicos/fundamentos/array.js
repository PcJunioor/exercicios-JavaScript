const valores = [7.7, 8.9, 9.3, 8.2]

console.log(valores[0], valores[9])

valores[9] = 5
console.log(valores) 

console.log(valores.length)

// ADD NOVOS ELEMENTOS -> entre {} é um objeto
valores.push({id: 3}, false, null, 'teste')
console.log(valores)
delete valores[0]
console.log(valores.pop())

console.log(valores)

// EM JS ARRAY É DO TIPO OBJECT
console.log(typeof valores)