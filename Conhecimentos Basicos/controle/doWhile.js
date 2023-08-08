// IDEAL PARA UM CICLO INDETERMINADO

function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorio(0, 10)
    console.log('Opção foi: %d !!', opcao)
} while (opcao != 0)
