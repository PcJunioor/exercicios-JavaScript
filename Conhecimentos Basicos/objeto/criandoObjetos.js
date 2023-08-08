// USANDO NOTAÇÃO LITERAL
const obj1 = {}
// OBJECT EM JS (FUNÇÃO CONSTRUTORA)
console.log(typeof Object, typeof new Object)
const obj2 = new Object

// FUNÇÕES CONSTRUTORAS
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new Produto('Caneta', 2.99, 0.1)
const p2 = new Produto('livro', 45.98, 0.1)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// FUNÇÃO FACTORY
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 1200, 0)
const f2 = criarFuncionario('Paulo', 8000, 1)

console.log(f1.getSalario(), f2.getSalario())

// OBJECT.CREATE
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// TRANSFORMAR JSON EM OBJECT
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
