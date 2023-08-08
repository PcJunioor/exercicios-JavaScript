function fatorial(numero){
    soma = 1
    controle = numero
    for(let i = 1; i < controle; i++){
        soma *= numero
        numero--                
    }
    return soma
}

console.log(fatorial(6))
console.log(fatorialRecursivo(6))

function fatorialRecursivo(numero){
    if(numero == 0){
        return 1
    } else {
        return numero * fatorialRecursivo(numero - 1)
    }
}