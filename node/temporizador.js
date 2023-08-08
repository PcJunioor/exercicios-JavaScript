const schedule = require('node-schedule')
// a cada segundo, ignora o minuto, as 11h, ignora o dia do mes e o mes, na segunda feira
const tarefa1 = schedule.scheduleJob('*/1 * 12 * * 1', function(){
    console.log('Executando tarefa 1...', new Date().getSeconds())
}) 

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando a tarefa 1!')
}, 20000)

// CRIAR UMA REGRA DE EXECUÇÃO DE RECORRÊNCIA
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // de segunda a sexta
regra.hour = 12
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!...', new Date().getSeconds())
})