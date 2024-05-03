'use strict'

// SNACK 2

/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const word1 = prompt('Inserisci la prima parola');
const word2 = prompt('Inserisci la seconda parola');

if (word1.length < word2.length) {
    console.log(word1, word2);
} else if (word2.length < word1.length) {
    console.log(word2, word1);
} else {
    console.log(word1, word2);
}