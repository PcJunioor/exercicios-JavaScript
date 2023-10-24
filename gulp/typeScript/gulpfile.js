const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript') // plugin que integra o gulp com o typescript
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src()
        .pipe(tsProject()) //responsável pelo processo de compilação
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)
