// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var listaZucchine=[
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 20
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 20
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 20
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 20
    },
    {
        "varieta": "verde",
        "peso" : 2,
        "lunghezza": 20
    },
    {
        "varieta": "verde",
        "peso" : 1,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 1,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 1,
        "lunghezza": 10
    },
    {                     
        "varieta": "verde",
        "peso" : 1,
        "lunghezza": 10
    },
    {
        "varieta": "verde",
        "peso" : 1,
        "lunghezza": 10
    }
];

zucchineMaj = [];
zucchineMin = [];

for(var i = 0; i<listaZucchine.length; i++){

    if( (listaZucchine[i]["lunghezza"] < 15)){
        zucchineMin.push(listaZucchine[i]) ;  
    } else{
        zucchineMaj.push(listaZucchine[i])
    }
}

console.log(zucchineMaj);
console.log(zucchineMin);

    


var peso1 = 0;
for( var i = 0; i<zucchineMaj.length; i++){
    peso1 +=(zucchineMaj[i]["peso"]);
}
var peso2 = 0;
for( var i = 0; i<zucchineMin.length; i++){
    peso2 +=(zucchineMin[i]["peso"]);
}
console.log("il peso totale delle zucchine più lunghe è",peso1, "kg");
console.log(`il peso totale delle zucchine più corte è ${peso2} kg`);
