function calcula(a, b, c){
        let triangulo = " "
        if(a == b || a == c  || b == c){
            triangulo = "isósceles"
        }if(a == b && a == c){
            triangulo = "equilatero"
        } if(a != b && b != c && c!= a){
            triangulo = "Escaleno"
        }
        console.log(triangulo)
}
calcula(10, 9, 4)
