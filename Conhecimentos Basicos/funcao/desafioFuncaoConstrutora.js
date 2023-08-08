function Pessoa(nome){    
    this.nome = nome    

    this.falar = function(){
        console.log(`nome: ${this.nome}`)
    }
}

const p1 = new Pessoa('Paulo Cesar')
p1.falar()