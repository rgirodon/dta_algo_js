/*
// exo 1

let correctAnswer = 7;

let userAnswer = parseInt(prompt('Entrez un nombre entre 0 et 10'));

while (userAnswer != correctAnswer) {

    userAnswer = parseInt(prompt('Faux ! Entrez un nombre entre 0 et 10'));
}

let output = 'Correct ! La bonne réponse était effectivement ' + correctAnswer;

document.getElementById('output').textContent = output;
*/

/*
// exo 2

let number = parseInt(prompt('Entrez un nombre entre 0 et 100'));

let output = '';

while(number >= 0) {

    output = output + number + ' ';

    number = number - 1;
}

document.getElementById('output').textContent = output;
*/


// exo 3

let correctAnswer = 7;

let userAnswer = parseInt(prompt('Entrez un nombre entre 0 et 10'));

while (userAnswer != correctAnswer) {

    let msg = '';

    if (userAnswer < correctAnswer) {
        msg = 'Plus grand !';
    }
    else {
        msg = 'Plus petit !';
    }

    userAnswer = parseInt(prompt(msg + ' Entrez un nombre entre 0 et 10'));
}

let output = 'Correct ! La bonne réponse était effectivement ' + correctAnswer;

document.getElementById('output').textContent = output;