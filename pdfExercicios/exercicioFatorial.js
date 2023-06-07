let fatorial = 1
let contador = 10
let sequencia = ""
while(contador >= 1 ){
    fatorial = fatorial * contador
    if(contador == 1){
        sequencia += contador
    }else{
        sequencia += contador + " * "
    }contador--
}
console.log(sequencia + " = " + fatorial)