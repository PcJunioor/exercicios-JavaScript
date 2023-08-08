function calcularProgA(a1, r, n){
    let resultado = [a1]
    let soma = a1
    for(let i = 1; i < n; i++){
        resultado.push(a1 + (i * r))
        soma += resultado[i - 1]
    }
    return `P.A = ${resultado}\nSoma: ${soma}`
}

function calcularProgG(a1, q, n){
    let resultado = [a1]
    let soma = a1

    for(i = 0; i < n - 1; i++){
        resultado.push(resultado[i] * q)
        soma += resultado[i + 1]
    }
    return `\nP.G = ${resultado}\nSoma: ${soma}`
}
console.log(calcularProgA(10, 10, 10))
console.log(calcularProgG(3, 10, 4))