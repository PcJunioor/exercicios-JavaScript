// HERANÇAS EM CLASSES
class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}
class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}
// INSTANCIANDO O OBJETO FILHO QUE HERDARÁ OS ATRIBUTOS DAS CLASSES ACIMA HIERARQUICAMENTE
const filho = new Filho
console.log(filho)