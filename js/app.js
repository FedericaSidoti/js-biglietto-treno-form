/* -  recuperare il bottone per inivare i dati*/ 

const btnDomElement = document.getElementById('btn-price')



/* Collegare il bottone al click */
btnDomElement.addEventListener('click', function () {
    /*  - recuperare l'input */

const inputDomElement = document.getElementById('kmrequest'); 

/*    - recuperare la select */

const selectDomElement = document.getElementById('agerequest');

	// recupero dall'input il valore 
	let km = parseInt(inputDomElement.value)

    // recupero dalla select il valore 

    let age = parseInt(selectDomElement.value)

    /*calcolo*/
const prezzoTotaleKM = 0.21 * km
let valoreSconto = 0 

if (age === 0) {
    valoreSconto = prezzoTotaleKM * ( 20 / 100)
}
else if (age === 2) {
    valoreSconto = prezzoTotaleKM * ( 40 / 100)
}
    
let prezzoFinale = prezzoTotaleKM - valoreSconto; 
    prezzoFinale = prezzoFinale.toFixed(2);
    
    console.dir(km)
    console.dir(age) 
    console.log(prezzoTotaleKM)
    console.log(valoreSconto)
    console.log(prezzoFinale)

    })


    
