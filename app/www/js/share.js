// Récupération de l'URL de la page
var url = new URL(window.location.href);

getScore();

// Fonction pour récupérer le score de l'utilisateur depuis l'url (généré depuis la page score.html)
function getScore () {
    let score = "Undefined";
    if(url.searchParams.has("score")) {
        score = url.searchParams.get("score");
    }
    let scoreSpan = document.getElementById('score');
    scoreSpan.innerHTML = score;
}