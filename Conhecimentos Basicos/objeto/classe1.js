class lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}
class cicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // RECEBE OS LANÇAMENTOS DO TIPO "lancamento" E ADICIONA  O OBJETO NO ARRAY "lancamentos"
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let resultado = ''
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
            resultado += l.nome + ' ----> ' + l.valor + '\n'
        })
        return `${resultado}\n\nTotal: ${valorConsolidado}`
    }
}
const salario = new lancamento('Vencimentos', 50000)
const contaDeLuz = new lancamento('Conta de Luz', -200)
const pagamento = new cicloFinanceiro(6, 2023)

pagamento.addLancamentos(salario, contaDeLuz)

console.log(pagamento.sumario())