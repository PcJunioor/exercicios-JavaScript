function verificaNota(aluno){
    // MAIOR NOTA FICA NO INDICE 0
    let mediaFinal = 0
    let maiorNota = []
    if(aluno.n1 > aluno.n2 && aluno.n1 > aluno.n3){
        maiorNota.push(aluno.n1, aluno.n2, aluno.n3)

    } else if(aluno.n2 > aluno.n3 && aluno.n2 > aluno.n1){
        maiorNota.push(aluno.n2, aluno.n1, aluno.n3)
    } else{
        maiorNota.push(aluno.n3, aluno.n2, aluno.n1)
    }
    mediaFinal = (maiorNota[0] * 4 + maiorNota[1] * 3 + maiorNota[2] * 3) / 10

    if(mediaFinal < 5){
        console.log(`(${aluno.codigo}) Média Final: ${mediaFinal} - REPROVADO!!!!`) 
    }
    if(mediaFinal > 5){
        console.log(`(${aluno.codigo}) Média Final: ${mediaFinal} - APROVADO!!!!`) 
    } 
}
const aluno1 = {
    codigo: 100,
    n1: 10,
    n2: 6,
    n3: 3
}
const aluno2 = {
    codigo: 200,
    n1: 2,
    n2: 2,
    n3: 3
}

verificaNota(aluno1)
verificaNota(aluno2)
