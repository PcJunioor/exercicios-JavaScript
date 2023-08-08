const vetor = [1, 4, 5]
const fator = 5

function multiplicarVetor(vetor, fator){
    let resultado = []
    if(fator > 5){
        return multiplicarVetor2(vetor, fator)
    } else{
        for(let i in vetor){
            resultado.push(vetor[i] * fator)
        }
        return resultado
    } 
}

function multiplicarVetor2(vetor, fator){
    let resultado = []
    for(let i in vetor){
        resultado.push(vetor[i] * fator)
    }
    return resultado
}

console.log(multiplicarVetor(vetor, fator))