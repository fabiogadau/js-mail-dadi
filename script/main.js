console.log('Js ok');
/**
* CERCARE IN UN ARRAY
**/
// Stabilisco le variabili che mi serviranno
var email = ['michele@boolean.careers', 'fabio@boolean.careers', 'roberto@boolean.careers'];
var user = prompt('Inserisci il tuo indirizzo e-mail');
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


/**
* GIOCO DEI DADI
**/
// Stabilisco le variabili che mi serviranno
var dado = document.getElementById('dado');

// Assegno la funzione al bottone
dado.addEventListener('click',
  function() {
    player = Math.floor(Math.random() * 6) + 1;
    console.log(player);
    computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer);

    if (player > computer) {
      console.log('Hai vinto');
    }
    else if (player == computer) {
      console.log('Pareggiato');
    }
    else {
      console.log('Hai perso');
    }
  }
)
