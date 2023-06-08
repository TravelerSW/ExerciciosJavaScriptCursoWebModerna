let conceito = []
function aplicaConceitos(notas){
    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 4.9){
            conceito.push(["D"])
        }else if(notas[i] > 5.0 && notas[i] <= 6.9){
            conceito.push(["C"])
        }else if(notas[i] > 6.9 && notas[i] <= 8.9){
            conceito.push(["B"])
        }else if(notas[i] > 8.9 && notas[i] <= 10.0){
            conceito.push(["A"])
        }
    }
    return conceito
}
vetorNotas = [2.2, 3.6, 5.8, 9.7, 7.3]
console.log(aplicaConceitos(vetorNotas))