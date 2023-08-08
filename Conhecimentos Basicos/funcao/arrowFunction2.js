function Segundos (){
    this.segundos = 0

    setInterval(() => {
        this.segundos++
        console.log(this.segundos)}, 1000)
}

new Segundos