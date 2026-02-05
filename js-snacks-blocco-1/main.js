//faccio inserire all'utente i numeri tramite un ciclo for
//tramite un'IF ELSE comparo i due numeri
//SE il primo numero è maggiore al secondo pusho il primo
//ALTRIMENTI metto il secondo numero come primo

let numero_1= prompt("inserisci il primo numero")
let numero_2 = prompt("inserisci il secondo numero")


if(numero_1>numero_2){
    console.log("il primo numero è il piu grande", numero_1)
}
else if(numero_2>numero_1){
    console.log("il secondo numero è il più grande", numero_2)
}
else{
    console.log("i numeri sono uguali", numero_1, numero_2 )
}



