/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */


// INPUT

// genero dei numeri a caso sia per il pc che per l'utente 

let playerNumber = Math.floor((Math.random() * 6 + 1))

console.log(`Hai tirato il dado e il risultato e.. ${playerNumber} !`)


let pcNumber = Math.floor((Math.random() * 6 + 1))

console.log(`Hai tirato il dado e il risultato e... ${pcNumber} !`)


// Elaborazione pongo le condizioni per le varie combinazioni di risultato

if (pcNumber > playerNumber) {

    console.log(`${pcNumber} e maggiore di ${playerNumber}. Ha vinto il pc`)

} else if (pcNumber < playerNumber) {

    console.log(`${pcNumber} e minore di ${playerNumber}. ha vinto il player`)


} else {

    // OUTPUT
    console.log(`Avete tirato entrambi ${playerNumber}. pareggio`)
}

