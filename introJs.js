/*
Découverte du if

// Demande le parfum à l utilisateur
var iceCream = prompt('Qu\'est-ce qu\'il reste comme glace ?');

console.log(iceCream);

// si c est chocolat
if (iceCream == 'chocolat') {

    console.log('Mmmmm du chocolat !');
}
else {
    // sinon
    console.log('Dommage, pas de chocolat !');
}
*/


/*
Découverte des opérateurs de concaténation

var a = '12';

var result = a;

// result = result + a;
result += a;

console.log(result);
*/

/* Sens croissant

var eleves = ['John', 'Marylin', 'Edgar', 'Irina'];

for (var index = 0; index < eleves.length; index++) {

    console.log(eleves[index]);
}
*/

/* Sens décroissant

for (var index = eleves.length - 1; index >= 0; index--) {

    console.log(eleves[index]);
}
*/

/*

function buildMessage(msg1, msg2) {

    var result = prefix + msg1 + ' ' + msg2;

    return result;
}

var prefix = 'Message : ';

var fct1 = function(msg1, msg2) {

    var result = prefix + msg1 + ' ' + msg2;

    return result;
}

var french = fct1('Bonjour', 'France');
console.log(french);

fct1 = function(msg1, msg2) {

    var result = prefix + msg2 + ' ' + msg1;

    return result;
}

var english = fct1('Hello', 'England');
console.log(english);

var italian = fct1('Ciao', 'Italia');
console.log(italian);
*/



var counter = 0;

var spanNbClicks = document.getElementById('nbClicks');

spanNbClicks.textContent = 0;

document.querySelector('h1').onclick = function () {

    counter = counter + 1;

    spanNbClicks.textContent = counter;
};

document.querySelector('h2').onclick = function () {

    counter = counter - 1;

    spanNbClicks.textContent = counter;
};
