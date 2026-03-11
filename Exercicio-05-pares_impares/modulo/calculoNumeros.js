function calcularNumeros(inicio, fim) {

    let contPares = 0
    let contImpares = 0
    let i = inicio

    console.log('\nNúmeros pares:')

    while (i <= fim) {

        if (i % 2 === 0) {
            console.log(i)
            contPares++
        }

        i++
    }

    console.log('Quantidade de pares:', contPares)

    i = inicio

    console.log('\nNúmeros ímpares:')

    while (i <= fim) {

        if (i % 2 !== 0) {
            console.log(i)
            contImpares++
        }

        i++
    }

    console.log('Quantidade de ímpares:', contImpares)

}

module.exports = {
    calcularNumeros
}