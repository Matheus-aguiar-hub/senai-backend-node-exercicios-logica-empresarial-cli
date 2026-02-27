function tratandoPercentual(resultadoInforme){

let resultado = resultadoInforme

if( resultado < 18,5 ){
    console.log('abaixo do peso')
}else if(resultado > 18,5 && resultado < 24,9){
    console.log('peso normal')
}else if(resultado >= 25 && resultado < 29,9 ){
    console.log('acima do peso (sobrepeso)')
}else if(resultado >= 30 && resultado < 34,9){
    console.log('obesidade 1')
}else if(resultado >= 35 && resultado < 39,9){
    console.log('obesidade 2')
}else if(resultado > 40){
    console.log('obesidade 3')
}
}

module.exports = {
    tratandoPercentual
}