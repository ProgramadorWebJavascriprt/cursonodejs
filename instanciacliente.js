const contadorA = require('./instanciaunicas')
const contadorB = require('./instanciaunicas')
const contadorC = require('./instancianova')()
const contadorD = require('./instancianova')
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)