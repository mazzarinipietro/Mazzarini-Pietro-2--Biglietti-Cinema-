function calcolaPrezzo() {
    let eta;

    while (true) {
        let input = prompt("Inserisci la tua eta");

        if (input === null) {
            return;
        }

        input = input.trim();

        if (input !== "" && !isNaN(input) && Number.isInteger(Number(input)) && Number(input) >= 0) {
            eta = Number(input);
            break;
        }

        alert("Eta non valida, inserisci un numero intero maggiore o uguale a 0");
    }

    let prezzo;
    if (eta < 5) {
        prezzo = 0;
    } else if (eta >= 18 && eta <= 25) {
        prezzo = 3.5;
    } else if (eta >= 50 && eta <= 55) {
        prezzo = 5;
    } else {
        prezzo = 8;
    }

    console.log("Il totale da pagare e di " + prezzo + " €");
    alert("Il totale da pagare e di " + prezzo + " €");
}
