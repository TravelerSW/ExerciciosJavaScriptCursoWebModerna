function juros(capitalInicial, taxa, tempo){
           return capitalInicial + (capitalInicial * taxa * tempo)
}
console.log(juros(100, 10/100, 2))