function esperarPor(segundos, texto){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(texto)            
        }, segundos * 1000)
    })
}

// esperarPor(2, 'Executnado promise 1 ...')
//     .then(v => console.log(v))  
//     .then(() => esperarPor(2, 'Executando promise 2...'))
//     .then(v => console.log(v))
//     .then(() => esperarPor(2, 'Executando promise 3...'))
//     .then(v => console.log(v))

function retornarValor(){
    return 
        setTimeout(() => {
            resolve(1)
        }, 5000)
    }


async function retornarValorRapido(){
    return 20
}

async function executar(){
    let valor = await retornarValorRapido()
    await esperarPor(2, `Async/Await  ${valor}`).then(console.log)
    await esperarPor(2, `Async/Await  ${valor + 1}`).then(console.log)
    await esperarPor(2, `Async/Await  ${valor + 2}`).then(console.log)
    return valor + 3
}

async function executarDeVerdade(){
    const valor = await executar()
    console.log(valor)
}
executarDeVerdade()

//executar().then(console.log)

