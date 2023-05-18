//DICHIARAZIONE VARIABILI
const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");
let prezzo =

//IMPOSTAZIONE TASTI
genera.addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    console.log(nome)
    let km = document.getElementById("km").value;
    console.log(km)
    let eta = document.getElementById("eta").value;
    console.log(eta)
    let prezzo = ("");
    // CALCOLO COSTO BIGLIETTI
    if (eta === "minorenne") {
        let prezzo = ((km * 0.21) * 0.8).toFixed(2)
    } else if (eta === "over_65") {
        let prezzo = ((km * 0.21) * 0.6).toFixed(2)
    } else {
        let prezzo = (km * 0.21).toFixed(2)
    }
}); 