class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`nome: ${this.nome}`)
    }
}

const p1 = new Pessoa('Paulo Cesar')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Nome: ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()