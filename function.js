/*
// exo 1
function sum(chiffres) {

    let result = 0;

    for (let chiffre of chiffres) {

        result += chiffre;
    }

    return result;
}

let output = 'Somme = ' + sum([1, 2, 3, 4, 5]);

document.getElementById('output').textContent = output;
*/

/*
// exo 2
function max(chiffres) {

    let max = null;

    for (let chiffre of chiffres) {

        if (max == null || chiffre > max) {
        
            max = chiffre;
        }
    }

    return max;
}

let output = 'Max = ' + max([1, 2, 3, 4, 5]);

document.getElementById('output').textContent = output;
*/


// exo 3
function customFunction(param1, param2) {

    let result = 1;

    if (param1 >= param2) {

        result = param1;
    }

    return result;
}

let output = 'Custom = ' + customFunction(100, 20);

document.getElementById('output').textContent = output;