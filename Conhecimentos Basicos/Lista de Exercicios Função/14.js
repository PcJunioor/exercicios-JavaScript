function verificaFrutas(fruta){
    switch(fruta.toLowerCase()){
        case 'maçã': return 'Não vendemos esta fruta aqui'
        case 'kiwi': return 'Estamos com escassez de kiwis'
        case 'melancia': return 'Aqui está, são 3 reais o Kg'
        default: return 'ERRO!!!!'
    }
}
console.log(verificaFrutas('MAçã'))