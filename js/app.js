/* -  recuperare il bottone per inivare i dati*/ 
const btnDomElement = document.getElementById('btn-price')
/* - recuperare il nome */
const textDomElement = document.getElementById('namerequest')
/*  - recuperare l'input */
const inputDomElement = document.getElementById('kmrequest'); 
/*    - recuperare la select */
const selectDomElement = document.getElementById('agerequest');

/* Collegare il bottone al click */
btnDomElement.addEventListener('click', function () {
// recupero dall'input il valore 
const km = parseFloat(inputDomElement.value)
// recupero dalla select il valore 
const age = parseInt(selectDomElement.value)
/*calcolo*/
const prezzoTotaleKM = 0.21 * km ;
let valoreSconto = 0 ;
let ageValue = 'da 18 a 65' ; 

if (age === 0) {
    valoreSconto = prezzoTotaleKM * ( 20 / 100)
    ageValue = 'da 0 a 18'

}
else if (age === 2) {
    valoreSconto = prezzoTotaleKM * ( 40 / 100)
    ageValue = 'più di 65'
}
    
let prezzoFinale = prezzoTotaleKM - valoreSconto; 
    prezzoFinale = prezzoFinale.toFixed(2);
    
    console.dir(km)
    console.dir(age) 
    console.log(prezzoTotaleKM)
    console.log(valoreSconto)
    console.log(prezzoFinale)

//aggiungere stampa del recap
const nameDomElement = document.getElementById('name-stamp');
nameDomElement.innerHTML = textDomElement.value ;

const ageDomElement = document.getElementById('age-stamp')
ageDomElement.innerHTML = ageValue ;

const kmDomElement = document.getElementById('km-stamp')
kmDomElement.innerHTML = km ;

const priceDomElement = document.getElementById('price-stamp')
priceDomElement.innerHTML = prezzoFinale ; 

    })




    
