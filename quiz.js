document.getElementById(`eredmeny`).addEventListener(`click`, adatok);
document.getElementById("ugras").addEventListener("click", odavisz);

let oldal = "főoldal.html"
function adatok() {
    let europa = 0
    let azsia = 0
    let amerika = 0
    let afrika = 0
    let ausztralia = 0

    if (document.getElementById(`a1`).checked) {europa++;
    } else if (document.getElementById(`a2`).checked) {azsia++;
    } else if (document.getElementById(`a3`).checked) {amerika++;
    } else if (document.getElementById(`a4`).checked) {afrika++;
    } else if (document.getElementById(`a5`).checked) {ausztralia++;
    }

    if (document.getElementById(`b`).value<=5) {europa++, ausztralia++ }
    else{ if(document.getElementById(`b`).value>5 && document.getElementById(`b`).value<=7){ausztralia++} else{amerika++, azsia++}}


    if (document.getElementById(`c1`).checked) {europa++;
    } else if (document.getElementById(`c2`).checked) {azsia++;
    } else if (document.getElementById(`c3`).checked) {amerika++;
    } else if (document.getElementById(`c4`).checked) {afrika++;
    } else if (document.getElementById(`c5`).checked) {ausztralia++;
    }

    if (document.getElementById(`d1`).checked) {europa++;
    } else if (document.getElementById(`d2`).checked) {azsia++;
    } else if (document.getElementById(`d3`).checked) {amerika++;
    } else if (document.getElementById(`d4`).checked) {afrika++;
    } else if (document.getElementById(`d5`).checked) {ausztralia++;
    }

    if (document.getElementById(`e1`).checked) {europa++;
    } else if (document.getElementById(`e2`).checked) {azsia++;
    } else if (document.getElementById(`e3`).checked) {amerika++;
    } else if (document.getElementById(`e4`).checked) {afrika++;
    } else if (document.getElementById(`e5`).checked) {ausztralia++;
    }

    if(document.getElementById(`f1`).checked) {alert(`Olaszországból ki lettél tiltva`), amerika++, azsia++}
    else {if(document.getElementById(`f2`).checked){ausztralia++, europa++, afrika++}}

    if (document.getElementById(`g1`).checked) {europa++;
    } else if (document.getElementById(`g2`).checked) {azsia++;
    } else if (document.getElementById(`g3`).checked) {amerika++;
    } else if (document.getElementById(`g4`).checked) {afrika++;
    } else if (document.getElementById(`g5`).checked) {ausztralia++;
    } else if (document.getElementById(`g6`).checked) {europa++;
    } else if (document.getElementById(`g7`).checked) {azsia++;
    } else if (document.getElementById(`g8`).checked) {amerika++;
    } else if (document.getElementById(`g9`).checked) {afrika++;
    } else if (document.getElementById(`g10`).checked) {ausztralia++;
    }
    let legnagyobb = europa;
    let kontinens = "A legmegfelelőbb kontinens számodra európa.";
    oldal="europa.html";
    
    
    if (azsia > legnagyobb) {
        legnagyobb = azsia;
        kontinens = "Az ázsiai menü fog neked a legjobban ízleni.";
        oldal="azsia.html";
    } else if (amerika > legnagyobb) {
        legnagyobb = amerika;
        kontinens = "Az amerikai fogások lesznek a kedvenceid.";
        oldal="amerika.html";
    } else if (afrika > legnagyobb) {
        legnagyobb = afrika;
        kontinens = "Afrikai ízek a legjobbak számodra.";
        oldal= "afrika.html";
    } else if (ausztralia > legnagyobb) {
        legnagyobb = ausztralia;
        kontinens = "Kóstólj bele egy Ausztrál menübe.";
        oldal= "ausztralia.html";
    }
    
   
    document.getElementById("kiiras").innerHTML=kontinens;
    kiiras.style.display = "block";
    ugras.style.display = "block";
    kiiras.scrollIntoView({ behavior: "smooth" });

    
    
    
}


function odavisz() {
    if(confirm("Szeretnél a kontinens receptjéhez ugrani?")){window.location.href = oldal;}
        }

document.getElementById("b").oninput = function () {
    document.getElementById("ertek").innerHTML = this.value;
};