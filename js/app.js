/*recuperare il bottone per inivare i dati*/ 

const btnDomElement = document.getElementById('btn-price')

/*  - recuperare l'input */

const inputDomElement = document.getElementById('kmrequest'); 

/*    - recuperare la select */

const selectDomElement = document.getElementById('agerequest')

/* Collegare il bottone al click */
btnDomElement.addEventListener('click', function () {


	// recupero dall'input il valore 
	const km = parseInt(inputDomElement.value)
	console.log(km)

    // recupero dall'input il valore 

    const age = parseInt(selectDomElement.value)
    console.dir(age) 

})

/*    - calcolare il prezzo del biglietto */