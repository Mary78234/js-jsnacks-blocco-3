/* Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


$(() => {

  const numAuto = 10;
  const alimAuto = ['benzina', 'diesel', 'gpl', 'elettrico', 'metano'];
  const arr_marca = ['ford', 'fiat', 'ferrari'];
  const arr_modelloFord = ['puma', 'kuga'];
  const arr_modelloFiat = ['panda', '500'];
  const arr_modelloFerrari = ['portofino', 'F8', 'SF90'];
  const macchine = [];

  for (let i = 0; i < numAuto; i++){
    let marca = arr_marca[randomGen((arr_marca.length-1), 0)];
    let modello;
    if(marca === 'ford'){
      modello = arr_modelloFord[randomGen((arr_modelloFord.length-1), 0)];
    }
    if(marca === 'fiat'){
      modello = arr_modelloFiat[randomGen((arr_modelloFiat.length-1), 0)];
    }
    if(marca === 'ferrari'){
      modello = arr_modelloFerrari[randomGen((arr_modelloFerrari.length-1), 0)];
    }

    let alimentazione = alimAuto[randomGen((alimAuto.length-1), 0)];

    macchine.push({
      marca,
      modello,
      alimentazione
    });
  }

  console.log(macchine);

  //array di dieci oggetti
  /* const cars = [
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "benzina"
    },
    { 
      marca: "opel",
      modello: "ggg",
      alimentazione: "benzina"
    },
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "gpl"
    },
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "diesel"
    },
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "diesel"
    },
    { 
      marca: "ford",
      modello: "vorroro",
      alimentazione: "benzina"
    },
    { 
      marca: "opel",
      modello: "BB",
      alimentazione: "metano"
    },
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "benzina"
    },
    { 
      marca: "ford",
      modello: "T",
      alimentazione: "diesel"
    },
    { 
      marca: "fiat",
      modello: "panda",
      alimentazione: "gpl"
    }
  ]; */

  //console.log(cars);
  //dividi in tre array
  let carBenzina = macchine.filter((car) => car.alimentazione === 'benzina');
  console.log(carBenzina);

  let carDiesel = macchine.filter((car) => car.alimentazione === 'diesel');
  console.log(carDiesel);

  let carAltro = macchine.filter((car) => ((car.alimentazione != 'benzina') && (car.alimentazione != 'diesel')));
  console.log(carAltro);

  function randomGen(max, min){
    return Math.floor(Math.random()*(max - min + 1)+ min);
  }

});