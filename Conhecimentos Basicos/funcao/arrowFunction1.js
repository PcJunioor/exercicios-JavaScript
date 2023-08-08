let dobro = a => {
    return 2 * a
}

// É UMA FUNÇÃO ANÔNIMA, TEM SEMPRE QUE ARMAZENAR EM UMA VARIÁVEL OU CONST
let mult = (a,b) =>  a * b // RETURN É CHAMADO IMPLICITAMENTE QUANDO É SÓ UMA LINHA

console.log(dobro(Math.PI))
console.log(mult(10, 2))

let ola = () => 'Olá!'

console.log(ola())