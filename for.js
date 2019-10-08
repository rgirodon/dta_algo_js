/*
// exo 1 - sol 1

let chiffres = [100, 15, 20, 15, 14, 8];

let sum = 0;

for (let index = 0; index < chiffres.length; index++) {

    sum = sum + chiffres[index];
}

let output = 'Somme = ' + sum;

document.getElementById('output').textContent = output;
*/
/*
// exo 1 - sol 2

let chiffres = [10, 15, 20, 15, 14, 8];

let sum = 0;

for (currentChiffre of chiffres) {

    sum = sum + currentChiffre;
}

let output = 'Somme = ' + sum;

document.getElementById('output').textContent = output;
*/
/*
// exo 2

let number = parseInt(prompt('Quel est le nombre d\'élèves ?'));

let notes = [];

for(let index = 0; index < number; index++) {

    let note = parseInt(prompt('Quelle est la note de l\'élève ' + (index + 1) + ' ?'));

    notes[index] = note;
}

let output = 'Notes des élèves : <ul>';

for(let index = 0; index < notes.length; index++) {
    output = output + '<li> Elève ' + (index + 1) + ' : ' + notes[index] + '</li>';
}

output = output + "</ul>";

document.getElementById('output').innerHTML = output;
*/

// exo 3

let number = parseInt(prompt('Quel est le nombre d\'élèves ?'));

let notes = [];

for(let index = 0; index < number; index++) {

    let note = parseInt(prompt('Quelle est la note de l\'élève ' + (index + 1) + ' ?'));

    notes[index] = note;
}

let nbMoyennes = 0;

for(note of notes) {

    if (note >= 5) {
        
        nbMoyennes++;
    }
}

let output = 'Nb élèves au dessus de la moyenne : ' + nbMoyennes;

document.getElementById('output').textContent = output;
