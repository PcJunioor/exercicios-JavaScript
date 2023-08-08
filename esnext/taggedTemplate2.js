function real (partes, ...valores){
    console.log(partes)
    console.log(valores)
    const resultado = []
    valores.forEach((numero, indice) => {
        numero = isNaN(numero) ? numero : `R$${numero.toFixed(2)}`
        resultado.push(partes[indice], numero)
    })
    return resultado.join('')
}

const num1 = 13.3
const num2 = 2

console.log(real `${num1} e ${num2}`)