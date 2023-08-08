const sequencia = {
    _valor: 1, // POR CONVENÇÃO VARIÁVEL COM'_' SERÁ PRIVADA
    get valor(){
        return this._valor++
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor) // ACIONAR O GET
sequencia.valor = 1000 // ACIONAR O SET
console.log(sequencia.valor, sequencia.valor)