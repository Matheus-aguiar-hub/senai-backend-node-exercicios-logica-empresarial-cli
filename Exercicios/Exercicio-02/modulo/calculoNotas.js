const calculoMedia = (notaAluno1, notaAluno2, notaAluno3, notaAluno4) => {

    let nota1 = Number(notaAluno1)
    let nota2 = Number(notaAluno2)
    let nota3 = Number(notaAluno3)
    let nota4 = Number(notaAluno4)

    const calculo = (nota1 + nota2 + nota3 + nota4) / 4

    return Number(calculo.toFixed(2))
}

const mediaExame = (notaExame, mediaFinal ) => {
    let mediaExameFinal = Number(notaExame)
    let mediaAlunoFinal = Number(mediaFinal)
    
    const mediaExame = (mediaAlunoFinal + mediaExameFinal) / 2
    return Number(mediaExame.toFixed(2))
}

module.exports = {
    calculoMedia,
    mediaExame
}