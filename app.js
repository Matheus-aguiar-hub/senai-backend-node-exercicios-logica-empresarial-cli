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

    entradaDados.question('Digite a sua altura: ', function(altura){
        let alturaInforme = altura

        let resultado = calcular.calcularImc(alturaInforme, pesoInforme)
    
        console.log('***Calculo*** ***Imc***')
        
        console.log('O seu peso atual é ' + resultado)

        if( resultado < 18.5 ){
            console.log('abaixo do peso')
        }else if(resultado >= 18.5 && resultado < 24.9){
            console.log('peso normal')
        }else if(resultado >= 25 && resultado < 29.9 ){
            console.log('acima do peso (sobrepeso)')
        }else if(resultado >= 30 && resultado < 34.9){
            console.log('obesidade 1')
        }else if(resultado >= 35 && resultado < 39.9){
            console.log('obesidade 2')
        }else if(resultado > 40){
            console.log('obesidade 3')
        }
    })

})