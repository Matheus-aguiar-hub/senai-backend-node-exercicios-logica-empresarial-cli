function tratandoNomes(peso, altura) {
    if (peso == "" || altura == ""  ) {
    console.log('ERRO: Campo está vazio!!!')
    return false
    }

    else if  (isNaN(peso) || isNaN(altura)) {
    console.log('ERRO: Informe um número!!!')
    return false
    }

    else return true

}

module.exports = {
    tratandoNomes
}