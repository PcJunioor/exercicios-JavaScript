{{{{var sera = 'Será??'}}}}

console.log(sera)


// VARIÁVEL VAR NÃO FICA VISÍVEL FORA DA FUNÇÃO
function teste(){
    var local = 123
}
teste()
console.log(local)