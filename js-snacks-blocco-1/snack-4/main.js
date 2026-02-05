numeri=[]

for(i=0; i<6; i++){
    input = parseInt(prompt("inserisci il numero"))
    if(input % 3 == 0){
        numeri.push(input)
    }
}

console.log(numeri)