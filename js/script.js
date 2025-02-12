/*-----------------------------------------------sidebar----------------------------------------------*/
function openNav() {
    let sidebar = document.getElementById("mySidebar");
    let links = document.querySelectorAll("#mySidebar a");

    // 1. Mostra la sidebar temporaneamente con larghezza auto
    sidebar.style.width = "auto";
    sidebar.style.display = "block";

    setTimeout(() => {
        let maxWidth = 0;

        // 2. Trova la larghezza del link più lungo
        links.forEach(link => {
            let width = link.getBoundingClientRect().width;
            if (width > maxWidth) {
                maxWidth = width;
            }
        });

        // 3. Assegna la larghezza massima alla sidebar con un po' di margine
        sidebar.style.width = (maxWidth + 5) + "px"; // Aggiunge 2px di margine
        document.getElementById("main").style.display = "none";
    }, 50); // Aspetta un attimo per il rendering
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.display = "block";
}

/*----------------------------------------------------------------------------------------------------*/
/*-------------------------------------------tasto copia----------------------------------------------*/
// Funzione per copiare il valore del paragrafo negli appunti
function copyToClipboard(text) {
    // Usa la Clipboard API moderna
    navigator.clipboard.writeText(text)
        .then(function () {
            console.log("Testo copiato negli appunti");
        })
        .catch(function (err) {
            console.error("Errore nella copia: ", err);
        });
}
/*----------------------------------------------------------------------------------------------------*/