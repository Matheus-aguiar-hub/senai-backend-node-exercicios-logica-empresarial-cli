const readline = require('readline')

const loopFatorial = require('./modulo/calculoFatorial')
const tratamento = require('./modulo/tratamentoFatorial')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Informe o número fatorial: ', function (numero) {

    let numeroFatorial = Number(numero)

    const validar = tratamento.tratamentoFatorial(numeroFatorial)

    if (validar) {
        let resultado = loopFatorial.calculandoFatorial(numeroFatorial)
        console.log('Fatorial: ' + resultado.toFixed(0))
    }

    entradaDados.close()
})