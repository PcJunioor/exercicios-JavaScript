const vetor = [10, 21, 33, 8, 9, 11, 24, 91]

function verificaMaiorMenor(vetor){
    let maior = 0
    let menor = 100000000000
    for(let i in vetor){
        if(vetor[i] > maior){
            maior = vetor[i]            
        } else if(vetor[i] < menor){
            menor = vetor[i]
        }
        
    }
    return `Maior: ${maior}\nMenor: ${menor}`
}

console.log(verificaMaiorMenor(vetor))