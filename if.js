// exo 1

let a = parseInt(prompt('1er Nombre ?'));

let b = parseInt(prompt('2nd Nombre ?'));

let outputExo1 = '';

if (a < b) {
    outputExo1 = 'Le 1er nombre est inférieur au 2nd nombre';
}
else {
    outputExo1 = 'Le 1er nombre est supérieur ou égal au 2nd nombre';
}

document.getElementById('outputExo1').textContent = outputExo1;


// exo 2

let age = parseInt(prompt('Quel est votre age ?'));

let outputExo2 = '';

if (age < 13) {
    outputExo2 = 'Allez voir Action Man';
}
else if (age >= 13 && age < 18) {
    outputExo2 = 'Allez voir Matrix';
}
else {
    outputExo2 = 'Allez voir Evil Dead';
}

document.getElementById('outputExo2').textContent = outputExo2;