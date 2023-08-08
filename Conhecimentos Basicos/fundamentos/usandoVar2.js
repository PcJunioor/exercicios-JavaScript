var numero = 1 
// ESTÃO NO MESMO ESCOPO... EM BLOCO DE CÓDIGO FICA NO MESMO ESCOPO
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)