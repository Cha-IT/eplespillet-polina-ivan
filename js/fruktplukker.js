const fruits = ["🍎", "🍌", "🍒", "🍇", "🍉"];
// Først, opprett en knapp for å generere fruktene
const button = document.createElement("button");
button.innerHTML = "Spinn!";
document.body.appendChild(button);

const squares = [];
for (let i = 0; i < 3; i++) {
    const square = document.createElement("div");
    square.style.display = "inline-block";
    square.style.fontSize = "3em";
    square.style.width = "80px";
    square.style.height = "80px";
    square.style.margin = "10px";
    square.style.textAlign = "center";
    square.style.verticalAlign = "middle";
    square.style.border = "2px solid #333";
    square.style.background = "#fff";
    squares.push(square);
    document.body.appendChild(square);
}

const resultDisplay = document.createElement("div");
resultDisplay.style.fontSize = "1.5em";
resultDisplay.style.marginTop = "20px";
document.body.appendChild(resultDisplay);

// Når knappen klikkes, generer en ny frukt
button.addEventListener("click", spin);

function spin() {
    const result = [];
    for (let i = 0; i < 3; i++) {
        const fruit = fruits[Math.floor(Math.random() * fruits.length)];
        squares[i].innerHTML = fruit;
        result.push(fruit);
    }
    if (result[0] === result[1] && result[1] === result[2]) {
        resultDisplay.innerHTML = "Du vant! 🎉";
        resultDisplay.style.color = "green";
    } else {
        resultDisplay.innerHTML = "Du tapte! 😢";
        resultDisplay.style.color = "red";
    }
}

/* Legg merke til bokstaven e inne i parentesen på linja under. 
Dette betyr at vi sender informasjon om hendelsen (event) som trigget funksjonen inn i funksjonen. e kalles hendelses-objektet */
function fjernFrukt(e)
{
    document.body.removeChild(e.target); 
    //e.target er det elementet som trigget hendelsen, det vil si elementet vi klikket på for å aktivere funksjonen.
}