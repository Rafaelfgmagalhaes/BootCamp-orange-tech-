/* Faça um programa para calcular o valor de uma viagem:
Você terá 3 variáveis, sendo elas: 1- preço do combustivel; 2- valor médio de gasto do carro por km;
3- distância em km da viagem. Imprima no console o valor que será gasto de combustivel para realizar esta viagem.*/

let precoCombustivel = 5.79
let KmPorLitros = 10
let distEmKm = 100

let valor = distEmKm / KmPorLitros * precoCombustivel
console.log(`o valor da viagem é: ${valor.toFixed(2)}`)