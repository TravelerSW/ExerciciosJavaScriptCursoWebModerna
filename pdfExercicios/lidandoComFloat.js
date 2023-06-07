function flutuante(x){
    return "R$" +  x.toFixed(2).toString().replace(".", ",")
}


console.log(flutuante(0.30000000000000004))