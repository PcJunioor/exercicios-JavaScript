function juroSimples(capInicial, txJuros, meses){
    return console.log(capInicial + (capInicial * (txJuros / 100) * meses))
}
juroSimples(1000, 10, 2)

function juroComposto(capInicial, txJuros, meses){
    return console.log(capInicial * (1 + (txJuros / 100)) ** meses)
}
juroComposto(1000, 10, 2)