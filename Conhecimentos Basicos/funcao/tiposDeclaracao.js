// FUNCTION DECLARATION - O COMPILADOR CARREGA PREVIAMENTE AS FUNÇÕES;
console.log(soma(3, 4))

function soma(x, y){
    return x + y
}

// FUNCTION EXPRESSION
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4))

// NAMED FUNCTION EXPRESSION
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))
