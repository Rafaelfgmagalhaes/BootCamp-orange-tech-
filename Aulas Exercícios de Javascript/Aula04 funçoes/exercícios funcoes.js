function meuNome(nome){
    console.log(' O meu nome é: ' + nome)
}
//meuNome('Rafael')

function verificarIdade(idade){
    if(idade < 18){
        console.log(`Você tem ${idade} anos, Menor de idade!`)
    } else {
        console.log(`Você tem ${idade} anos, Maior de idade!`)
    }
}

verificarIdade(30)
