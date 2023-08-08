
let listaPontos = "10, 20, 20, 8, 25, 3, 0, 30, 1"

function avaliaJogos(listaPontos){
    let pontuacoes = listaPontos.split(", ")
    let nRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontucao = pontuacoes[0]

    for(let i = 1; i < pontuacoes.length; i ++){
        if(parseInt(pontuacoes[i]) < parseInt(menorPontucao)){
            menorPontucao = pontuacoes[i]
            piorJogo = i + 1
        } else if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)){
            maiorPontuacao = pontuacoes[i]
            nRecords ++
        }
    }
    return [nRecords, piorJogo]
}

console.log(avaliaJogos(listaPontos))