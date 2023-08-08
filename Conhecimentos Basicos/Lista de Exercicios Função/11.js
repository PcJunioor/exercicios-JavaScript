function verificaBissexto(ano){
    if(ano % 400 == 0){
        console.log('Ano é bissexto')
        return true
    } else if(ano % 100 == 0){
        console.log('Ano é bissexto')
        return true
    } else if(ano % 4 == 0){
        console.log('Ano é bissexto')
        return true
    } else{
        console.log('Ano NÃO é bissexto')
        return false
    }
}

console.log(verificaBissexto(1700))