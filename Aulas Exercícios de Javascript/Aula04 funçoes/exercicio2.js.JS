

function pgtoDebito(precoProduto){
    precoProduto = precoProduto - ((precoProduto * 10) / 100)
    return 'Você pagou no débito e obteve 10% de desconto, total a pagar: ' + precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function pgtoPix(precoProduto){
    precoProduto = precoProduto - ((precoProduto * 15) / 100)
    return 'Você pagou a vista no PIX e obteve 15% de desconto, total a pagar: ' + precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function parcelado2(precoProduto){
    return 'Você pagou parcelado em 2x, total a pagar: ' + precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + ' em duas parcelas de: ' + (precoProduto / 2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}

function parcelado3(precoProduto){
    precoProduto = precoProduto + ((precoProduto * 10) / 100)
    return 'Você pagou parcelado em 3x, total a pagar: ' + precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + ' em três parcelas de: ' + (precoProduto / 3).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + ' com 10% de juros'
}

function main(){
    const precoProduto = 100
    let pgto = parcelado3(precoProduto)
    console.log(pgto)
}
main();