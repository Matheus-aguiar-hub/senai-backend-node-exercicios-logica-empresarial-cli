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
    let pesoInforme = tratamento.tratandoNomes(peso)

    entradaDados.question('Digite a sua altura: ', function(altura){
        let alturaInforme = tratamento.tratandoNomes(altura)

        if(alturaInforme == false || pesoInforme == false){
            entradaDados.close()
        }

        let resultado = calcular.calcularImc(alturaInforme, pesoInforme)
    
        console.log('O seu peso atual é ' + resultado)
        console.log

        
    })
})