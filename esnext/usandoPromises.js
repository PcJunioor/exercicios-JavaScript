// com promise

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

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))

    getTurma('D').catch(e => console.log(e.message))


    // let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(b => `B: ${b.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(c => `C: ${c.nome}`))
//             console.log(nomes)
//         })
        
//     })
// })