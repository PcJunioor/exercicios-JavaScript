function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max] // utilizando destructuring para inverter os valores de min e max
    }

    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
            
        }, tempo)
    })
}


// Bom para fazer coisas em paralelo


function gerarVariosNumeros(){
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 4000),
    ])
}

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })

