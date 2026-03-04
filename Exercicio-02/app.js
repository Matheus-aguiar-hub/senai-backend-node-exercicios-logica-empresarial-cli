/****************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 03/03/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0.1
 ******************************************************************************/

const readline = require('readline')

const tratamento = require('./modulo/TratamentoNotas.js')
const calculo = require('./modulo/calculoNotas.js')

const entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o nome do aluno: ', function (nomeAlunos) {
    let nomeAluno = nomeAlunos

    entradaDados.question('Digite o nome do professor: ', function (nomeProfessores) {
        let nomeProfessor = nomeProfessores

        entradaDados.question('Digite o sexo do professor: ', function (SexoProfessores) {
            let sexoProfessor = SexoProfessores

            entradaDados.question('Digite o sexo do aluno: ', function (SexoAlunos) {
                let SexoAluno = SexoAlunos

                entradaDados.question('Digite o nome do curso: ', function (nomeCursos) {
                    let nomeCurso = nomeCursos

                    entradaDados.question('Digite o nome da disciplina: ', function (nomeDisciplinas) {
                        let nomeDisciplina = nomeDisciplinas

                        entradaDados.question('Digite o valor da primeira nota: ', function (nota1) {
                            let notaAluno1 = Number(nota1)

                            entradaDados.question('Digite o valor da segunda nota: ', function (nota2) {
                                let notaAluno2 = nota2

                                entradaDados.question('Digite o valor da terceira nota: ', function (nota3) {
                                    let notaAluno3 = nota3

                                    entradaDados.question('Digite o valor da quarta nota: ', function (nota4) {
                                        let notaAluno4 = nota4

                                        let validando = tratamento.tratamentoValorMinMax(notaAluno1, notaAluno2, notaAluno3, notaAluno4)
                                        let validandoVazio = tratamento.tratamentoVazio(nomeAluno, nomeProfessor, sexoProfessor, SexoAluno, nomeCurso, nomeDisciplina)

                                        if (!validando && !validandoVazio) {
                                            console.log('Erro')
                                            entradaDados.close()
                                            return false
                                        }

                                        let calcular = calculo.calculoMedia(notaAluno1, notaAluno2, notaAluno3, notaAluno4)

                                        if (calcular > 50 && calcular < 69) {
                                            console.log('Próxima nota do exame')
                                            notasExame(calcular)
                                        }
                                    
                                        else if (calcular > 70) console.log('aprovado')
                                    
                                        else if (calcular < 50) console.log('reprovado')
                                       
                                        
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})

const notasExame = (calcular) => {

    entradaDados.question('Digite o valor da primeira nota do exame: ', function (notaExa) {
        let notaExame = Number(notaExa)

        const calculoExame = (notaExame + calcular) / 2

        if (calculoExame > 60) {
            console.log(relatorioAluno(calculoExame))
        } else {
            console.log(relatorioAluno(calculoExame))
        }
        return Number(calculoExame.toFixed(2))

    })
}