const vetorInteiro = [10, 20]
const vetorString = ['Paulo', 'Bruna']
const vetorDouble = [7.2, 8.2]
let vetorResultado = []

console.log(vetorResultado.concat(vetorInteiro, vetorDouble, vetorString))

// RECEBER QUANTIDADE INDEFINIDA DE PARÂMETROS
function concatenar(...args){
    let resultado = []
    for(let i in args){
        resultado = resultado.concat(args[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble, vetorString))