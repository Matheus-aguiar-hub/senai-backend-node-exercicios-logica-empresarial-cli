function calcularNumeros(inicio, fim) {

    let contPares = 0
    let contImpares = 0
    //Definindo i como variavel de 'inicio'
    let i = inicio

    //Chamando números pares no console
    console.log('\nNúmeros pares:')

    while (i <= fim) {

        //Fazendo com que a variavel 'i' tenha como sobra 2 ou 0 ou seja, tudo que tiver como sobra de 2 ou 0 vai ser par
        if (i % 2 === 0) {
            //Chamando a variavel no console
            console.log(i)
            //Definindo o looping 
            contPares++
        }
        //Mostrando os números em sequencia
        i++
    }

    //Exibi a quantidade de pares
    console.log('Quantidade de pares:', contPares)
    
    i = inicio

    //Chamando números impares no console
    console.log('\nNúmeros ímpares:')

     
    while (i <= fim) {
        //Fazendo com que a variavel 'i' tenha como sobra 2 porém tem que ser diferente de 0, caso isso ocorra retorna impar
        if (i % 2 !== 0) {
            console.log(i)
            contImpares++
        }
        
        i++
    }

    //Exibi a quantidade de impares
    console.log('Quantidade de ímpares:', contImpares)

}

module.exports = {
    calcularNumeros
}