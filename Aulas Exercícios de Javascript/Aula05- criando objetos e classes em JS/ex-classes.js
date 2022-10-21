class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        const dataAtual = new Date()
        const currentYear = dataAtual.getFullYear()
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = currentYear - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

function CompararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`)
    }
}
const anaPaula = new pessoa('Ana Paula', 50)
const rafael = new pessoa('Rafael', 31)

CompararPessoas(anaPaula, rafael)
console.log(anaPaula)
console.log(rafael)