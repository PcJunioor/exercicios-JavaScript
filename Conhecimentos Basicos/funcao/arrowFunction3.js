let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

let comparaComThisArrow = (param) => console.log(param === this)

comparaComThisArrow(global)
comparaComThisArrow(module.exports) // É O THIS


const obj = {}
comparaComThisArrow = comparaComThisArrow.bind(obj) // O BIND NÃO SOBRESCREVE A ARROWFUNCTION

comparaComThisArrow(module.exports) // A ARROW FUNCTION MANTÉM O CONTEXTO 