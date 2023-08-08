let cont = 0
for(cont = 1; cont <= 10; cont++){
    console.log('Contador: %d', cont)
}

// USANDO O LET DENTRO DO LAÇO GARANTE A VARIÁVEL APENAS DENTRO DO LAÇO
for (let i = 1; i <= 10; i++){
    console.log('Laço 2: %d', i)
}

const notas = [6.2, 7.4, 8.1, 4.2]

for (let i = 0; i < notas.length; i++){
    console.log('Posição: %d -> %d', i, notas[i])
}