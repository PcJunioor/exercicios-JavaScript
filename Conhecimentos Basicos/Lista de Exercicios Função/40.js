const notas = [10, 0.9, 4.9, 5, 8]

function verificaNotas(notas){
    for(let i in notas){
        if(notas[i] >= 0 && notas[i] < 5){
             console.log(`${notas[i]} - Conceito D`)
        } else if(notas[i] >= 5 && notas[i] < 7){
            console.log(`${notas[i]} - Conceito C`)
        } else if(notas[i] >= 7 && notas[i] < 9){
            console.log(`${notas[i]} - Conceito B`)
        } else{
            console.log(`${notas[i]} - Conceito A`)
        }
    }
}

verificaNotas(notas)