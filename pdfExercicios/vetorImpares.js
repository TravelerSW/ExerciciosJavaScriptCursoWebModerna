function selecionaImpar(inicio, fim){
    for(let i = inicio; i < fim; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }     
}
selecionaImpar(0, 100)