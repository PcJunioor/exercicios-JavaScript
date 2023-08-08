const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in nums){
    if (i ==5){
        break
    }
    console.log(`${i} = ${nums[i]}`)
}
// CONTINUE : PARA A REPETIÇÃO ATUAL E PULA PRA PRÓXIMA, NO CASO PULA O ÍNDICE 5
for(let i in nums){
    if(i == 5){
        continue
    }
    console.log(`${i} = ${nums[i]}`)
}
// FOR DENTRO DO OUTRO CRIA UM RÓTULO NO CASO EXTERNO
externo: for(let i in nums){
    for(let j in nums){
        if(i == 2 && j == 3){
            break externo
        }
        console.log(`PAR: ${i}, ${j} `)
    }
}


