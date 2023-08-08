console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
// ADICIONAR UMA FUNÇÃO NA CADEIA DO STRING
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Paulo'.reverse())
// ADICIONAR UMA FUNÇÃO NA CADEIA DO ARRAY
Array.prototype.first = function(){
    return this[0]
}
console.log([5, 2 ,3].first())