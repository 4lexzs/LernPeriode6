let input;
let computer;
let randomNummer;
let output;
let count;
let pointsToWin;
let countComputerWin = 0;
let countPlayerWin = 0;

pointsToWin = prompt("Bei wievielen Siegen gewinnt man?");

do {
    input = benutzerEingabe();
    computer = computerAuswahl();

    vergleich();
    count++;
    let out = `${output} Punkte: Du:${countPlayerWin} Computer:${countComputerWin}`;
    document.querySelector("#output").innerHTML = out;
    console.log(out);
} while (anzahlSiegeNichtErreicht());

if (countComputerWin >= pointsToWin) {
    alert("Computer hat gewonnen");
} else {
    alert("Du hast gewonnen");
}


function anzahlSiegeNichtErreicht() {
    return countComputerWin < pointsToWin && countPlayerWin < pointsToWin;
}

function benutzerEingabe() {
    input = prompt("Gib Schere, Stein oder Papier ein");
    return input.toLowerCase();
}

function computerAuswahl(){
    randomNummer = Math.floor(Math.random() * 3) + 1; //Generate Random Nummer between 1 and 3 (inklusive)

    switch (randomNummer) {
        case 1:
            computer = "schere";
            break;
        case 2:
            computer = "stein";
            break;
        case 3:
            computer = "papier";
            break;
    }

   return computer.toLowerCase();
}

function vergleich(){
    if(input === computer){
        output = `Du:${input} Computer: ${computer}=> Unendschieden`;
    }
    if(input === 'schere' && computer === 'stein'){
        output = `Computer: ${computer}=> Verloren`;
        countComputerWin++;
    }
    if(input === 'schere' && computer === 'papier'){
        output = `Computer: ${computer}=> Gewonnen`;
        countPlayerWin++;
    }
    
    if(input === 'stein' && computer === 'papier'){
        output = `Computer: ${computer}=> Gewonnen` ;
        countPlayerWin++;
    }
    
    if(input === 'stein' && computer === 'schere'){
        output = `Computer: ${computer}=> Verlohren`;
        countComputerWin++;
    }
    
    if(input === 'papier' && computer === 'stein'){
        output = `Computer: ${computer}=> Gewonnen`;
        countPlayerWin++;
    }
    
    if(input === 'papier' && computer === "schere"){
        output = `Computer: ${computer}=> Verloren`;
        countComputerWin++;
    }

}