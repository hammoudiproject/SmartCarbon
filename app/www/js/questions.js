// Ajoute l'event handleResponse sur tous les boutons de réponse à la question
let responseButtons = document.getElementsByClassName("response");
for (let button of responseButtons) {
    button.addEventListener("click", handleResponse);
}
// Redirige vers la page d'accueil quand l'utilisateur utilise le bouton back de son téléphone
document.addEventListener("backbutton", handleBackButton, false);
// Redirige vers la page de score quand l'utilisateur utilise le bouton "Get my score !"
document.getElementById("score-button").addEventListener("click", handleScoreButton);

// Récupération du localStorage
let storage = window.localStorage;

// L'ensemble des questions
let questions;

// L'ensemble des réponses
let reponses;

// Le score de la session de questions actuelle
let score;

// L'id de l'utilisateur
let id;
// Le nombre de questions répondues par l'utilisateur
let nbQuestionsAsked;

// Récupération des données du localStorage
handleGetSession();

// Gestion de la visibilité
handleVisibility();

// Récupération de la question et des réponses
getQuestion();

// Fonction pour récupérer les données du localStorage
function handleGetSession() {
    // Initialisation du score
    score = 0;
    // Récupération de l'id, des questions et des réponses
    id = storage.getItem("id");
    questions = JSON.parse(storage.getItem("questions"));
    reponses = JSON.parse(storage.getItem("reponses"));
    // Récupération du nombre de qestions répondues
    // Si ce n'est pas dans le localStorage, on l'initialise
    nbQuestionsAsked = storage.getItem("nbQuestionsAsked");
    if (nbQuestionsAsked == null) {
        nbQuestionsAsked = 0;
        storage.setItem("nbQuestionsAsked", nbQuestionsAsked);
    }
};

// Fonction de récupération des questions et des réponses
function getQuestion() {
    // Si l'utilisateur a répondu à l'ensemble des questions, on ajoute son score à la BDD
    // on définit le jeu comme terminé et on redirige vers no-questions.html
    if (questions != null && nbQuestionsAsked > questions.length - 1) {
        requeteServeur("addScoreToUser.php?idUser=" + id + "&score=" + score).then(function (response) {
            storage.setItem("finished", true);
            window.location.href = "./no-questions.html";
        })
    }
    // On définit le jeu comme non terminé (au cas où)
    storage.setItem("finished", false);
    // Récupération de la question courante et affichage dans la vue
    let currentQuestion = questions[nbQuestionsAsked];
    document.getElementById("question").innerHTML = currentQuestion.content;
    document.getElementById("question").value = currentQuestion.id;
    let categorie = document.getElementById("categorie");
    categorie.innerHTML = currentQuestion.categorie;
    // Modification du style de la catégorie
    switch (categorie.innerHTML) {
        case "HOUSING":
            categorie.style.backgroundColor = "green";
            categorie.style.color = "white";
            break;
        case "TRANSPORT":
            categorie.style.backgroundColor = "#708090";
            categorie.style.color = "white";
            break;
        case "FOOD":
            categorie.style.backgroundColor = "red";
            categorie.style.color = "white";
            break;
        case "ENERGY":
            categorie.style.backgroundColor = "yellow";
            categorie.style.color = "black";
            break;
        case "MATERIEL PURCHASES":
            categorie.style.backgroundColor = "#800000";
            categorie.style.color = "white";
            break;
        default:
            categorie.style.backgroundColor = "white";
            categorie.style.color = "black";
            break;
    }
    // Récupération des réponses de la question courante et affichage de leur
    // contenu et de leur valeur en points
    let responseButtons = document.getElementsByClassName("response");
    let idxButton = 0;
    for (let reponse of reponses) {
        if (reponse.idQuestion == currentQuestion.id) {
            responseButtons[idxButton].innerHTML = reponse.content;
            responseButtons[idxButton].value = reponse.value;
            idxButton++;
        }
    }
    // Récupération et affichage de l'image en base 64 de la question courante
    document.getElementById("image").src = "data:image/png;base64," + currentQuestion.image;
}

// Fonction de gestion de réponse à une question
function handleResponse(e) {
    // Incrémentation du nombre de questions répondues
    // et du score de session actuelle
    nbQuestionsAsked++;
    score += parseInt(e.target.value);
    storage.setItem("nbQuestionsAsked", nbQuestionsAsked);
    // Gestion de la visilibté du bouton de score et récupération d'une nouvelle question
    handleVisibility();
    getQuestion();
}

// Gestion de la visilibté du bouton de score et du bandeau d'info qui précise le nombre
// de questions à répondre
function handleVisibility() {
    let noAccessTip = document.getElementById("no-access");
    let scoreButton = document.getElementById("score-button");
    if (nbQuestionsAsked >= 10) {
        noAccessTip.style.visibility = "hidden";
        scoreButton.disabled = false;
    } else {
        noAccessTip.style.visibility = "visible";
        scoreButton.disabled = true;
    }
}

// Ajout du score de la session à la base de données et redirection vers la page home.html
function handleBackButton() {
    requeteServeur("addScoreToUser.php?idUser=" + id + "&score=" + score).then(function (response) {
        window.location.href = "./home.html";
    })
}

// Ajout du score de la session à la base de données et redirection vers la page score.html
function handleScoreButton() {
    requeteServeur("addScoreToUser.php?idUser=" + id + "&score=" + score).then(function (response) {
        window.location.href = "./score.html";
    })
}

// Fonction pour envoyer une requête au serveur
function requeteServeur(route) {
    return new Promise((resolve, reject) => {
        fetch("https://smartcarbon.chipmnk.dev/" + route, {
                method: "GET"
            }).then((response) => {
                if (response.ok || response.status == 404) resolve(response);
                else reject(response.statusText);
            }).then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}