const gerarRelatorio = (
    nome,
    disciplina,
    curso,
    professor,
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
Aluno: ${nome}
Disciplina: ${disciplina}
Curso: ${curso}
Professor: ${professor}

Notas:
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}
Nota 4: ${nota4}
Nota do Exame: ${notaExame ?? "Não realizou"}

Média Final: ${mediaFinal.toFixed(2)}
Média Final do Exame: ${mediaExame ? mediaExame.toFixed(2) : "Não aplicável"}

Situação: ${situacao}
----------------------------------------
`)
}

module.exports = {
    gerarRelatorio,
}