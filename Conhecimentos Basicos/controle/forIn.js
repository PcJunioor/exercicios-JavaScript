const notas = [6.2, 7.4, 8.1, 4.2]
// PEGA O ÍNDICE DO ARRAY
for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Paulo',
    idade: 35,
    peso: 75
}
// PERCORRENDO OBJETOS
for (let i in pessoa){
    console.log(pessoa[i])
}
// USANDO TEMPLATE STRING E PERCORRENDO ATRIBUTOS DOS OBJETOS
for (let i in pessoa){
    console.log(`${i} : ${pessoa[i]}`)
}