// Scrivi una funzione che accetti una stringa come argomento e la ritorni
// girata (es. Ciao -> oaiC)

function rivolto(str){
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    return newString;
}


var parola=prompt("inserisci una parola");

var contrario = rivolto(parola);
console.log(contrario);
