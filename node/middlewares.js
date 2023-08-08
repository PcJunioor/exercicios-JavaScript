
// middleware pattern (chain of responsability)
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => {
    const execMiddleware = indice =>{
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execMiddleware(indice + 1))
    }
    execMiddleware(0)
}

const contexto1 = {}
const contexto2 = {}
exec(contexto1, passo2, passo1, passo3) 
console.log(contexto1)
exec(contexto2, passo3, passo2, passo1) // como o passo3 não tem a função 'next' se ele não for o último vai interromper a execução
console.log(contexto2)