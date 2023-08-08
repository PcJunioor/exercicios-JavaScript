// processa template string dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'outra String'
}
const aluno = 'Paulo'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)