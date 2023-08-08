// ARMAZENANDO UMA FUNÇÃO EM UM VARIÁVEL
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)


// ARMAZENANDO UMA FUNÇÃO ARROW EM UMA VARIÁVEL
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))

// RETURN IMPLÍCITO
const subtracao  = (a,b) => a - b
console.log(subtracao(3, 2))