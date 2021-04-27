/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var Nmax = 9;
var Nmin = 0;

$(function(){

  var arr1 = [1, 2, 3, 4];
  var arr2 =[1, 2, 3, 4, 5, 6];
  console.log(randomNum(Nmax, Nmin));

  if(arr1.length < arr2.length){
    arr1 = addElement(arr2, arr1);
  }else if(arr1.length > arr2.length){
    arr2 = addElement(arr1, arr2);
  }

  console.log(arr1);
  console.log(arr2);

});

////////////////////////
/////  FUNZIONI ////////
////////////////////////

function randomNum(max, min){
  return Math.floor(Math.random()* (max - min + 1) + min);
}

//genera lettera Maiuscola random
function randomLetter(){
  var letters = "ABCDEFGHILMNOPQRSTUVYXZ";
  var letter = letters[randomNum((letters.length - 1), 0)];
  return letter;
}

function addElement(targetBig, targetSmall){
  for(var i = targetSmall.length; i < targetBig.length; i++){
    var newNum = randomLetter();
    targetSmall.push(newNum);
  }
  return targetSmall;
}