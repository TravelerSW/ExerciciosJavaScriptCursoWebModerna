function leArray(vetorNumeros){
    let intervalo = 0
    let foraIntervalo = 0
    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] >= 10 && vetorNumeros[i]<= 20 ){
            intervalo++
    }   else[
            foraIntervalo++
    ]
       
    }
    console.log("Entre 10 e 20: " + intervalo + "\nNão estão entre 10 e 20: " + foraIntervalo)
}
vetor = [ 7, 14, 41, 57, 20,  8,  10, 58, 20, 90, 15, 19, 6, 1 ]
leArray(vetor)