function verificaCrescimento(aluno1, aluno2){
    let crescimento1 = aluno1.altura
    let crescimento2 = aluno2.altura
    // VERIFICA SE SÃO DO MESMO TAMANHO
    if(aluno1.altura == aluno2.altura){
        return `${aluno1.nome} e ${aluno2.nome} são do mesmo tamanho` 
    }
    // VERIFICA SE É MAIOR, CASO SEJA, VERIFICA SE IRÁ SER ULTRAPASSADO
    if(aluno1.altura > aluno2.altura){
        if(aluno1.txC < aluno2.txC){
            for(let i = 1; i < 100; i++){
                crescimento1 += crescimento1 * (aluno1.txC / 100)
                crescimento2 += crescimento2 * (aluno2.txC / 100)
                if(crescimento1 < crescimento2){
                    return `${aluno2.nome} ficará maior que ${aluno1.nome} em ${i} anos`
                }
            }
        } else{
            return `${aluno1.nome} é maior que ${aluno2.nome}`
        }
    }
    // VERIFICA SE É MENOR, CASO SEJA, VERIFICA SE IRÁ ULTRAPASSAR
    if(aluno1.altura < aluno2.altura){      
        for(let i = 1; i < 100; i++){
            crescimento1 += crescimento1 * (aluno1.txC / 100)
            crescimento2 += crescimento2 * (aluno2.txC / 100)
            if(crescimento1 > crescimento2){
                return `${aluno1.nome} ficará maior que ${aluno2.nome} em ${i} anos`
            }
        }
        if(crescimento1 < crescimento2){
            return `${aluno1.nome} NÃO é, e nem ficará maior que ${aluno2.nome} `
        }
    }
}
// CRIAÇÃO DOS OBJETOS
let crianca1 = {
    nome: 'Paulo',
    altura: 140,
    txC: 0
}
let crianca2 = {
    nome: 'Pedro',
    altura: 170,
    txC: 3
}
let crianca3 = {
    nome: 'João',
    altura: 130,
    txC: 1
}
console.log(verificaCrescimento(crianca1, crianca2))