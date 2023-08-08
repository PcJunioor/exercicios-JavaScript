function meuObjeto(){}
console.log(meuObjeto.prototype)

const obj1 = new meuObjeto
const obj2 = new meuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(meuObjeto.prototype === obj1.__proto__)
console.log(meuObjeto.__proto__ === Function.prototype)
console.log(meuObjeto.prototype === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
// NÃO EXISTE NENHUM NA CADEIA ACIMA DE OBJECT.PROTOTYPE
console.log(Object.prototype.__proto__ === null)

meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Nome é : ${this.nome}`)
}

obj1.falar()
obj2.falar()
obj2.nome = 'Paulo'
obj2.falar()
obj1.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

