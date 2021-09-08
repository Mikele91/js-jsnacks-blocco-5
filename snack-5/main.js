// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

function myfunction(list, a, b){
var newList =[];
for(i = 1; i < list.length -1; i++){
    newList.push(list[i]);
}
return newList;
}





var lista= ["ciao", "pippo", "ciccio", 1, 3, 5, 23];

console.log(myfunction(lista));