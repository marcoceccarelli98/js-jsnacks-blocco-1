'use strict'

// Snack 8 BONUS

// -chiedi all'utente di inserire un numero di 4 cifre
const num = prompt('Inserisci un numero di 4 cifre');
let sum = 0;

// -controlla se il numero è di 4 cifre
if (!isNaN(Number(num))) {
    if (num.length === 4) { // -se è di 4 cifre
        //     -calcola la somma dei 4 numeri
        for (let i = 0; i < num.length; i++) {
            sum += Number(num[i]);
        }
        //     -stampa il risultato 
        console.log(sum);
    } else {
        // -se non è di 4 cifre stampa un messaggio di errore   
        console.log('Il numero inserito non è di 4 cifre');
    }
} else {
    console.log('Inserisci solo numeri!');
}



