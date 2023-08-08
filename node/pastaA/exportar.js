console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

// IRÁ SOBRESCREVER E IRÁ EXPORTAR SOMENTE 'TRUE' (SÓ EXPORTA O MODULE.EXPORTS, OS OUTROS, THIS.A E EXPORTS.B, SÃO SÓ REFERÊNCIAS)
module.exports = { publico: true}