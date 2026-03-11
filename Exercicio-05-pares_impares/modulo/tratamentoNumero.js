function tratarNumeros(numeroInicial, numeroFinal) {

    //Tratamento vazio
    if (numeroInicial === '' || numeroFinal === '') {
        console.log('Erro: as entradas não podem ficar vazias.')
        return false
    }

    //Tratamento vazio
    if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('Erro: é obrigatório digitar números.')
        return false
    }

    //Tratamento numero inicial maior que 0 e menor que 500
    if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('Erro: o número inicial deve estar entre 0 e 500.')
        return false
    }

    //Tratamento numero inicial maior que 100 e menor que 1000
    if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('Erro: o número final deve estar entre 100 e 1000.')
        return false
    }

    //Tratamento que numero inicial não pode ser maior que o número final
    if (numeroInicial > numeroFinal) {
        console.log('Erro: o número inicial não pode ser maior que o final.')
        return false
    }

    //Tratamento que numero inicial não pode ser igual ao numero final
    if (numeroInicial === numeroFinal) {
        console.log('Erro: os números não podem ser iguais.')
        return false
    }

    return true
}

module.exports = {
    tratarNumeros
}