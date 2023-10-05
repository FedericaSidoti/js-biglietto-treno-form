/* -  recuperare il bottone per inivare i dati*/ 

const btnDomElement = document.getElementById('btn-price')

/*  - recuperare l'input */

const inputDomElement = document.getElementById('kmrequest'); 

/*    - recuperare la select */

const selectDomElement = document.getElementById('agerequest');

	// recupero dall'input il valore 
	let km = parseInt(inputDomElement.value)
	

    // recupero dalla select il valore 

    let age = parseInt(selectDomElement.value)

const prezzoTotaleKM = 0.21 * km
    

let valoreSconto = 0 

if (age === 0) {
    valoreSconto = prezzoTotaleKM * ( 20 / 100)
}
else if (age === 2) {
    valoreSconto = prezzoTotaleKM * ( 40 / 100)
}

/* Collegare il bottone al click */
btnDomElement.addEventListener('click', function () {
    
    console.dir(km)
    console.dir(age) 
    console.log(prezzoTotaleKM)
    console.log(valoreSconto)


    /*    - calcolare il prezzo del biglietto */
    
        let prezzoFinale = prezzoTotaleKM - valoreSconto; 
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log(prezzoFinale)
    
    })



