function valorPlano(idade){
    let custo = 100.00
    if(idade < 10){
        custo += 80.00
    } else if(idade > 10 && idade < 30){
        custo += 50.00    
    }else if(idade > 30 && idade < 60){
        custo += 95.00
    } else{
        custo += 130.00
    }
    console.log("O valor a ser pago é de R$" + custo.toFixed(2).replace("." , ","))
}
valorPlano(76)