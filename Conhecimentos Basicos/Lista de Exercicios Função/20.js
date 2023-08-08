function distribuiCedulas(saque){
    let c100 = 0
    let c50 = 0
    let c10 = 0
    let c5 = 0
    let c1 = 0
    
    while(saque != 0){
       
        if(saque % 100 == 0){
            c100++
            saque -= 100
        } else if(saque % 50 == 0){
            c50++
            saque -= 50
        } else if(saque %10 == 0){
            c10++
            saque -= 10
        } else if(saque % 5 == 0){
            c5++
            saque -= 5
        } else if(saque % 1 == 0){
            c1++
            saque -= 1
        }
    }
    return imprimirResultado(c100, c50, c10, c5, c1)
}

function imprimirResultado(c100, c50, c10, c5, c1){
    let resultado = ''
    if(c100 > 0){
        resultado += `${c100} nota(s) de R$ 100\n`
    }
    if(c50 > 0){
        resultado += `${c50} nota(s) de R$ 50\n`
    }
    if(c10 > 0){
        resultado += `${c10} nota(s) de R$ 10\n`
    }
    if(c5 > 0){
        resultado += `${c5} nota(s) de R$ 5\n`
    }
    if(c1 > 0){
        resultado += `${c1} nota(s) de R$ 1\n`
    }
    return resultado
}

console.log(distribuiCedulas(25))