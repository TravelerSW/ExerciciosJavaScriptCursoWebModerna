function fruta(x){
    switch(x){
        case "maçã":
            console.log("Não vendemos essa fruta")
            break;
        case "kiwi":
            console.log("Estamos com escassez de kiwis")
            break;
        case "melancia":
            console.log("Aqui está, são 3 reais o quilo")
            break;
        default:
            console.log("erro")    
    }
}
fruta("pera")