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
    let nomeAluno = nomeAlunos.toUpperCase()

    entradaDados.question('Digite o nome do professor: ', function (nomeProfessores) {
        let nomeProfessor = nomeProfessores.toUpperCase()

        entradaDados.question('Digite o sexo do professor: ', function (sexoProfessores) {
            let sexoProfessor = sexoProfessores.toUpperCase()

            entradaDados.question('Digite o sexo do aluno: ', function (sexoAlunos) {
                let sexoAluno = sexoAlunos.toUpperCase()

                entradaDados.question('Digite o nome do curso: ', function (nomeCursos) {
                    let nomeCurso = nomeCursos.toUpperCase()

                    entradaDados.question('Digite o nome da disciplina: ', function (nomeDisciplinas) {
                        let nomeDisciplina = nomeDisciplinas.toUpperCase()

                        entradaDados.question('Digite o valor da primeira nota: ', function (nota1) {
                            let notaAluno1 = Number(nota1)

                            entradaDados.question('Digite o valor da segunda nota: ', function (nota2) {
                                let notaAluno2 = Number(nota2)

                                entradaDados.question('Digite o valor da terceira nota: ', function (nota3) {
                                    let notaAluno3 = Number(nota3)

                                    entradaDados.question('Digite o valor da quarta nota: ', function (nota4) {
                                        let notaAluno4 = Number(nota4)

                                        let validando = tratamento.tratamentoValorMinMax(notaAluno1, notaAluno2, notaAluno3, notaAluno4)
                                        let validandoVazio = tratamento.tratamentoVazio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina)

                                        if (!validando && !validandoVazio) {
                                            console.log('Erro')
                                            entradaDados.close()
                                            return false
                                        }

                                        let mediaFinal = calculo.calculoMedia(notaAluno1, notaAluno2, notaAluno3, notaAluno4)

                                        if (sexoProfessor === 'FEMININO') {
                                            sexoProfessor = 'Professora'
                                        } else {
                                            sexoProfessor = 'Professor'
                                        }
                                        if (sexoAluno === 'FEMININO') {
                                            sexoAluno = 'Aluna'
                                        } else {
                                            sexoAluno = 'Aluno'
                                        }

                                        let situacao = ''

                                        if (mediaFinal >= 50 && mediaFinal < 70) {
                                            console.log('Aluno em recuperação')
                                            situacao = 'Recuperação'
                                            notasExame(sexoAluno,
                                                nomeAluno,
                                                nomeDisciplina,
                                                nomeCurso,
                                                sexoProfessor,
                                                nomeProfessor,
                                                notaAluno1,
                                                notaAluno2,
                                                notaAluno3,
                                                notaAluno4,
                                                null,
                                                mediaFinal,
                                                null,
                                                situacao)
                                            return
                                        }

                                        else if (mediaFinal >= 70) {
                                            situacao = 'Aprovado'
                                        }

                                        else if (mediaFinal < 50) {
                                            situacao = 'Reprovado'
                                        }
                                        gerarRelatorio(
                                            sexoAluno,
                                            nomeAluno,
                                            nomeDisciplina,
                                            nomeCurso,
                                            sexoProfessor,
                                            nomeProfessor,
                                            notaAluno1,
                                            notaAluno2,
                                            notaAluno3,
                                            notaAluno4,
                                            null,
                                            mediaFinal,
                                            null,
                                            situacao
                                        )

                                        entradaDados.close()

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

const notasExame = (mediaFinal,
    nomeAluno,
    nomeDisciplina,
    nomeCurso,
    nomeProfessor,
    notaAluno1,
    notaAluno2,
    notaAluno3,
    notaAluno4) => {

    entradaDados.question('Digite o valor da primeira nota do exame: ', function (notaExa) {
        let notaExame = Number(notaExa)

        let mediaExame = calculo.mediaExame(notaExame, mediaFinal)

        let situacaoFinal

        if (mediaExame > 60) {
            situacaoFinal = 'Aprovado em exame'
        } else {
            situacaoFinal = 'Reprovado em exame'
        }

        gerarRelatorio(
            nomeAluno,
            nomeDisciplina,
            nomeCurso,
            nomeProfessor,
            notaAluno1,
            notaAluno2,
            notaAluno3,
            notaAluno4,
            notaExame,
            mediaFinal,
            mediaExame,
            situacaoFinal
        )

        entradaDados.close()
    })
}

const gerarRelatorio = (
    sexoAluno,
    nomeAluno,
    disciplina,
    curso,
    sexoProfessor,
    nomeProfessor,
    nota1,
    nota2,
    nota3,
    nota4,
    notaExame,
    mediaFinal,
    mediaExame,
    situacao
) => {

    console.log(`
         RELATÓRIO DO ALUNO
----------------------------------------
${sexoAluno}: ${nomeAluno}
Disciplina: ${disciplina}
Curso: ${curso}
${sexoProfessor} : ${nomeProfessor}

Notas:
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Nota 4: ${nota4}
Nota do Exame: ${notaExame ?? "Não realizou"}

Média Final: ${mediaFinal.toFixed(2)}
Média Final do Exame: ${mediaExame?.toFixed(2) ?? "Não aplicável"}

Situação: ${situacao}
----------------------------------------
`)
}