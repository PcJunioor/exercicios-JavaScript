// FUNÇÃO PARA CRIAR UMA COMPARAÇÃO DE INTERVALO
Number.prototype.intervalo = function(inicio, fim){
    return this >= inicio && this <= fim 
}

function imprimirResultado(nota){
    if(nota.intervalo(9, 10)){
        console.log('Conceito A')
    } else if(nota.intervalo(7, 8)){
        console.log('Conceito B')
    } else{
        console.log('Abaixo da Média!!')
    }

    console.log('Fim do Bloco!!')

}

imprimirResultado(4)