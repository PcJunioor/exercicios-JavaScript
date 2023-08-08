function verificaExtra(idade){
    if(idade < 10){
        return 100 + 80
    }
    if(idade >= 10 && idade <= 30){
        return 100 + 50
    }
    if(idade > 30 && idade <= 60){
        return 100 + 95
    }
    if(idade > 60){
        return 100 + 130
    }     
}

console.log(verificaExtra(61))

console.log(verificaExtra(59))

console.log(verificaExtra(29))