var keuze = 101

function clearHL() {
    let antwoord = document.getElementById("ant");
    if (antwoord == "start") {
        antwoord.value = "start";
    }
    else {
        antwoord.value = "";
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function resetnr() {
    var changetxtbut = document.getElementById("restart_button");
    let nummer = document.getElementById("input");
    let antwoord = document.getElementById("ant");
    randnummer = getRandomInt(keuze);
    console.log(keuze);
    console.log(randnummer);
    antwoord.value = "start"
    nummer.value = "";
    changetxtbut.innerHTML = "restart";
}
function clickbutton() {
    let nummer = document.getElementById("input").value;
    let antwoord = document.getElementById("ant");

    if (nummer < randnummer) {
        antwoord.value = "hoger"
    }
    if (nummer > randnummer) {
        antwoord.value = "lager"
    }
    if (nummer == randnummer) {
        antwoord.value = "Yipeeeee"
    }
}
document.addEventListener('keydown', KEYpressed);

function KEYpressed(e) {
  if (e.key == 'Enter') {
    clickbutton()
  }
  else if (e.key == 'Backspace') {
    clearHL()
  }
}