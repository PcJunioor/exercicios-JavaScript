const aprovados = ['Bia', 'Ana', 'Paulo']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
})
// UTILIZANDO ARROW FUNCTION
aprovados.forEach((n,i) => {
    console.log(`${i + 1}: ${n}`)
})
// ARMAZENANDO EM UMA CONSTANTE
const exibirAprovados =nome => console.log(nome)
aprovados.forEach(exibirAprovados)