const pai = {
    nome: 'Pedro',
    corDoCabelo: 'preto',
}
// CRIA AUTOMATICAMENTE O OBJETO HERDANDO DO PAI
const filho1 = Object.create(pai)
filho1.nome = 'Paulo'
console.log(filho1.corDoCabelo)
const filho2 = Object.create(pai, {
    nome: {value: 'Bia', writable: true, enumerable: true}
})
console.log(`${filho2.nome} - Cabelo: ${filho2.corDoCabelo}`)
console.log(Object.keys(filho2))

// VERIFICAR SE O ATRIBUTO VEIO POR HERANÇA OU SE PERTENCE AO PRÓPRIO OBJETO
for(let key in filho2){
    filho2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Atributo Por Herança: ${key}`)
}