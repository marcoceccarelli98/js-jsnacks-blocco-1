'use strict'

// Snack 5

// Crea un array vuoto.
const oddNumbers = [];

// Chiedi per 6 volte all’utente di inserire un numero
for (let i = 0; i < 6; i++) {
    const num = Number(prompt(`Inserisci il ${i + 1}° numero`));
    if (!isNaN(num)) {
        // Se è dispari inseriscilo nell’array.
        if (num % 2 === 1) {
            oddNumbers.push(num);
        }
    } else {
        //Se il valore non è corretto reinserisci il numero
        console.log('Non hai inserito un valore corretto.');
        i--;
    }
}

// Stampa in console l'array risultante.
console.log(oddNumbers);
