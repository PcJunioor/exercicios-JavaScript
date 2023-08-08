for(let letra of 'Paulo'){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for(let i in assuntosEcma){
    console.log(assuntosEcma[i])
}

for(let assunto of assuntosEcma){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado:false}]
])
// percorrer o map
for(let assunto of assuntosMap){
    console.log(assunto)
}
// pegar somente as chaves
for(let chave of assuntosMap.keys()){
    console.log(chave)
}
// pegar somente valores
for(let valor of assuntosMap.values()){
    console.log(valor)
}

// utilizando destructing
for(let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}
// aplicando no SET
const s = new Set(['a', 'b', 'c'])
for(let letra of s){
    console.log(letra)
}