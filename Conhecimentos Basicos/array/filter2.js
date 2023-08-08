Array.prototype.filter2 = function(callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callBack(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Tesoura', preco: 18.99, fragil: false }
]

console.log(produtos.filter2(p => ! p.fragil ))
console.log(produtos.filter2(p => p.preco > 100 ))