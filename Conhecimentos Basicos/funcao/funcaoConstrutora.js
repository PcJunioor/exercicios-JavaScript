// ** FUNÇÃO CONSTRUTORA, FUNCIONA COMO UMA CLASSE **
function Carro (velocidadeMaxima = 200, delta = 5){
    // ATRIBUTO PRIVADO
    let velocidadeAtual = 0
    // MÉTODO PÚBLICO (ALGO QUE VAI SER PÚBLICO PODE USAR O 'THIS')
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else velocidadeAtual = velocidadeMaxima
    }
    // MÉTODO PÚBLICO GET
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro // ASSUME O VALOR PADRÃO
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof(ferrari))
console.log(typeof(Carro))