//faccio inserire all'utente i numeri tramite un ciclo for
//tramite un'IF ELSE comparo i due numeri
//SE il primo numero è maggiore al secondo pusho il primo
//ALTRIMENTI metto il secondo numero come primo

let numeri=[]
//inserisco variabile temporanea (metodo bubble sort)
let sort

for(i=0; i<2; i++){
    prompt("inserisci un numero")
    numeri.push(numeri)
}

if(numeri[0]>numeri[1]){
   sort = numeri[0]
   numeri[0] = numeri[1]
   numeri[1] = sort
}

console.log(numeri)
