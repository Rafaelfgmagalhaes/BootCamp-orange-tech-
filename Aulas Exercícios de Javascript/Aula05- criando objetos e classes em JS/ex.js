const pessoa = {
    nome: 'Fulando da silva',
    idade: 25,
    sexo: 'masculino',
    peso: 75,

    descrever: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos, sou do sexo ${this.sexo}, e peso ${this.peso}KG`);
    }
};

pessoa.descrever();

