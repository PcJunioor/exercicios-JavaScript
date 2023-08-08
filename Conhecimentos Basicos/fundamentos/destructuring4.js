function rand([min = 0, max = 1000]){
    // INVERTENDO AS DUAS VARIÁVEIS
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))