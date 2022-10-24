class Carro {
    marca;
    cor;
    gastoMedio;  // KM por litro

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;   // KM por litro
    }

    culcularValorDoPercurso(distancia, precoCombustivel){
        return distancia / this.gastoMedio * precoCombustivel;
    }
}

let uno = new Carro('fiat','azul', 10)
let palio = new Carro('fiat',' vermelho', 8)
console.log(palio.culcularValorDoPercurso(87, 5).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))


                                               

   