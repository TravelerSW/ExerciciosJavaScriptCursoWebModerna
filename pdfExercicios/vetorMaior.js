function leArray(vetorNumeros){
    let maior 
    let menor 
    for(let i = 0; i < vetorNumeros.length; i++){
        if(maior == undefined && menor == undefined){
            maior = vetorNumeros[i]
            menor = vetorNumeros[i]
    }
        if(vetorNumeros[i]> maior){
            maior = vetorNumeros[i]
        }else if(vetorNumeros[i] < menor ){
            menor = vetorNumeros[i]
        }
    }
    console.log("Menor: " + menor + "\nMaior: " + maior)
}
vetor = [ 7, 14, 41, 57, 20,  8,  10]
leArray(vetor)