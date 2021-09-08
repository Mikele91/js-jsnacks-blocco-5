// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function myfunction(list, a, b){
var newList =[];
for(var i = a; i < b-1; i++){
    newList.push(list[i]);
    
}
console.log(newList);
return newList;
}





var lista= [1, 2, 3, 4, 5, 6, 7];

console.log(myfunction(lista, 1, 7));