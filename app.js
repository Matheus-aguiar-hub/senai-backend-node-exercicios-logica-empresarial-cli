/****************************************************************************
 * Objetivo: calcular IMC de um consultorio de nutrição
 * Data: 27/02/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ******************************************************************************/

const readline = require ('readline')

const calcular = require('./modulo/calcular.js')
const tratamento = require('./modulo/tratamento.js')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o seu peso atual: ', function(peso){
    let pesoInforme = peso

    entradaDados.question('Digite a sua altura: ', function (altura){
        let alturaInforme = altura

        let validar = tratamento.tratandoNomes(alturaInforme, pesoInforme)

        if (!validar) {
            entradaDados.close()
            return false
        }

        let resultado = calcular.calcularImc(alturaInforme, pesoInforme)
        console.log('O seu peso atual é ' + resultado)
    })
})