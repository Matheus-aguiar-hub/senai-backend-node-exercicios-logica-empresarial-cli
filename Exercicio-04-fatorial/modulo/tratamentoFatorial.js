function tratamentoFatorial(fatorial) {

    if (isNaN(fatorial) || fatorial == '') {
        console.log('informe um número.')
        return false
    } else if (fatorial < 0) {
        console.log('Não existe fatorial de número negativo.')
        return false

    } else if (fatorial == 1) {
        console.log('O número precisa ser maior que 1.')
        return false
    }

    return true
}

module.exports  = {
    tratamentoFatorial
}