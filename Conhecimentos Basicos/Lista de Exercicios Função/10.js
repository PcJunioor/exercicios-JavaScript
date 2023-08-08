function verificaDivisivel3(numero){
    if (Number.isInteger(numero)){
        if((numero % 3) == 0){
            return true
        } else {
            return false
        }
    } else{
        return console.log("Número não é inteiro")
    }
}
console.log(verificaDivisivel3(3))