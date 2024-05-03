'use strict'

// Snack 9

const nMaxIndex = 10;
let sum = 0;

// Chiedi per 10 volte all’utente di inserire un numero
for (let i = 1; i <= nMaxIndex; i++) {
    sum += i;
}

// Stampa in console la somma e la media.
console.log(`La somma dei primi ${nMaxIndex} numeri è ${sum} e la media è ${sum / nMaxIndex}`);