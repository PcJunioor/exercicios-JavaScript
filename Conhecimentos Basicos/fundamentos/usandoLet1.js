// VAR TEM ESCOPO GLOBAL E ESCOPO DE  FUNÇÃO
// LET TEM ESCOPO GLOBAL, ESCOPO DE FUNÇÃO E ESCOPO DE BLOCO
var numero = 1
{
    let numero = 2
    console.log(numero)
}

console.log(numero)