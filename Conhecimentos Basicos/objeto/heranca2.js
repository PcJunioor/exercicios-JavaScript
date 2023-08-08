// CADEIRA DE PROTÓTIPOS (PROTOTYPE CHAIN)
// HERANÇA É DEFINIDA EM: __PROTO__
const avo = {atb1: 'A'}
const pai = {__proto__: avo, abt2: 'B'}
const filho = {__proto__: pai, atb3: 'C'}
console.log(filho.atb1)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'Spider',
    velMax: 324 // SHADOWING, SOBRESCREVE O ATRIBUTO DO PAI
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
// setPrototypeOf() DEFINE AS RELAÇÕES DE HERANÇA
// FERRAI É FILHO DE CARRO
Object.setPrototypeOf(ferrari, carro)
// VOLVO É FILHO DE CARRO
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
volvo.acelerar(50)
console.log(volvo.status())



