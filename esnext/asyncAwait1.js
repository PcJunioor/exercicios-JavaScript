const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            // pegando os dados e armazenando 
            res.on('data', dados => {
                resultado += dados
            })
            // terminou de pegar os dados e irá trabalhar
            res.on('end', () => {

                try{
                    resolve(JSON.parse(resultado)) // transforma para OBJ
                } catch(e){
                    reject(e)
                }
                
            })
        })
    })
}

// Recurso ES8
// Objetivo de simplificar o uso de promises

let obterAlunos = async() =>{
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    //const tD = await getTurma('D')
    return [].concat(tA, tB, tC) // retorna um objeto AsyncFunction
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))