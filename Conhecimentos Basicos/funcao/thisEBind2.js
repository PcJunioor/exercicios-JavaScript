function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
        

    }.bind(this), 1000)
}
new Pessoa

// EXEMPLO ASSOCIANDO O *THIS* A UMA CONSTANTE
function Segundos(){
    this.segundos = 0
    const self = this

    setInterval(function(){
        self.segundos++
        console.log(self.segundos)
        

    }, 1000)
}
new Segundos