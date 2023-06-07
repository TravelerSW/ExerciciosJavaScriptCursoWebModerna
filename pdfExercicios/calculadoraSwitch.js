function calculadora(x, z, y){
    let w 
    switch(z){
        case '+':
            w = x + y
            break;
        case '-':
            w = x - y 
            break;
        case '/':
            w = x / y
            break;
        case '*':
            w = x * y
            break;
        default:
            console.log("invalido")
            break;
    }
    return w
}
console.log(calculadora(10, "s", 2))
