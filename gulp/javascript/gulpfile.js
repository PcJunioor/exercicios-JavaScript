const {series} = require('gulp') // pega o atributo 'series' dentro do gulp (usando destructing)
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


// chamado de 'task(tarefa)'
function transformacaoJS(){
    // chamado de workflow
    return gulp.src('src/**/*.js') // qualquer subbasta que estiver dentro de src e pega todos os arquivos .js
        .pipe(babel({ // converter o código o mais compatível possível com o browser
            comments: false, // comentários não vão para produção
            presets: ["env"] // pega o js mais novo possível
        }))
        .pipe(uglify()) // converte o código para ser minificado
        .on('error', err => console.log(err)) // quando acontecer um determinado evento(error)
        .pipe(concat('codigo.min.js')) // pega os arquivos compilados usando babel e uglify e concatena com o parâmetro
        .pipe(gulp.dest('build/js')) // seta como destino a pasta src/build
}

function fim(callback){
    console.log('Fim...')
    return callback()
}

exports.default = series(transformacaoJS, fim)
