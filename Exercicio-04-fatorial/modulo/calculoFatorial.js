function calculandoFatorial(fatorial) {

    if (fatorial == 0 || fatorial == 1) return 1

    let cont = 1
    let numeroFatorial = 1
    let resultado

    while (cont <= fatorial) {

        resultado = numeroFatorial *= cont
        cont++

    }

    return numeroFatorial
}

module.exports = {
    calculandoFatorial,

}