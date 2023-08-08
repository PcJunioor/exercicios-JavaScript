function esperarPor(segundos, texto){
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(texto)            
        }, segundos * 1000)
    })
}

esperarPor(3, 'Primeira Promise...')
    .then(texto => console.log(texto))
    .then(() => esperarPor(3, 'Segunda Promise...').then(texto => console.log(texto)))