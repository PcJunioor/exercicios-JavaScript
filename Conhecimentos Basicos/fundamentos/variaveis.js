let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
// MODULE EXPORTS FICA SALVO TODO O OBJETO, É UM OBJETO NO CASO
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
// CRIANDO VARIÁVEL SEM SENTIDO, SEM VAR E SEM LET, ** EVITAR **
abc = 3
console.log(global.abc)



