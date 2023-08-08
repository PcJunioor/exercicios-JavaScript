function verImpares(inicio = 0, fim = 100){
    if(fim == inicio){
        inicio = 0
        fim = 100
    } else if(fim < inicio) {
        let temp = inicio
        inicio = fim 
        fim = temp
    }     
    if(fim > inicio){
        for(let i = inicio; i <= fim; i++){
            if(i % 2 == 1){
                console.log(i)
            }
        }
    } 
}
verImpares(10, 10)