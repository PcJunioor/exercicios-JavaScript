//console.log(global)
// SALVO NO OBJETO GLOBAL, NÃO NECESSITA EXPORTAR
global.meuApp = {
    nome: 'Sistema',
    saudacao(){
        return 'função acessível para todos!!!'
    }
}

global.meuAppFreeze = Object.freeze({
    nome: 'Sistema Congelado',
    saudacao(){
    return 'função acessível para todos!!!'
    }
}) 
    
