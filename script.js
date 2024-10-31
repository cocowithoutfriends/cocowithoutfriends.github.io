var vitesse, ouverture, iso; // Définition des variables vitesse, ouverture et iso

var select1 = document.getElementById('valeurVitesse'); // Récupération de la choisie dans la page 3 pour la vitesse
select1.addEventListener('change', function() { // Quand la valeur de la vitesse change la fonction s'exécute
    var testVitesse = select1.value; // Récupération de la valeur choisie
    if (testVitesse == "1/250") {       // Si la valeur choisie est 1/250 alors la variable vitesse est true
        vitesse = true;
    } else if (testVitesse == "1/2000") { // Si la valeur choisie est 1/2000 alors la variable vitesse est false
        vitesse = false;
    }
});

var select2 = document.getElementById('valeurF'); // Récupération de la choisie dans la page 3 pour l'ouverture
select2.addEventListener('change', function() { // Quand la valeur de l'ouverture change la fonction s'exécute
    var testF = select2.value; // Récupération de la valeur choisie
    if (testF == "F4") {       // Si la valeur choisie est F4 alors la variable ouverture est true
        ouverture = true;
    } else if (testF == "F22") { // Si la valeur choisie est F22 alors la variable ouverture est false
        ouverture = false;
    }
});

var select3 = document.getElementById('valeurIso'); // Récupération de la choisie dans la page 3 pour l'iso
select3.addEventListener('change', function() { // Quand la valeur de l'iso change la fonction s'exécute
    var testIso = select3.value; // Récupération de la valeur choisie
    if (testIso == "ISO100") {    // Si la valeur choisie est ISO100 alors la variable iso est true
        iso = true; 
    } else if (testIso == "ISO3200") { // Si la valeur choisie est ISO3200 alors la variable iso est false
        iso = false;
    }
});

var buttonClick = document.querySelector('button'); // Récupération du bouton de la page 3
buttonClick.addEventListener('click', function() { // Quand le bouton est cliqué la fonction s'exécute
    var imgSimuOffElements = document.getElementsByClassName("imgSimuOff"); // Récupération de toutes les images (cachées) de la page 3
    for (var i = 0; i < imgSimuOffElements.length; i++) { // Pour chaque image de la page 3
        imgSimuOffElements[i].classList.remove('imgSimuOn'); // On enlève la classe imgSimuOn
    }
    switch (vitesse) { // Selon la valeur de la variable vitesse
        case true: // Si vitesse est true
            if (ouverture && iso) { // Si ouverture et iso sont true
                document.getElementById('imgSimuA').classList.add('imgSimuOn'); // On affiche l'image A
            } else if (!ouverture && iso) { // Si ouverture est false et iso est true
                document.getElementById('imgSimuB').classList.add('imgSimuOn'); // On affiche l'image B
            } else if (ouverture && !iso) {     // Si ouverture est true et iso est false
                document.getElementById('imgSimuC').classList.add('imgSimuOn'); // On affiche l'image C
            } else if (!ouverture && !iso) {   // Si ouverture et iso sont false
                document.getElementById('imgSimuD').classList.add('imgSimuOn'); // On affiche l'image D
            }
            break; // Fin du switch
        case false: // Si vitesse est false
            if (ouverture && iso) { // Si ouverture et iso sont true
                document.getElementById('imgSimuE').classList.add('imgSimuOn'); // On affiche l'image E 
            } else if (!ouverture && iso) { // Si ouverture est false et iso est true
                document.getElementById('imgSimuF').classList.add('imgSimuOn'); // On affiche l'image F
            } else if (ouverture && !iso) { // Si ouverture est true et iso est false
                document.getElementById('imgSimuG').classList.add('imgSimuOn'); // On affiche l'image G
            } else if (!ouverture && !iso) { // Si ouverture et iso sont false
                document.getElementById('imgSimuH').classList.add('imgSimuOn'); // On affiche l'image H
            }
            break; // Fin du switch
    }
});
function toggleDiv1() { // Fonction pour afficher ou cacher l'overlay de la div1
    var div1 = document.getElementById('div1-overlay') // Récupération de l'overlay de la div1
    div1.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv2() { // Fonction pour afficher ou cacher l'overlay de la div2
    var div2 = document.getElementById('div2-overlay') // Récupération de l'overlay de la div2
    div2.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv3() { // Fonction pour afficher ou cacher l'overlay de la div3
    var div3 = document.getElementById('div3-overlay') // Récupération de l'overlay de la div3
    div3.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv4() { // Fonction pour afficher ou cacher l'overlay de la div4
    var div4 = document.getElementById('div4-overlay') // Récupération de l'overlay de la div4
    div4.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv5() { // Fonction pour afficher ou cacher l'overlay de la div5
    var div5 = document.getElementById('div5-overlay') // Récupération de l'overlay de la div5
    div5.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv6() { // Fonction pour afficher ou cacher l'overlay de la div6
    var div6 = document.getElementById('div6-overlay') // Récupération de l'overlay de la div6
    div6.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv7() { // Fonction pour afficher ou cacher l'overlay de la div7
    var div7 = document.getElementById('div7-overlay') // Récupération de l'overlay de la div7
    div7.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv8() { // Fonction pour afficher ou cacher l'overlay de la div8
    var div8 = document.getElementById('div8-overlay') // Récupération de l'overlay de la div8
    div8.classList.toggle('open'); // Ajout ou suppression de la classe open
}

function toggleDiv9() { // Fonction pour afficher ou cacher l'overlay de la div9
    var div9 = document.getElementById('div9-overlay') // Récupération de l'overlay de la div9
    div9.classList.toggle('open'); // Ajout ou suppression de la classe open
}