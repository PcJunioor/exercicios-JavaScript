function obterValor(n1, n2){
    let resultado = n1 / n2
    console.log(`Resultado: R$ ${resultado.toFixed(2).replace('.', ',')}`)
}

obterValor(10, 3)
obterValor(11, 3)