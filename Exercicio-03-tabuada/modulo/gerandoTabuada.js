const calcularTabuada = require('./calculandoTabuada')

const gerandoTabuadaIncial = (inicio, fim) =>{

    let cont = 2
    let resultado

    while (cont <= fim) {

        resultado = calcularTabuada.multiplicar(inicio, cont)
        console.log(`${inicio} x ${cont} = ${resultado}`)
    
        cont +=1
    }

}

module.exports = {
    gerandoTabuadaIncial
}