function calcularImc (alturaSoma, pesoSoma){
    let alturaInforme = Number(alturaSoma)
    let pesoInforme = Number(pesoSoma)

    let calculo = pesoInforme / (alturaInforme * alturaInforme)
    return Number(calculo.toFixed(2))
}



module.exports= {
    calcularImc
}