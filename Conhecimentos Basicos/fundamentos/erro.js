function tratarErroELancar(erro){
    throw {
        nome: erro.name,
        msg : erro.message,
        date: new Date
    }
    
}

function imprimirNotaGritando(obj){
    try{
        console.log(obj.name.toUpperCase()) + '!!!'
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('finally')        
    }
}
const obj = {nome: 'Paulo'}
imprimirNotaGritando(obj)