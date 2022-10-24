class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura){

        const imc = this.peso / (this.altura * this.altura)

        if(imc < 18.5){
            return `Meu nome é ${this.nome}, e meu IMC é: ${imc.toFixed(2)}, estou abaixo do meu peso ideal.`
        } else if(imc >= 18.5 && imc <= 25){
            return `Meu nome é ${this.nome}, e meu IMC é: ${imc.toFixed(2)}, estou no meu peso ideal.` 
        } else if(imc > 25 && imc <= 30){
            return `Meu nome é ${this.nome}, e meu IMC é: ${imc.toFixed(2)}, estou  acima do meu peso ideal.`
        } else if(imc > 30 && imc <= 40){
            return `Meu nome é ${this.nome}, e meu IMC é: ${imc.toFixed(2)}, estou com obesidade.`
        } else {
            return `Meu nome é ${this.nome}, e meu IMC é: ${imc.toFixed(2)}, estou com obesidade grave.`
        }
 
    }
}

let jose = new Pessoa('José', 70, 1.75)
console.log(jose.calcularImc())