// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Generer frukt";
document.body.appendChild(button);

// Legg til et element for å vise antall epler
const counterDisplay = document.createElement("div");
counterDisplay.style.fontSize = "1.5em";
counterDisplay.style.margin = "10px";
counterDisplay.innerHTML = "Antall epler: 0";
document.body.appendChild(counterDisplay);

let appleCount = 0;

// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", nyFrukt)

function nyFrukt() 
{
    const frukt = document.createElement("div");
    frukt.innerHTML = "🍎"; // Du kan endre dette til forskjellige frukt emojis
    frukt.style.fontSize = "2em";
    frukt.style.position = "absolute";
    frukt.style.left = Math.random() * window.innerWidth + 'px'; // Plasser frukten på en tilfeldig x-posisjon
    frukt.style.top = Math.random() * window.innerHeight + 'px'; // Plasser frukten på en tilfeldig y-posisjon
    document.body.appendChild(frukt);

    appleCount++;
    counterDisplay.innerHTML = "Antall epler: " + appleCount;
 
    // Når frukten klikkes, fjern den fra skjermen
    frukt.addEventListener("click", fjernFrukt)
}

/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    appleCount--; // Decrement the count
    counterDisplay.innerHTML = "Antall epler: " + appleCount;
}