console.log(Math.ceil(6.3))
// 
const obj1 = {}
obj1.nome = 'Bola'
obj1['nome'] = 'BOLA'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    // CRIA UM NOVO ATRIBUTO (NO CASO UMA FUNÇÃO) DENTRO DO OBJETO
    this.exec = function (){
        console.log("exec...")
    }
}
const obj2 = new Obj('Paulo')

console.log(obj2)
obj2.exec()

// GERA ERRO, POIS O obj1 NÃO FOI CRIADO DENTRO DA FUNÇÃO Obj, ENTÃO NÃO TEM ACESSO A FUNÇÃO exec
// obj1.exec() 