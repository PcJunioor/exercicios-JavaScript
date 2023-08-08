// (...) rest(juntar) / spread(juntar)

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1230}
const clone = {ativo: true, ...funcionario}
console.log(funcionario)
console.log(clone)

// usar spread com array
const grupoA = ['Paulo', 'Lucas']
const grupoB = ['Bruna', 'Leticia', ...grupoA]
console.log(grupoB)

// OPERADOR REST
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(5, 8 , 10, 100))