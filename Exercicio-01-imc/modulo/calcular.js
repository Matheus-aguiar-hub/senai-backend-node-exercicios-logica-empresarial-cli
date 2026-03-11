function calcularImc(alturaSoma, pesoSoma) {
    let alturaInforme = Number(alturaSoma)
    let pesoInforme = Number(pesoSoma)

    let calculo = pesoInforme / (alturaInforme * alturaInforme)

    if (calculo < 18.5) console.log('abaixo do peso')

    else if (calculo > 18.5 && calculo < 24.9) console.log('peso normal')

    else if (calculo >= 25 && calculo < 29.9) console.log('acima do peso (sobrepeso)')

    else if (calculo >= 30 && calculo < 34.9) console.log('obesidade 1')

    else if (calculo >= 35 && calculo < 39.9) console.log('obesidade 2')

    else console.log('obesidade 3')

    return Number(calculo.toFixed(2))

}

module.exports = {
    calcularImc
}