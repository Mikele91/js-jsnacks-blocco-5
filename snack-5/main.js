// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function myfunction(list, a, b){
var newList =[];

var min = 0;
var max = 0;
if(a<= b){
    min= a;
    max =b
}else{
    min= b;
    max =a;
}



while(max> list.length -1) {
    console.log("hai inserito un numero troppo grande");
    max = prompt("inserisci un nuovo numero valido");
}

for(var i = min; i < max ; i++){
    newList.push(list[i]);
    
}
console.log(newList);
return newList;
}



var lista= [1, 2, 3, 4, 5, 6, 7];

console.log(myfunction(lista, 4, 8));