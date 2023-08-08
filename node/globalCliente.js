require("./global")
// SALVO NO GLOBAL, TOMAR CUIDADO AO USAR. FICA PASSÍVEL DE SER MODIFICADO.
console.log(meuApp.nome)
console.log(meuApp.saudacao())
meuApp.nome = 'Mudou nome!!!!'
console.log(meuApp.nome)
// AO UTILIZAR O OBJECT.FREEZE ELE NÃO MODIFICA. TEM UM CONTORLE MAIOR
console.log(meuAppFreeze.nome)
console.log(meuAppFreeze.saudacao())
meuAppFreeze.nome = 'Mudou nome!!!!'
console.log(meuAppFreeze.nome)