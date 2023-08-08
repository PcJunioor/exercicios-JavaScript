// 2 INSTÂNCIAS DIFERENTES, VALOR DIFERENTE 
const instanciaNovaA = require("./instanciaNova")()
const instanciaNovaB = require("./instanciaNova")()
// TRATA DE UMA ÚNICA INSTÂNCIA, O VALOR SERÁ O MESMO
const instanciaUnicaA = require("./instanciaUnica")
const instanciaUnicaB = require("./instanciaUnica")

instanciaNovaA.inc()
instanciaUnicaA.inc()
console.log(instanciaNovaA.valor)
console.log(instanciaNovaB.valor)
console.log(instanciaUnicaA.valor)
console.log(instanciaUnicaB.valor)