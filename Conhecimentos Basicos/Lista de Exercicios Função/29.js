const vetor = [10, 21, 33, 8, 9, 11, 24, 91]

function verificaIntervalo(vetor){
    let dentro = 0
    let fora = 0
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            dentro ++
        } else{
            fora ++
        }
    }
    return `Dentro: ${dentro}\nFora: ${fora}`
}

console.log(verificaIntervalo(vetor))