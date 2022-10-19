let peso = 70
let altura = 1.70
let IMC = peso / (altura * altura)

if(IMC < 18.5){
    console.log(`Você está abaixo do peso ideal, seu IMC é ${IMC.toFixed(2)}`)
} else if(IMC >= 18.5 && IMC <= 25){
    console.log(`Você está em seu peso ideal, seu IMC é ${IMC.toFixed(2)}`)
} else if(IMC > 25 && IMC <= 30){
    console.log(`Você está acima de seu peso ideal, seu IMC é ${IMC.toFixed(2)}`)
} else if(IMC > 30 && IMC <= 40){
    console.log(`Você está obeso, seu IMC é ${IMC.toFixed(2)}`)
} else {
    console.log(`você está com obesidade grave, seu IMC é ${IMC.toFixed(2)}`)
}