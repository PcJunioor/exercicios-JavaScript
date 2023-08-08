const nums = [1, 2, 3, 4, 5]
// MAP GERA UM NOVO ARRAY
console.log(nums.map(n => n * 2))
console.log(nums)

const soma = n => n + 10
const paraDinheiro = n => `R$${parseFloat(n).toFixed(2).replace('.', ',')}`
console.log(nums.map(soma).map(paraDinheiro))