function tabuada(){
    let num = 7
    let cont = 0

    for(cont = 0; cont <= 10; cont++){
        let res = num * cont
        console.log(` ${num} X ${cont} = ${res}`)
    }
}

 
console.log(tabuada())