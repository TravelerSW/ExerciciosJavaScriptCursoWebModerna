function leArray(vetorNumeros){
    let positivos = 0
    let negativos = 0
    let media = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 0 ){
            positivos++
    }   else{
            negativos++
    }
    media += vetorNumeros[i] / vetorNumeros.length
       
    }
    console.log("Positivos: " + positivos + "\nNegativos: " + negativos + "\nMédia: " + media.toFixed(2))
}
vetor = [ 7, 14, 41, 57, 20,  8,  10, 58, 20, 90, 15, 19, 6, 1, 0 ]
leArray(vetor)