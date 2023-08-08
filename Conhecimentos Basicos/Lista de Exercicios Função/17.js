function getPlano(funcionario){
    return funcionario.plano
}
function calcularAumento(funcionario){
    let novoSalario = 0
    switch(getPlano(funcionario)){
        case 'A': return novoSalario =funcionario.salario + (funcionario.salario * 0.10)
        case 'B': return novoSalario =funcionario.salario + (funcionario.salario * 0.15) 
        case 'C': return novoSalario =funcionario.salario + (funcionario.salario * 0.20)
        default: return 'PLANO INVÁLIDO!!!'
    }
}

const funcionario1 = {
    plano: 'A',
    salario: 1500
}
const funcionario2 = {
    plano: 'B',
    salario: 1500
}
const funcionario3 = {
    plano: 'C',
    salario: 1500
}
const funcionario4 = {
    plano: 'D',
    salario: 1500
}

console.log(calcularAumento(funcionario1))
console.log(calcularAumento(funcionario2))
console.log(calcularAumento(funcionario3))
console.log(calcularAumento(funcionario4))