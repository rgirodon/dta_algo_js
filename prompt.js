// exo 1

let priceHt = prompt('Prix de l\'article ?');

let priceTtc = 1.196 * priceHt;

let outputExo1 = 'Exo1 : Prix TTC = ' + priceTtc;

document.getElementById('outputExo1').textContent = outputExo1;


// exo 2

let prenom = prompt('Prénom ?');

let nom = prompt('Nom ?');

let outputExo2 = 'Exo2 : Bonjour ' + prenom + ', votre nom est ' + nom;

document.getElementById('outputExo2').textContent = outputExo2;