function cardapio(codigo, quantidade){
    let custo; let total 
    switch(codigo){
        case 100:
            custo = 3.00
            total = custo * quantidade           
            console.log("O total de seu pedido ficou em R$" + total.toFixed(2))
            break;
        case 200:
            custo = 4.00
            total = custo * quantidade
            console.log("O total de seu pedido ficou em R$" + total.toFixed(2))
            break;
        case 300:
            custo = 5.50
            total = custo * quantidade
            console.log("O total de seu pedido ficou em R$" + total.toFixed(2))


    }
}
cardapio(200, 7)