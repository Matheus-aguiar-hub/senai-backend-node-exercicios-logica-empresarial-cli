/****************************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 27/02/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ******************************************************************************/

const readline = require ('readline')

const gerarTabuada = require('./modulo/gerandoTabuada.js')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite a tabuada inicial: ', function(tabuadaInicial){
    let tabuadaComeco = tabuadaInicial

    entradaDados.question('Digite a tabuada final: ', function(tabuadaFinal){
        let tabuadaFim = tabuadaFinal

        if(tabuadaFim > 100){
            console.log('erro')
            return false
        }


        let gerandoTabuada = gerarTabuada.gerandoTabuadaIncial(tabuadaInicial, tabuadaFinal)
 
        })
    })
