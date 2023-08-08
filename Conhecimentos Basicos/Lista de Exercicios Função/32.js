const vetor = [10, 10, 10]

function verificaMedia(vetor){
    let media = 0
    for(let i in vetor){
        media += vetor[i]
    }
    return media / vetor.length
}

console.log(verificaMedia(vetor))