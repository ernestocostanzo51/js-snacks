let parola_1 = prompt("inserisci la prima parola")
let parola_2 = prompt("inserisci la seconda parola")


if(parola_1.length>parola_2.length){
    console.log("la prima parola è quella più grande", parola_1)
}
else if(parola_2.length>parola_1.length){
    console.log("la seconda parola è quella più grande", parola_2)

}
else{
    console.log("le parole inserite sono di uguale lunghezza", parola_1, parola_2)
}