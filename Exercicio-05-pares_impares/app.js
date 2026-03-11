/****************************************************************************
 * Objetivo: Criar um sistema que gerencie números pares e ímpares
 * Data: 31/02/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ******************************************************************************/

const readline = require('readline')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const tratamento = require('./modulo/tratamentoNumero')
const calculo = require('./modulo/calculoNumeros')

entradaDados.question('Digite o número inicial: ', function (primeiroNumero){

    entradaDados.question('Digite o número final: ', function (segundoNumero){

        let numeroInicial = Number(primeiroNumero)
        let numeroFinal = Number(segundoNumero)

        const validar = tratamento.tratarNumeros(numeroInicial, numeroFinal)

        if(validar){
            calculo.calcularNumeros(numeroInicial, numeroFinal)
        }

        entradaDados.close()

    })

})