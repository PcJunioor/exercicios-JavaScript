const  gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(callback){
    watch('src/**/*.html', () => gulp.series('appHTML')()) // gulp.series('appHTML')() -> invoca a task appHTML sempre que alterar o HTML
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return callback()
}

function servidor(){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, // abrir o browser
            livereload: true // att browser automaticamente
        }))
}

module.exports = {
    monitorarArquivos,
    servidor
}