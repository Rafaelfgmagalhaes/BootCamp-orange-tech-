let precoProduto = 100.00
let pgtoDebito = precoProduto - ((precoProduto * 10) / 100)
let pgtoPix = precoProduto - ((precoProduto * 15) / 100)
let parce2vezes = precoProduto
let parce3ouMais = precoProduto + ((precoProduto * 10) / 100)
let formaDePgto = 'pix'

if(formaDePgto == 'debito'){
    console.log(`Pagamento a vista via Débito, você obteve 10% de desconto, valor a pagar: ${pgtoDebito.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}else if(formaDePgto == 'pix'){
    console.log(`Pagamento a vista via PIX, você obteve 15% de desconto, valor a pagar: ${pgtoPix.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}else if(formaDePgto == 'parcelado em 2 vezes'){
    console.log(`Pagamento parcelado em 2x, valor a pagar: ${parce2vezes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em duas parcelas de ${(precoProduto / 2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} sem juros.`)
}else{
    console.log(`Pagamento parcelado em 3x, valor a pagar: ${parce3ouMais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em três parcelas de ${(precoProduto / 3).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} com juros de 10%`)
}


