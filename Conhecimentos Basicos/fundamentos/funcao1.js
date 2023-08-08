// FUNÇÃO SEM RETORNO
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
//  SÓ VAI IMPRIMIR OS 2 PASSADOS POR PARÂMETRO
imprimirSoma(2, 5, 7, 10)
imprimirSoma()




// FUNÇÃO COM RETORNO
function soma (a, b = 0){
    return a + b
}

console.log(soma(2, 9))
console.log(soma(2))