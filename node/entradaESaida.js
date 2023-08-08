const anonimo = process.argv.indexOf('-a') !== -1

if(anonimo){
    process.stdout.write('Anônimo true!\n')
    console.log('Log...')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        console.log(nome)
        process.stdout.write(`Olá ${nome}!!`)
        process.exit()
    })
}