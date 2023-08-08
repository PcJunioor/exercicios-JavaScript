const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Ipad', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Tesoura', preco: 18.99, fragil: false }
]
// RETORNA TRUE
console.log(produtos.filter(p => ! p.fragil ))
console.log(produtos.filter(p => p.preco > 100 ))