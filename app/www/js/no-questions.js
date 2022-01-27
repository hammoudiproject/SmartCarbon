// Redirige vers la page de score quand l'utilisateur clique sur le bouton "Get my Score !"
let scoreButton = document.getElementById("score-button").addEventListener("click", handleScoreButton);
// Redirige vers la page d'accueil quand l'utilisateur utilise le bouton back de son téléphone
document.addEventListener("backbutton", handleBackButton, false);

// Redirige vers score.html
function handleScoreButton() {
    window.location.href = "./score.html";
}

// Redirige vers home.html
function handleBackButton() {
    window.location.href = "./home.html";
}