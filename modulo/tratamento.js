function tratandoNomes(peso, altura) {
    if (peso == "" || isNaN(peso) || altura == "" || isNaN(altura)) return false

    else return true

}

module.exports = {
    tratandoNomes
}