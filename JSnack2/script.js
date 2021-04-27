/* 
Crea 10 oggetti che rappresentano una zucchina. 
Dividi in due array separati le zucchine che misurano meno o più di 15 cm. 
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

$(function(){

  var zucchine = [
    {
      varieta: "nere di Milano",
      peso: 20,
      lunghezza: 31,
    },
    {
      varieta: "bianche di Trieste",
      peso: 18,
      lunghezza: 30,
    },
    {
      varieta: "nere di Milano",
      peso: 15,
      lunghezza: 15,
    },
    {
      varieta: "nere di Milano",
      peso: 17,
      lunghezza: 10,
    },
    {
      varieta: "striate del centro",
      peso: 22,
      lunghezza: 8,
    },
    {
      varieta: "nere di Milano",
      peso: 25,
      lunghezza: 15,
    },
    {
      varieta: "striate del centro",
      peso: 16,
      lunghezza: 23,
    },
    {
      varieta: "bianche di Trieste",
      peso: 23,
      lunghezza: 22,
    },
    {
      varieta: "bianche di Trieste",
      peso: 25,
      lunghezza: 13,
    },
    {
      varieta: "striate del centro",
      peso: 22,
      lunghezza: 14,
    },
  ]

  //creo due array in cui smistare le zucchine in base alla lunghezza
  var zucBig = [];
  var zucSmall = [];
  var lungo = 15;
  var pesoBig = 0;
  var pesoSmall = 0;

  //prendo ogni zucchina
  for (var element of zucchine){
    //prendo la lunghezza della zucchina, se più corta di 15 la inserisco nel cestello zucchine piccole, se più lunga nel cestello zucchine grandi
    if(element.lunghezza < lungo){
      zucSmall.push(element);
      pesoSmall += element.peso;
      
    }else{
      zucBig.push(element);
      pesoBig += element.peso;

    }

  }

  
  console.log("Zucchine lunghe almeno 15cm sono " + zucBig.length + " e pesano in totale " + pesoBig + "gr.");
  console.log("Zucchine più corte di 15cm sono " + zucSmall.length + " e pesano in totale " + pesoSmall + "gr.");


});