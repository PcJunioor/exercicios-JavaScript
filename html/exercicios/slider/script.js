let count = 1
const qtdImgs = 4
document.getElementById('radio1').checked = true

setInterval(function(){
    nextImage()
}, 5000)


function nextImage(){
    count ++
    if(count > qtdImgs){
        count = 1
    }
    document.getElementById('radio' + count).checked = true
}