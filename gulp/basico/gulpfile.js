const gulp = require('gulp')
//const series = gulp.series
const {series, parallel} = require('gulp') // outra forma usando destructing

const antes1 = callback => {
    console.log('Tarefa antes 1')
    return callback()
}
const antes2 = callback => {
    console.log('Tarefa antes 2')
    return callback()
}
const fim = callback => {
    console.log('Tarefa fim')
    return callback()
}

function copiar(callback){

    
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //selecionar quais arquivos como entrada para o workflow
    gulp.src('pastaA/**/*.txt') // copiar todos os arquivos '.txt'
        .pipe(gulp.dest('pastaB')) // aplicar transformações nos arquivos de entrada, no caso 'gulp.dest' é o destino
        //.pipe('Pode encadear com outras pipes')
    return callback() //notificar o gulp que a tarefa foi concluída
}


// executando em série
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
    )