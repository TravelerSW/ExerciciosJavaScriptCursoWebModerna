let aprovado = false
function aprovacao(){
    aprovado = true
    console.log("aprovado")
}
function reprovado(){
    aprovado = false
    console.log("reprovado")
}

function notas(nota){
    if(nota<38){
        reprovado()
        console.log(nota) 
    }else if(nota + 3 == nota % 5 == 0){
        nota += 3
        Math.round(nota)
        aprovacao()
        console.log(nota)
    }
}
notas(39)