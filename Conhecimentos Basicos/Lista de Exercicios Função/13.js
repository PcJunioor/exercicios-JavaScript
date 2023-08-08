function verificaDia(numero){
    switch(numero){
        case 1: return "Domingo - Não é dia útil"
        case 2: return "Segunda - é dia útil"
        case 3: return "Terça - é dia útil"
        case 4: return "Quarta - é dia útil"
        case 5: return "Quinta - é dia útil"
        case 6: return "Sexta - é dia útil"
        case 7: return "Sábado - é dia útil"

        default: return "Dia inválido"
    }
}
console.log(verificaDia(6))