let nota1 = 6.0
let nota2 = 8.5
let nota3 = 6.0
let mediaFinal = (nota1 + nota2 + nota3) / 3

if(mediaFinal < 5){
    console.log(`Aluno foi REPROVADO, com média final ${mediaFinal.toFixed(2)}`)
} else if(mediaFinal > 5 && mediaFinal < 7){
    console.log(`Aluno está de RECUPERAÇÃO, com média final ${mediaFinal.toFixed(2)}`)
} else{
    console.log(`Aluno APROVADO, com média final ${mediaFinal.toFixed(2)}`)
}