function classificarAluno(nota){
    if(nota < 38){
        return `'Nota: ${nota} - Aluno REPROVADO!!'`
    } else{
        return `Nota: ${arredondarNota(nota)} - Aluno APROVADO!!!`
    }
}

function arredondarNota(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota % 5))
    } else{
        return nota
    }
}

console.log(classificarAluno(38))
