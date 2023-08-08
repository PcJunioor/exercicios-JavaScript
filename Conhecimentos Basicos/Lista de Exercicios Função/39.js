let vetorA = [1, 2, 3, 4]
let vetorB = [5, 6, 7, 8]

function inverterVetores(vetorA, vetorB){
    if(vetorA.length == vetorB.length){
        let controle = vetorA.length
        vetorA.push(vetorB.splice(0, controle))
        vetorB.push(vetorA.splice(0, controle))
        return `Vetor A: ${vetorA}\nVetor B: ${vetorB}`
    } else{
        return 'Vetores de tamanhos diferentes'
    }
}
console.log(inverterVetores(vetorA, vetorB))