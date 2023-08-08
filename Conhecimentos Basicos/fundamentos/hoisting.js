// IÇAMENTO, ELE PRECEDE A DECLARAÇÃO DA VARIÁVEL, MAS NÃO ATRIBUI O VALOR
console.log(a)
var a = 2
console.log(a)

// NA FUNÇÃO ACONTECE A MESMA COISA... **COM LET GERA ERRO**
function teste (){
    console.log(a)
    var a = 2
    console.log(a)
}
teste()