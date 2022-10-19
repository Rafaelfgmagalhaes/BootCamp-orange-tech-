let precoGasolina = 5.79
let precoEtanol = 3.50
let KmPorLitros = 10
let distEmKm = 100
let combUtilizado = 'gasolina'

if(combUtilizado == 'gasolina'){
    let valor = distEmKm / KmPorLitros * precoGasolina
    console.log(`O valor da viagem é: ${valor.toFixed(2)}`)
}else if(combUtilizado == 'etanol'){
    let valor = distEmKm / KmPorLitros * precoEtanol
    console.log(`O valor da viagem é: ${valor.toFixed(2)}`)
}