function verificaCarro(carro){
    switch(carro.toLowerCase()){
        case 'hatch': return 'Compra efetuada com sucesso'
        case 'sedam':
        case 'motocicleta':
        case 'caminhonete': return 'Tem certeza que prefere este modelo?'
        default: return 'Não tem este tipo aqui!!!'
    }
}

console.log(verificaCarro('sedam'))