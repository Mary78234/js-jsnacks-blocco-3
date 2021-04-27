/* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
la media punti fatti per partita deve essere compresa tra 0 e 50
la percentuale di successo per un tiro da 3 punti deve essere compresa tra 0 e 100 */

//setting array
var arrTeam = [];
var randomCode = "";
var randomPoint = 0;
var randomSuccess = 0;
var limit = 3;
var players = 5;

$(function(){

  //ciclo while finchè non ho creato i codici per tutti i giocatori
  while(players > 0){
    var newCode = generateCode(limit, limit);
    var newMedia = randomNum (50, 0);
    var newSucc = randomNum (100, 0);
    arrTeam.push({
      codice: newCode,
      media: newMedia,
      successo: newSucc
    });
    players--;
  }

  console.log(arrTeam);

});


////////////////////////
/////  FUNZIONI ////////
////////////////////////

//genera numero random
function randomNum(max, min){
  return Math.floor(Math.random()*(max - min +1) + min);
}

//genera lettera Maiuscola random
function randomLetter(){
  var letters = "ABCDEFGHILMNOPQRSTUVYXZ";
  var letter = letters[randomNum((letters.length - 1), 0)];
  return letter;
}

//genera codice casuale con lunghezza definita
function generateCode(maxL, maxN){
  var code = "";
  for (var i = 0; i < maxL; i++){
    code += randomLetter();
  }
  for (var i = 0; i < maxN; i++){
    code += randomNum(9, 0);
  }
  return code;

}