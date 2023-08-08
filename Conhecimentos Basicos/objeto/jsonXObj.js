// ** QUALQUER TEXTO DENTRO DO JSON TEM QUE ESTAR EM "" **
 
const obj = {
    a: 10,
    b: 3,
    c: 4,
    soma(){
        return a + b + c
    }
}
console.log(obj)
// TRANSFORMAR OBJETO EM JSON
console.log(JSON.stringify(obj))
// GERAR OBJETO A PARTIR DE UM JSON
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
// ATRIBUTOS E UMA STRING TEM QUE FICAR COM ""
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))