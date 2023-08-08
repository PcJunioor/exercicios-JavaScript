function calcularBhaskara(ax2, bx, c){
    let resultado = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return console.log('Delta < 0, não possui raiz real')        
    } else {
        let x1 = (-bx + (Math.sqrt(delta))) / (2 * ax2)
        let x2 = (-bx - (Math.sqrt(delta))) / (2 * ax2)
        resultado.push(x1)
        resultado.push(x2)
        
        return console.log(resultado)
    }
}

calcularBhaskara(3, 10, 1)
calcularBhaskara(1, 10, 2)
calcularBhaskara(3, 5, 12)