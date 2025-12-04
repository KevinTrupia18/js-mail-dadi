 /* Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email */


// creo un array con all'interno delle email degli invitati e un prompt per inserire la mail e una variabile userInvited che prima del ciclo sarà falsa 

const listMail = ['bryan@gmail.com','james@gmail.com', 'giacomo@gmail.com' , 'giovanni@gmail.com' , 'giacomo@gmail.com'];

let userInput = (prompt('inserisci la tua email'));

let userInvited = false


for(let i=0; i<listMail.length && userInvited === false; i++) {
    
    if(userInput === listMail[i]) {
        userInvited = true;
    }




}

 