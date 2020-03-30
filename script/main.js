console.log('Js ok');
/**
* CERCARE IN UN ARRAY
**/
// Stabilisco le variabili che mi serviranno
var email = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
var user = prompt('Inserisci il tuo indirizzo e-mail').toLowerCase();
var userFound = false;

// Controllo che l'email inserita dall'utente sia presente nell'Array
for (var i = 0; i < email.length; i++) {
  var item = email[i];

  if (item == user) {
    userFound = true;
  }
}

// Invio un feedback all'utente
if (userFound == true) {
  // Utente trovato
  console.log('Indirizzo e-mail trovato, puoi accedere');
}
else {
  console.log('Errore di autenticazione');
}
