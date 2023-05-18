//DICHIARAZIONE VARIABILI
const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");
let prezzo =

//IMPOSTAZIONE TASTI
genera.addEventListener("click", function() {
    let nome = (document.getElementById("nome").value);
    console.log(nome)
    let km = parseInt(document.getElementById("km").value);
    console.log(km)
    let eta = document.getElementById("eta").value;
    console.log(eta)
    let numero_carrozza = Math.floor(Math.random() * 9 + 1)
    let numero_codice = Math.floor(Math.random() * (99999 - 10000) + 10000)

    // IF PER LA VERIFICA DEL CONTENUTO INSERITO DALL'UTENTE
    if (isNaN(km)) {
        alert("Uno dei valori non è un numero")
        throw new Error("Valori inseriti non validi")
    } else {

    }

    //VISUALIZZAZIONE DATI
    document.getElementById("nomePasseggero").innerHTML = nome
    document.getElementById("carrozza").innerHTML = numero_carrozza
    document.getElementById("codice").innerHTML = numero_codice

    // CALCOLO COSTO BIGLIETTI
    if (eta === "minorenne") {
        let prezzo = ((km * 0.21) * 0.8).toFixed(2)
        document.getElementById("costo").innerHTML = prezzo +"\u20ac"
        document.getElementById("offerta").innerHTML = "Biglietto Minori"
    } else if (eta === "over_65") {
        let prezzo = ((km * 0.21) * 0.6).toFixed(2)
        document.getElementById("costo").innerHTML = prezzo +"\u20ac"
        document.getElementById("offerta").innerHTML = "Biglietto Over 65"
    } else {
        let prezzo = (km * 0.21).toFixed(2)
        document.getElementById("costo").innerHTML = prezzo +"\u20ac"
        document.getElementById("offerta").innerHTML = "Biglietto Standard"
    }

    
}); 