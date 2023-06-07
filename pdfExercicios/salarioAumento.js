function aumento(plano, salarioAtual){
    let aumento
    let salarioAumentado 
    switch(plano){
        case "A":
            aumento = 0.1 * salarioAtual
            salarioAumentado = salarioAtual + aumento
            break;
        case "B":
            aumento = 0.15 * salarioAtual
            salarioAumentado = salarioAtual + aumento
            break;
        case "C":
            aumento = 0.2 * salarioAtual
            salarioAumentado = salarioAtual + aumento
            break;
        
        default:
            console.log("invalido")
            break;
    }
    return salarioAumentado
}
console.log(aumento("C", 1450))