// Scrivi una funzione che fonda due array (aventi lo stesso numero di
//     elementi) prendendo alternativamente gli elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function fusione(lista1, lista2){
    var listaFinale =[];
    for(i = 0; i< lista1.length &&  i<lista2.length; i++ ){
        listaFinale.push(lista1[i]);
        listaFinale.push(lista2[i]);
    }
    
    return listaFinale;
}







var elenco1 = ["a","b","c"];

var elenco2 = [1,2,3];

var stampa = fusione(elenco1, elenco2);

console.log(stampa);