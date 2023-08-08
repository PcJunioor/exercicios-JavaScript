const vetorPilha = [1, 2, 3, 4, 5]
const vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetores(vet1, vet2){
    return vet1.concat(vet2)
}

console.log(adicionarVetores(vetorPilha, vetorAdiciona))