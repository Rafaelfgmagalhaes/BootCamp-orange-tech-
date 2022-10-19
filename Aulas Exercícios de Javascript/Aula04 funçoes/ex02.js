function main(){
    const peso = 75
    const altura = 1.75
    const imc = calcularImc(peso, altura)
    console.log(classificarImc(imc))
}

function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc){
    if(imc < 18.5){
        return `Você está abaixo do peso ideal, seu IMC é ${imc.toFixed(2)}`
    } else if(imc >= 18.5 && imc <= 25){
        return `Você está em seu peso ideal, seu IMC é ${imc.toFixed(2)}`
    } else if(imc > 25 && imc <= 30){
        return `Você está acima de seu peso ideal, seu IMC é ${imc.toFixed(2)}`
    } else if(imc > 30 && imc <= 40){
        return `Você está obeso, seu IMC é ${imc.toFixed(2)}`
    } else {
        return `você está com obesidade grave, seu IMC é ${imc.toFixed(2)}`
    }
}

main();