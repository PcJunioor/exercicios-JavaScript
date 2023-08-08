//  NÃO ACEITA REPETIÇÃO / NÃO É INDEXADO

const times = new Set()
 

times.add('Palmeiras').add('São Paulo').add('Santos').add('Corinthians')
console.log(times)
console.log(times.size)
console.log(times.has('palmeiras'))
console.log(times.has('Palmeiras'))
times.delete('Corinthians')
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Lucas', 'Julia']
const nomesSet = new Set(nomes)
console.log(nomesSet)
