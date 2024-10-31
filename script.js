var vitesse, ouverture, iso;

var select1 = document.getElementById('valeurVitesse');
select1.addEventListener('change', function() {
    var testVitesse = select1.value;
    if (testVitesse == "1/250") {      
        vitesse = true;
    } else if (testVitesse == "1/2000") {
        vitesse = false;
    }
});

var select2 = document.getElementById('valeurF');
select2.addEventListener('change', function() {
    var testF = select2.value;
    if (testF == "F4") {      
        ouverture = true;
    } else if (testF == "F22") {
        ouverture = false;
    }
});

var select3 = document.getElementById('valeurIso');
select3.addEventListener('change', function() {
    var testIso = select3.value;
    if (testIso == "ISO100") {      
        iso = true;
    } else if (testIso == "ISO3200") {
        iso = false;
    }
});

var buttonClick = document.querySelector('button');
buttonClick.addEventListener('click', function() {
    var imgSimuOffElements = document.getElementsByClassName("imgSimuOff");
    for (var i = 0; i < imgSimuOffElements.length; i++) {
        imgSimuOffElements[i].classList.remove('imgSimuOn');
    }
    switch (vitesse) {
        case true:
            if (ouverture && iso) {
                document.getElementById('imgSimuA').classList.add('imgSimuOn');
            } else if (!ouverture && iso) {
                document.getElementById('imgSimuB').classList.add('imgSimuOn');
            } else if (ouverture && !iso) {
                document.getElementById('imgSimuC').classList.add('imgSimuOn');
            } else if (!ouverture && !iso) {
                document.getElementById('imgSimuD').classList.add('imgSimuOn');
            }
            break;
        case false:
            if (ouverture && iso) {
                document.getElementById('imgSimuE').classList.add('imgSimuOn');
            } else if (!ouverture && iso) {
                document.getElementById('imgSimuF').classList.add('imgSimuOn');
            } else if (ouverture && !iso) {
                document.getElementById('imgSimuG').classList.add('imgSimuOn');
            } else if (!ouverture && !iso) {
                document.getElementById('imgSimuH').classList.add('imgSimuOn');
            }
            break;
    }
});
function toggleDiv1() {
    var div1 = document.getElementById('div1-overlay')
    div1.classList.toggle('open');
}

function toggleDiv2() {
    var div2 = document.getElementById('div2-overlay')
    div2.classList.toggle('open');
}

function toggleDiv3() {
    var div3 = document.getElementById('div3-overlay')
    div3.classList.toggle('open');
}

function toggleDiv4() {
    var div4 = document.getElementById('div4-overlay')
    div4.classList.toggle('open');
}

function toggleDiv5() {
    var div5 = document.getElementById('div5-overlay')
    div5.classList.toggle('open');
}

function toggleDiv6() {
    var div6 = document.getElementById('div6-overlay')
    div6.classList.toggle('open');
}

function toggleDiv7() {
    var div7 = document.getElementById('div7-overlay')
    div7.classList.toggle('open');
}

function toggleDiv8() {
    var div8 = document.getElementById('div8-overlay')
    div8.classList.toggle('open');
}

function toggleDiv9() {
    var div9 = document.getElementById('div9-overlay')
    div9.classList.toggle('open');
}