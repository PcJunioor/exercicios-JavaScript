const soma = function(a, b){  //FUNÇÃO ANÔNIMA (SEM NOME)
    return a + b
}

function imprimirResultadoSoma(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultadoSoma(10, 15)

imprimirResultadoSoma(5, 6, function(x, y){
    return x - y
})

imprimirResultadoSoma(10, 4, (x, y) => x * y)