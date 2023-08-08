function verificaAnuidade(mesPagamento, anuidade){
    if(mesPagamento > 0 && mesPagamento < 13){
        let atraso = mesPagamento - 1
        return (anuidade  * (1 + (5 / 100)) ** atraso).toFixed(2)
    }else{
        return 'Mês inválido'
    }
}

console.log(verificaAnuidade(5, 100))