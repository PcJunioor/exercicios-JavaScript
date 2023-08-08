// PAR NOME/VALOR

const saudacao = 'opa' // CONTEXO LÉXICO 1

function exec(){
    const saudacao = 'Falaaa' // CONTEXTO LÉXICO 2
    return saudacao
}
console.log(saudacao)
console.log(exec())


// OBJETOS SÃO GRUPOS ANINHADOS DE CHAVES/VALOR
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Vicente pires',
        numero: 123
    }
}

console.log(cliente)
