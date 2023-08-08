Array.prototype.forEach2 = function(callBack){
    for(let i = 0; i < this.length; i++){
        callBack(this[i], i)
    }
}


const aprovados = ['Bia', 'Ana', 'Paulo']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
})