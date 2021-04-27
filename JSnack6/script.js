/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b” */

console.log("ciao");

$(function(){

  var str = "peripezzia";
  var start = 0;
  var end = 3;
  var rst = findList(str, start, end);
  console.log(rst);

  
});

////////////////////////
/////  FUNZIONI ////////
////////////////////////

//funzione che restituisce una lista da X a Y 
function findList(arr, a, b){
  return arr.slice(a, b);
}