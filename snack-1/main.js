// Crea un array di 10 oggetti che rappresentano una zucchina, indicando
// per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.


var listaZucchine=[
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {                     
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 10
    }
];

var peso = 0;
for( var i = 0; i<listaZucchine.length; i++){
    peso +=(listaZucchine[i]["peso"]);
}

console.log("il peso totale è",peso, "kg");