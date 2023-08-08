// UMA FACTORY RETORNA UM NOVO OBJETO (OUTRA INSTÂNCIA)
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}