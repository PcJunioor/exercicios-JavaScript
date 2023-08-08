const vetor = [10, 21, -33, -8, 9, 11, -24, 91]

function verificaNegativo(vetor){
    let negativo = 0
    for(let i in vetor){
        if(vetor[i] < 0){
            negativo ++
        }
    }
    return `Negativo: ${negativo}`
}

console.log(verificaNegativo(vetor))