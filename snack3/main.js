'use strict'

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += Number(prompt(`inserisci il ${i} numero`));
}

console.log(sum);