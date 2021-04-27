/* 
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcolca qunto pesano tutte le zucchine.
*/

//crea array di oggetti zucchine

$(function(){

  zucchine = [
    {
      varieta: "nere di Milano",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "bianche di Trieste",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "nere di Milano",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "nere di Milano",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "striate del centro",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "nere di Milano",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "striate del centro",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "bianche di Trieste",
      peso: 20,
      lunghezza: 35,
    },
    {
      varieta: "bianche di Trieste",
      peso: 25,
      lunghezza: 35,
    },
    {
      varieta: "striate del centro",
      peso: 20,
      lunghezza: 35,
    },
  ]

  var pesoTot = 0;

  //calcola peso delle zucchine
  for (var key in zucchine){
    pesoTot += zucchine[key].peso;
  }

  console.log("Peso totale zucchine " + pesoTot + "g.");


});
