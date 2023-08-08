const vetor = [10, 21, 33, 8, 9, 11, 24, 91]

function verificaParImpar(vetor){
    let par = 0;
    let impar = 0;
    for(let i in vetor){
        if(vetor[i] % 2 == 0){
            par ++
        } else{
            impar ++
        }
    }
    return `Par: ${par}\nÍmpar: ${impar}`
}

console.log(verificaParImpar(vetor))