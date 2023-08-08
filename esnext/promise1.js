let p = new Promise(function(cumpriPromessa){
    cumpriPromessa(['Ana', 'Bia', 'Carlos'])
})


p.then(valor => console.log(valor))