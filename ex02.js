const tabu = (number) =>{
    if (number > 10 || number < 1){
        console.log("Aceitamos numeros somente de 1 a 10")
        return
    }
    for(i= 1; i <=10; i++){
        console.log(`${i} x ${number} = ${i * number}` )
    }
}
  tabu(10)