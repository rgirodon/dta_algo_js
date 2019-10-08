/*
// exo 1
function sum(chiffres) {

    let result = 0;

    for (let chiffre of chiffres) {

        result += chiffre;
    }

    return result;
}

function avg(chiffres) {

    let result = sum(chiffres) / chiffres.length;

    return result;
}

let tab = [8, 9, 10];

let output1 = 'Somme = ' + sum(tab);

document.getElementById('output1').textContent = output1;

let output2 = 'Moyenne = ' + avg(tab);

document.getElementById('output2').textContent = output2;
*/


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

function min(chiffres) {

    let min = null;
    
    for (let chiffre of chiffres) {

        if (min == null || chiffre < min) {
        
            min = chiffre;
        }
    }

    return min;
}

let tab = [10, 22, 3, 41, 5];

let output1 = 'Max = ' + max(tab);

document.getElementById('output1').textContent = output1;

let output2 = 'Min = ' + min(tab);

document.getElementById('output2').textContent = output2;

/*
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
*/