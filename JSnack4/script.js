/* 
Scrivi una funzione che fonde due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] --> [a,1,b,2,c,3] 
se un array è più lungo si deve fermare perchè non è possibile creare una relazione.
*/

$(function(){

  //inizializzo le variabili
  var letters = ["a", "b", "c"];
  var numbers = [1, 2];
  var merge = [];
  var limit = 0;
  
  //cerco la stringa più corta
  if(letters.length > numbers.length){
    limit = numbers.length;
  }else if(letters.length < numbers.length){
    limit = letters.length;
  }else{
    limit = letters.length
  }

  //creo una nuova stringa che prende alternativamente gli elementi da uno e dall'altro
  for(var i = 0; i < limit; i++){
    merge.push(letters[i]);
    merge.push(numbers[i]);
  }

  //controllo se array vuoti
  if(limit === 0){
    var arr_vuoto;

    //controllo quale array è vuoto
    if(letters.length === 0){
      arr_vuoto = "lettere";
    }else{
      arr_vuoto = "numeri";
    }

    console.log("La lista " + arr_vuoto + " è vuota.")

  }else{
    console.log(merge);
  }

});