function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //aceita um único parâmetro
            //reject(frase)
            
        }, segundos * 1000);
    })
}
falarDepoisDe(5, 'Funcionou')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e))