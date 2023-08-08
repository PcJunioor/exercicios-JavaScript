// mulher chinesa com menor salário
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtroPais = f => f.pais == 'China'
const filtroGenero = f => f.genero == 'F'
const menorSalario = (funcionario, funcionarioAtual) =>{
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    const funcionarioResposta = funcionarios.filter(filtroPais).filter(filtroGenero).reduce(menorSalario)
    console.log(funcionarioResposta)
})

/* ALGUNS COMANDOS NO TERMINAL (rodar na pasta que for executar)
    - npm start  - "start" é o nome do script definido no package.json
    - npm i -g nodemon  - instalar nodemon fora do pacote
    - nodemon "nomeDoArquivo.js" - executa sem interromper, e ao atualizar o código a aplicação reinicia
    - npm init -y (cria um novo pacote com a informação package.json)
    - npm i --save axios - instala a dependência axios e salva no package.json
    - npm i --save-dev axios - dev é necessário somente no desenvolvimento, não na produção
    - npm run dev 
        ('dev' é o nome do script definido em package.json, com nomes que não são padrão, como o start, tem que colocar 'run' antes)
*/