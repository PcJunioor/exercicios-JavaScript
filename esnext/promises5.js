function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            //con.log('temp')
            if(Math.random() < chanceErro){
                reject('Erro...Reject')
            } else {
                resolve(valor)
            }
            
        } catch(e){
            reject(e)
        }
        
    })
}

funcionarOuNao('Testando...', 0.1)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v), 
        //err => console.log(`Erro esperado: ${err}`)
        )
    .catch(err => console.log(`Erro Geral: ${err}`)) // via de regra utilizar o catch por último
    .then(() => console.log('Fim...')) // depois do catch não tem mais nenhuma informação