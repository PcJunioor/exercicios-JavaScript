// FORA DA FUNÇÃO O 'THIS' APONTA PARA O MODULE.EXPORTS
console.log(this === global) //F
console.log(this === module.exports) // V
console.log(this === module) // F
console.log(this === exports) // V
console.log(exports === module.exports) // V

// NO ESCOPO DE FUNÇÃO O 'THIS' APONTA PARA O OBJETO GLOBAL
function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // F
    console.log(this === module.exports) // F
    console.log(this === global) // V
}
logThis()

// NO ESCOPO DE ARROW FUNCTION O 'THIS' APONTA PARA O MODULE EXPORTS
const logThisArrow = () => {
    console.log('Dentro de uma ARROW FUNCTION...')
    console.log(this === exports) // V
    console.log(this === module.exports) // V
    console.log(this === global) // F
}
logThisArrow()