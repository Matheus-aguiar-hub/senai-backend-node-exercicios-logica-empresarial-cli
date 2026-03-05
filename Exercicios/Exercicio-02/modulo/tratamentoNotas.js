function tratamentoValorMinMax(notaAluno1, notaAluno2, notaAluno3, notaAluno4) {
    let nota1 = Number(notaAluno1)
    let nota2 = Number(notaAluno2)
    let nota3 = Number(notaAluno3)
    let nota4 = Number(notaAluno4)

    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('Erro nota menor que 0')
        return false
    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('Erro nota maior 100')
        return false
    } else {
        return true
    }
}

function tratamentoVazio(nomeAluno, nomeProfessor, sexoProfessor, SexoAluno, nomeCurso, nomeDisciplina, notaAluno1, notaAluno2, notaAluno3, notaAluno4) {
    if (nomeAluno == '' || nomeProfessor == '' || sexoProfessor == '' || SexoAluno == '' || nomeCurso == '' || nomeDisciplina == '' || notaAluno1 == '' || notaAluno2 == '' || notaAluno3 == '' || notaAluno4 == '') {

        console.log('Erro caixa de texto vazio')
        return false
    } else {
        return true
    }
}

function tratamentoNome(sexoProfessor, sexoAluno) {
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
}

module.exports = {
    tratamentoValorMinMax,
    tratamentoVazio,
    tratamentoNome
}
