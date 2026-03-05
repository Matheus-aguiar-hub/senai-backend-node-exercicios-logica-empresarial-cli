// O sistema deverá solicitar as seguintes entradas:
// ● A tabuada inicial e tabuada final a ser calculada;
// ● O número inicial e final do contador da tabuada;

// Requisitos do Sistema
// ● A entrada da tabuada deverá ser entre 2 e 100, não sendo permitido outros
// valores;
// ● Nenhuma entrada de dados deverá ficar sem preenchimento;
// ● O valor até onde será calculada a tabuada deverá ser entre 1 e 50;

const calcularTabuada = require('./calculandoTabuada')

const gerandoTabuadaIncial = (tabuada) =>{
    let tab = Number(tabuada)

    let cont = 2
    let resultado

    while (tabuadaComeco <= tabuadaFinal) {

        resultado = calcularTabuada.calculoTabuada(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    
        cont +=1
    }

}

module.exports = {
    gerandoTabuadaIncial
}