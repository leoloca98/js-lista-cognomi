/*

Consegna:
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
3. stampa la lista ordinata alfabeticamente sia in console che in pagina
4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

*/

// *Variabili
var listElement = document.getElementById("lastName-List");
var listItems = "";
var message = "Inserisci il tuo cognome: ";

// *Creiamo un array contenente altri cognomi
var vettLastName = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// *Chiediamo il cognome all'utente
var userLastName;

// *Validazione (controllare se viene inserito un qualcosa, e non null/undefined...)
// *Trasformo in minuscolo il cognome che inserirà
do {
    userLastName = prompt(message);
} while (!userLastName || userLastName.trim() === "");

// *Faccio il capitalize tagliando e uppercasendo la prima lettera della parola
userLastName = userLastName.toLowerCase().trim();
var userLastNameCapitalized = userLastName.charAt().toUpperCase() + userLastName.slice(1);

// * Pusho il cognome alla fine dell'array
vettLastName.push(userLastNameCapitalized);

// * Ordino alfabeticamente la lista di cognomi(compreso quello inserito dall'utente)
vettLastName.sort();

// *Stampo la lista ordinata alfabeticamente
var i = 0;
// var position;
var position = vettLastName.indexOf(userLastNameCapitalized) + 1;

/*
for (i = 0; i < 6; i++) {
    if (userLastNameCapitalized === vettLastName[i]) {
        position = i + 1;
    }
    listItems += "<li>" + vettLastName[i] + "</li>";
}*/
for (i = 0; i < vettLastName.length; i++) {
    listItems += "<li>" + vettLastName[i] + "</li>";
}

console.table(vettLastName);

// *Stampo la posizione dell'ultimo elemento aggiunto (il cognome dell'utente)
// console.log("Il cognome dell'utente si trova in posizione :" + position);
// listItems += "Il cognome dell'utente si trova in posizione :" + position;
console.log("Il cognome dell'utente si trova in posizione: " + position);
listItems += "Il cognome dell'utente si trova in posizione :" + position;


listElement.innerHTML = listItems;



