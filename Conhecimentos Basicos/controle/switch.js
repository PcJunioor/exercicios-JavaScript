const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        // PODE COLOCAR VÁRIOS CASES JUNTOS EXECUTANDO A MESMA AÇÃO.
        case 10: case 9:
            console.log('Conceito A')
            break
        case 8: case 7:
            console.log('Conceito B')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nova invalidaS')        
    }
}

imprimirResultado(11)