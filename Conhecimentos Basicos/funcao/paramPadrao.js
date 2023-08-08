// GERAR VALOR PADRÃO PARA VARIÁVEL DENTRO DA FUNÇÃO
function soma(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma())

//  OUTRA FORMA
function soma2(a, b, c){
    a = a != undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // ESSA É A MAIS SEGURA
    return a + b + c
}
console.log(soma2(0, 0, 0))

// VALOR PADRÃO DO ES2015 MELHOR FORMA PARA VALOR PADRÃO PARA ARGUMENTOS.
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}