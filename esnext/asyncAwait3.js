function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max){
        [max, min] = [min, max] // utilizando destructuring para inverter os valores de min e max
    }

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Reject, não irá exibir pq o "Throw" na outra função irá sobrescrever')
        } else {
            resolve(aleatorio)
        }
    })
}

// sempre que marcar uma função como 'async' ela retorna uma promise, sendo necessário uso do 'then'
async function gerarMegaSena(qtdNumeros){
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            // await sempre vai junto da função marcada como 'async' ou que retorna uma PROMISE
            numeros.push(await gerarNumerosEntre(1, 60, numeros)) 
        }
        // a forma de resolver uma Promise dentro de uma função assíncrona é retornando o valor.
        return numeros
    } catch(e) {
        // a forma de rejeitar uma Promise dentro de uma função assíncrona é lançando uma exceção.
        throw'Que chato'
    }
    
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)

