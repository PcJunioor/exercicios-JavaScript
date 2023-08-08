function calculadora(n1, op, n2){
    switch(op){
        case '+': return n1 + n2
        case '-': return n1 - n2
        case '*': return n1 * n2
        case '/': return n1 / n2
        default: return 'Operação inválida'
    }
}

console.log(calculadora(2, '*', 3))
console.log(calculadora(2, '-', 3))
console.log(calculadora(2, '+', 3))
console.log(calculadora(2, '/', 3))
console.log(calculadora(2, '2', 3))