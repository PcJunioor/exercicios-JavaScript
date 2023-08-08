// FUNÇÃO EM JS É FIRST-CLASS OBJECT (CITIZENS)
// HIGHER-ORDER FUNCTION

// CRIAR DE FORMA LITERAL.
function fun1(){

}
// ARMAZENAR EM UM VARIÁVEL.
const fun2 = function(){

}
// ARMAZENAR EM UM ARRAY.

const array = [function(a, b){
    return a + b

}, fun1, fun2]

console.log(array[0](2, 3))

// ARMAZENAR EM UM ATRIBUTO DE OBJETO.
const obj = {

}
obj.falar = function(a, b){
    return a + b
}
console.log(obj.falar(-1, 5))

// PASSAR FUNÇÃO COMO PARAMETRO.
function run(fun){
    fun()
}

run(function() { console.log('Executando fun..')})


// UMA FUNÇÃO PODE RETORNAR/CONTER UMA FUNÇÃO
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(5, 6)(10)
