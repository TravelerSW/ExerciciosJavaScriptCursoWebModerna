let bissexto
function ano(x){
    if(x % 4 == 0 ){
        if(x % 100 == 0){
            if(x % 400 == 0){
                bissexto = true
                return bissexto
            } bissexto = false
            return bissexto
        }bissexto = true
        return bissexto
    }
    
}
console.log("bissexto: " + ano(500))
console.log("bissexto: " + ano(600))
console.log("bissexto: " + ano(1700))
console.log("bissexto: " + ano(1800))
console.log("bissexto: " + ano(1900))
console.log("------------------")
console.log("bissexto: " + ano(1988))
console.log("bissexto: " + ano(1992))
console.log("bissexto: " + ano(1996))
console.log("bissexto: " + ano(2000))
console.log("bissexto: " + ano(2016))