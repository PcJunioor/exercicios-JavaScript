const pessoa = {
    saudacao: 'bom Dia',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const  falar = pessoa.falar
falar() //CONFLITO ENTRE PARADIGMAS FUNCIONAL E OO.

const falarDePessoa = pessoa.falar.bind(pessoa) //AMARRAR UM DETERMINADO OBJETO PRA ELE SER O DONO DA EXECUÇÃO SEMPRE QUE FOR CHAMADO
// SEMPRE REFERENCIAR O THIS SERÁ SEMPRE O OBJETO QUE PASSOU PARA A FUNÇÃO BIND

// A FUNÇÃO BIND SEMPRE RETORNA UMA OUTRA FUNÇÃO, NO CASO FALARDEPESSOA
falarDePessoa()